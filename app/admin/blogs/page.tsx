import { createServerClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Eye } from "lucide-react"
import Link from "next/link"
import DeleteBlogButton from "@/components/delete-blog-button"

export const dynamic = "force-dynamic"

export default async function BlogsPage() {
  const supabase = createServerClient()

  if (!supabase) {
    return <div>Supabase not configured</div>
  }

  // Fetch blog posts with author and category information
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      authors(name),
      categories(name)
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching posts:", error)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-2">Manage your blog posts and articles</p>
        </div>
        <Link href="/admin/blogs/new">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="mt-2">{post.summary || "No summary available"}</CardDescription>
                    <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                      <span>By {post.authors?.name || "Unknown Author"}</span>
                      {post.categories && <Badge variant="secondary">{post.categories.name}</Badge>}
                      <Badge variant={post.published ? "default" : "outline"}>
                        {post.published ? "Published" : "Draft"}
                      </Badge>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  {post.featured_image_url && (
                    <img
                      src={post.featured_image_url || "/placeholder.svg"}
                      alt={post.title}
                      className="w-24 h-24 object-cover rounded-lg ml-4"
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                  <Link href={`/admin/blogs/edit/${post.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteBlogButton postId={post.id} postTitle={post.title} />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 mb-4">No blog posts found</p>
              <Link href="/admin/blogs/new">
                <Button>Create your first blog post</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
