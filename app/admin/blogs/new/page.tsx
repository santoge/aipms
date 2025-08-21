import BlogForm from "@/components/blog-form"

export const dynamic = "force-dynamic"

export default function NewBlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
        <p className="text-gray-600 mt-2">Write and publish a new blog post</p>
      </div>

      <BlogForm />
    </div>
  )
}
