"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Save, Upload, X } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { compressImage } from "@/lib/image-utils"

interface GalleryFormProps {
  initialData?: any
}

export default function GalleryForm({ initialData }: GalleryFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [categories, setCategories] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    image_url: initialData?.image_url || "",
    alt_text: initialData?.alt_text || "",
    category_id: initialData?.category_id || "",
    display_order: initialData?.display_order || 0,
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase.from("gallery_categories").select("*").order("name")

      if (error) {
        console.error("Error fetching categories:", error)
        setError("Failed to load categories")
        return
      }

      if (data) setCategories(data)
    } catch (error) {
      console.error("Unexpected error fetching categories:", error)
      setError("Failed to load form data")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!formData.title.trim()) {
      setError("Title is required")
      setLoading(false)
      return
    }

    if (!formData.image_url) {
      setError("Please upload an image")
      setLoading(false)
      return
    }

    try {
      const supabase = createClient()

      const dataToSave = {
        ...formData,
        updated_at: new Date().toISOString(),
      }

      let result
      if (initialData) {
        result = await supabase.from("gallery_images").update(dataToSave).eq("id", initialData.id)
      } else {
        result = await supabase.from("gallery_images").insert([dataToSave])
      }

      if (result.error) {
        console.error("Database error:", result.error)
        setError(`Failed to ${initialData ? "update" : "add"} image: ${result.error.message}`)
        return
      }

      router.push("/admin/gallery")
    } catch (err) {
      console.error("Unexpected error:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    setError(null)

    try {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"]
      if (!allowedTypes.includes(file.type)) {
        setError("Please upload a valid image file (JPEG, PNG, or WebP)")
        return
      }

      // Compress image to below 150KB
      const compressedFile = await compressImage(file, 150)
      console.log(
        `[v0] Gallery image - Original: ${(file.size / 1024).toFixed(1)}KB, Compressed: ${(compressedFile.size / 1024).toFixed(1)}KB`,
      )

      const supabase = createClient()
      const fileExt = "jpg"
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `gallery-images/${fileName}`

      const { data, error } = await supabase.storage.from("images").upload(filePath, compressedFile, {
        cacheControl: "3600",
        upsert: false,
      })

      if (error) {
        console.error("Upload error:", error)
        setError("Failed to upload image. Please try again.")
        return
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("images").getPublicUrl(filePath)

      setFormData((prev) => ({
        ...prev,
        image_url: publicUrl,
        alt_text: prev.alt_text || formData.title, // Auto-set alt text if empty
      }))
      setError(null)
    } catch (error) {
      console.error("Upload error:", error)
      setError("Failed to process image. Please try again.")
    } finally {
      setUploadingImage(false)
    }
  }

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image_url: "" }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? "Edit" : "Add"} Gallery Image</CardTitle>
      </CardHeader>
      <CardContent>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Enter image title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alt_text">Alt Text</Label>
              <Input
                id="alt_text"
                value={formData.alt_text}
                onChange={(e) => setFormData((prev) => ({ ...prev, alt_text: e.target.value }))}
                placeholder="Descriptive text for accessibility"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description of the image"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category_id}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category_id: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="display_order">Display Order</Label>
              <Input
                id="display_order"
                type="number"
                value={formData.display_order}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, display_order: Number.parseInt(e.target.value) || 0 }))
                }
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image * (Auto-compressed to &lt;150KB)</Label>
            <div className="flex items-center space-x-4">
              <Input
                id="image"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                className="flex-1"
                disabled={uploadingImage}
              />
              <Button type="button" variant="outline" size="sm" disabled={uploadingImage}>
                {uploadingImage ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4 mr-2" />
                )}
                {uploadingImage ? "Compressing..." : "Upload"}
              </Button>
            </div>
            {formData.image_url && (
              <div className="relative inline-block">
                <img
                  src={formData.image_url || "/placeholder.svg"}
                  alt="Image preview"
                  className="w-48 h-32 object-cover rounded-lg mt-2"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0"
                  onClick={removeImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {initialData ? "Update" : "Add"} Image
                </>
              )}
            </Button>

            <Button type="button" variant="outline" onClick={() => router.push("/admin/gallery")}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
