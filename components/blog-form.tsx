"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Save, Upload } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface BlogFormProps {
  initialData?: any
}

export default function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [authors, setAuthors] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    summary: initialData?.summary || "",
    content: initialData?.content || "",
    featured_image_url: initialData?.featured_image_url || "",
    author_id: initialData?.author_id || "",
    category_id: initialData?.category_id || "",
    published: initialData?.published || false,
  })

  useEffect(() => {
    fetchAuthorsAndCategories()
  }, [])

  useEffect(() => {
    if (formData.title && !initialData) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }, [formData.title, initialData])

  const fetchAuthorsAndCategories = async () => {
    try {
      const supabase = createClient()

      const [authorsResult, categoriesResult] = await Promise.all([
        supabase.from("authors").select("*").order("name"),
        supabase.from("categories").select("*").order("name"),
      ])

      if (authorsResult.error) {
        console.error("Error fetching authors:", authorsResult.error)
        setError("Failed to load authors")
        return
      }

      if (categoriesResult.error) {
        console.error("Error fetching categories:", categoriesResult.error)
        setError("Failed to load categories")
        return
      }

      if (authorsResult.data) setAuthors(authorsResult.data)
      if (categoriesResult.data) setCategories(categoriesResult.data)
    } catch (error) {
      console.error("Unexpected error fetching data:", error)
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

    if (!formData.content.trim()) {
      setError("Content is required")
      setLoading(false)
      return
    }

    try {
      const supabase = createClient()

      const dataToSave = {
        ...formData,
        published_at: formData.published ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      }

      let result
      if (initialData) {
        result = await supabase.from("blog_posts").update(dataToSave).eq("id", initialData.id)
      } else {
        result = await supabase.from("blog_posts").insert([dataToSave])
      }

      if (result.error) {
        console.error("Database error:", result.error)
        setError(`Failed to ${initialData ? "update" : "create"} post: ${result.error.message}`)
        return
      }

      router.push("/admin/blogs")
    } catch (err) {
      console.error("Unexpected error:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const maxSize = 5 * 1024 * 1024 // 5MB
      if (file.size > maxSize) {
        setError("Image file size must be less than 5MB")
        return
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"]
      if (!allowedTypes.includes(file.type)) {
        setError("Please upload a valid image file (JPEG, PNG, WebP, or GIF)")
        return
      }

      const imageUrl = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(formData.title || "blog image")}`
      setFormData((prev) => ({ ...prev, featured_image_url: imageUrl }))
      setError(null)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? "Edit" : "Create"} Blog Post</CardTitle>
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
                placeholder="Enter blog post title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                placeholder="url-friendly-slug"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              id="summary"
              value={formData.summary}
              onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
              placeholder="Brief summary of the blog post"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="author">Author *</Label>
              <Select
                value={formData.author_id}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, author_id: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select author" />
                </SelectTrigger>
                <SelectContent>
                  {authors.map((author) => (
                    <SelectItem key={author.id} value={author.id}>
                      {author.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

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
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <div className="flex items-center space-x-4">
              <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="flex-1" />
              <Button type="button" variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
            {formData.featured_image_url && (
              <img
                src={formData.featured_image_url || "/placeholder.svg"}
                alt="Featured image preview"
                className="w-32 h-32 object-cover rounded-lg mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
              placeholder="Write your blog post content here..."
              rows={12}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
            />
            <Label htmlFor="published">Publish immediately</Label>
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
                  {initialData ? "Update" : "Create"} Post
                </>
              )}
            </Button>

            <Button type="button" variant="outline" onClick={() => router.push("/admin/blogs")}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
