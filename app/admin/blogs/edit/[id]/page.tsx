import { createServerClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import BlogForm from "@/components/blog-form"

interface EditBlogPageProps {
  params: {
    id: string
  }
}

export const dynamic = "force-dynamic"

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const supabase = createServerClient()

  if (!supabase) {
    return <div>Supabase not configured</div>
  }

  const { data: post, error } = await supabase.from("blog_posts").select("*").eq("id", params.id).single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        <p className="text-gray-600 mt-2">Update your blog post</p>
      </div>

      <BlogForm initialData={post} />
    </div>
  )
}
