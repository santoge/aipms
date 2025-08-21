"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Edit, Trash2, Save, X, User } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface AuthorManagerProps {
  authors: any[]
}

export default function AuthorManager({ authors: initialAuthors }: AuthorManagerProps) {
  const router = useRouter()
  const [authors, setAuthors] = useState(initialAuthors)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    avatar_url: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const supabase = createClient()
    if (!supabase) {
      alert("Database connection not available")
      return
    }

    try {
      if (editingId) {
        // Update existing author
        const { error } = await supabase.from("authors").update(formData).eq("id", editingId)
        if (error) throw error
      } else {
        // Create new author
        const { error } = await supabase.from("authors").insert([formData])
        if (error) throw error
      }

      // Reset form and refresh
      setFormData({ name: "", email: "", bio: "", avatar_url: "" })
      setShowForm(false)
      setEditingId(null)
      router.refresh()
    } catch (error) {
      console.error("Error saving author:", error)
      alert("Error saving author")
    }
  }

  const handleEdit = (author: any) => {
    setFormData({
      name: author.name,
      email: author.email || "",
      bio: author.bio || "",
      avatar_url: author.avatar_url || "",
    })
    setEditingId(author.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return

    const supabase = createClient()
    if (!supabase) {
      alert("Database connection not available")
      return
    }

    try {
      const { error } = await supabase.from("authors").delete().eq("id", id)
      if (error) throw error
      router.refresh()
    } catch (error) {
      console.error("Error deleting author:", error)
      alert("Error deleting author")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">
          {authors.length} {authors.length === 1 ? "author" : "authors"}
        </h3>
        <Button
          onClick={() => {
            setFormData({ name: "", email: "", bio: "", avatar_url: "" })
            setEditingId(null)
            setShowForm(true)
          }}
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Author
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Author name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="author@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
              placeholder="Author biography"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="avatar_url">Avatar URL</Label>
            <Input
              id="avatar_url"
              value={formData.avatar_url}
              onChange={(e) => setFormData((prev) => ({ ...prev, avatar_url: e.target.value }))}
              placeholder="https://example.com/avatar.jpg"
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

      <div className="space-y-3">
        {authors.map((author) => (
          <div key={author.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={author.avatar_url || "/placeholder.svg"} alt={author.name} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{author.name}</div>
                {author.email && <div className="text-sm text-gray-500">{author.email}</div>}
                {author.bio && <div className="text-sm text-gray-600 mt-1">{author.bio}</div>}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleEdit(author)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(author.id, author.name)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {authors.length === 0 && (
          <div className="text-center py-8 text-gray-500">No authors found. Create your first author above.</div>
        )}
      </div>
    </div>
  )
}
