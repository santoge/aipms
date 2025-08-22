"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, X } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface CategoryManagerProps {
  categories: any[]
  type: "blog" | "gallery"
  tableName: string
}

export default function CategoryManager({ categories: initialCategories, type, tableName }: CategoryManagerProps) {
  const router = useRouter()
  const [categories, setCategories] = useState(initialCategories)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    if (!supabase) return

    try {
      if (editingId) {
        // Update existing category
        const { error } = await supabase.from(tableName).update(formData).eq("id", editingId)
        if (error) throw error
      } else {
        // Create new category
        const { error } = await supabase.from(tableName).insert([formData])
        if (error) throw error
      }

      // Reset form and refresh
      setFormData({ name: "", slug: "", description: "" })
      setShowForm(false)
      setEditingId(null)
      router.refresh()
    } catch (error) {
      console.error("Error saving category:", error)
      alert("Error saving category")
    }
  }

  const handleEdit = (category: any) => {
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || "",
    })
    setEditingId(category.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string, name: string) => {
    const supabase = createClient()
    if (!supabase) return
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return

    try {
      const { error } = await supabase.from(tableName).delete().eq("id", id)
      if (error) throw error
      router.refresh()
    } catch (error) {
      console.error("Error deleting category:", error)
      alert("Error deleting category")
    }
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">
          {categories.length} {type} {categories.length === 1 ? "category" : "categories"}
        </h3>
        <Button
          onClick={() => {
            setFormData({ name: "", slug: "", description: "" })
            setEditingId(null)
            setShowForm(true)
          }}
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-gray-50">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => {
                const name = e.target.value
                setFormData((prev) => ({
                  ...prev,
                  name,
                  slug: generateSlug(name),
                }))
              }}
              placeholder="Category name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
              placeholder="category-slug"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Category description"
              rows={2}
            />
          </div>

          <div className="flex space-x-2">
            <Button type="submit" size="sm">
              <Save className="h-4 w-4 mr-1" />
              {editingId ? "Update" : "Create"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
              }}
            >
              <X className="h-4 w-4 mr-1" />
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <div className="font-medium">{category.name}</div>
              <div className="text-sm text-gray-500">{category.description}</div>
              <Badge variant="outline" className="text-xs mt-1">
                {category.slug}
              </Badge>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(category)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(category.id, category.name)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {categories.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No {type} categories found. Create your first category above.
          </div>
        )}
      </div>
    </div>
  )
}
