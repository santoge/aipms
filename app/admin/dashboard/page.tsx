import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, FileText, ImageIcon, Settings, TrendingUp, Eye, Edit } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function AdminDashboard() {
  const supabase = await createClient()

  if (!supabase) {
    redirect("/login")
  }

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error || !user) {
      redirect("/login") // Updated redirect path
    }

    // Check if user is admin
    const { data: adminProfile, error: profileError } = await supabase
      .from("admin_profiles")
      .select("*")
      .eq("id", user.id)
      .single()

    if (profileError || !adminProfile) {
      redirect("/login") // Updated redirect path
    }

    let blogCount = 0,
      authorCount = 0,
      galleryCount = 0,
      categoryCount = 0
    let recentPosts = []

    try {
      const [blogResult, authorResult, galleryResult, categoryResult] = await Promise.all([
        supabase.from("blog_posts").select("*", { count: "exact", head: true }),
        supabase.from("authors").select("*", { count: "exact", head: true }),
        supabase.from("gallery_images").select("*", { count: "exact", head: true }),
        supabase.from("categories").select("*", { count: "exact", head: true }),
      ])

      blogCount = blogResult.count || 0
      authorCount = authorResult.count || 0
      galleryCount = galleryResult.count || 0
      categoryCount = categoryResult.count || 0
    } catch (statsError) {
      console.error("Error fetching stats:", statsError)
    }

    try {
      const { data: postsData } = await supabase
        .from("blog_posts")
        .select(`
          *,
          authors (name),
          categories (name)
        `)
        .order("created_at", { ascending: false })
        .limit(5)

      recentPosts = postsData || []
    } catch (postsError) {
      console.error("Error fetching recent posts:", postsError)
    }

    const stats = [
      {
        title: "Blog Posts",
        value: blogCount,
        icon: FileText,
        color: "bg-blue-500",
        href: "/admin/blog",
      },
      {
        title: "Authors",
        value: authorCount,
        icon: Users,
        color: "bg-green-500",
        href: "/admin/authors",
      },
      {
        title: "Gallery Images",
        value: galleryCount,
        icon: ImageIcon,
        color: "bg-purple-500",
        href: "/admin/gallery",
      },
      {
        title: "Categories",
        value: categoryCount,
        icon: Settings,
        color: "bg-orange-500",
        href: "/admin/categories",
      },
    ]

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Welcome back, {adminProfile.full_name || adminProfile.email}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge className="bg-green-100 text-green-800">{adminProfile.role}</Badge>
                <Link href="/">
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Site
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Link key={index} href={stat.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Blog Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Recent Blog Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts?.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 line-clamp-1">{post.title}</h4>
                        <p className="text-sm text-gray-600">
                          By {post.authors?.name} • {new Date(post.created_at).toLocaleDateString()}
                        </p>
                        <Badge variant={post.published ? "default" : "secondary"} className="mt-1">
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                      </div>
                      <Link href={`/admin/blog/${post.id}/edit`}>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  ))}
                  {(!recentPosts || recentPosts.length === 0) && (
                    <p className="text-gray-500 text-center py-4">No blog posts yet</p>
                  )}
                </div>
                <div className="mt-4">
                  <Link href="/admin/blog">
                    <Button variant="outline" className="w-full bg-transparent">
                      View All Posts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/admin/blog/new">
                    <Button className="w-full h-20 flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-600">
                      <FileText className="h-6 w-6 mb-2" />
                      New Post
                    </Button>
                  </Link>
                  <Link href="/admin/gallery/new">
                    <Button className="w-full h-20 flex flex-col items-center justify-center bg-purple-500 hover:bg-purple-600">
                      <ImageIcon className="h-6 w-6 mb-2" />
                      Add Image
                    </Button>
                  </Link>
                  <Link href="/admin/authors/new">
                    <Button className="w-full h-20 flex flex-col items-center justify-center bg-green-500 hover:bg-green-600">
                      <Users className="h-6 w-6 mb-2" />
                      New Author
                    </Button>
                  </Link>
                  <Link href="/admin/settings">
                    <Button className="w-full h-20 flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600">
                      <Settings className="h-6 w-6 mb-2" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Admin dashboard error:", error)
    redirect("/login")
  }
}
