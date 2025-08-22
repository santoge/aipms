export const dynamic = "force-dynamic"

import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Share2, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  featured_image_url: string | null
  published: boolean
  published_at: string | null
  created_at: string
  authors: { name: string; avatar_url: string | null } | null
  categories: { name: string; slug: string } | null
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: BlogPost | null = null
  let relatedPosts: BlogPost[] = []

  try {
    const supabase = await createClient()

    // Fetch the specific blog post
    const { data: postData, error: postError } = await supabase
      .from("blog_posts")
      .select(`
        *,
        authors (name, avatar_url),
        categories (name, slug)
      `)
      .eq("slug", params.slug)
      .eq("published", true)
      .single()

    if (postError || !postData) {
      notFound()
    }

    post = postData

    // Fetch related posts from the same category
    if (post.categories?.slug) {
      const { data: relatedData } = await supabase
        .from("blog_posts")
        .select(`
          *,
          authors (name, avatar_url),
          categories (name, slug)
        `)
        .eq("published", true)
        .eq("categories.slug", post.categories.slug)
        .neq("id", post.id)
        .limit(3)

      relatedPosts = relatedData || []
    }
  } catch (error) {
    console.error("Database connection error:", error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog">
              <Button
                variant="outline"
                className="mb-8 border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            {/* Category Badge */}
            {post.categories && <Badge className="mb-4 bg-[#002366] text-white">{post.categories.name}</Badge>}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6 leading-tight">{post.title}</h1>

            {/* Summary */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.summary}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Image
                  src={post.authors?.avatar_url || "/placeholder.svg?height=48&width=48"}
                  alt={post.authors?.name || "Author"}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-[#002366]">{post.authors?.name}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {Math.floor(Math.random() * 1000) + 100} views
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white bg-transparent"
                >
                  <Heart className="h-4 w-4 mr-1" />
                  Like
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            {post.featured_image_url && (
              <div className="mb-12">
                <Image
                  src={post.featured_image_url || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#002366] mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={relatedPost.featured_image_url || "/placeholder.svg?height=200&width=300"}
                        alt={relatedPost.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-[#002366] mb-2 line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.summary}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
