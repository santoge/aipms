"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AuthorManager from "@/components/author-manager"

export const dynamic = "force-dynamic"

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const supabase = createClient()
        if (!supabase) {
          console.warn("Supabase client not available")
          return
        }

        const { data } = await supabase.from("authors").select("*").order("name")
        setAuthors(data || [])
      } catch (error) {
        console.error("Error fetching authors:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAuthors()
  }, [])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Authors</h1>
        <p className="text-gray-600 mt-2">Manage blog authors and contributors</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Authors</CardTitle>
          <CardDescription>Add and manage authors for your blog posts</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthorManager authors={authors} />
        </CardContent>
      </Card>
    </div>
  )
}
