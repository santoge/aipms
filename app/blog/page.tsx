export const dynamic = "force-dynamic"

import { createClient } from "@/lib/supabase/server"
import { Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogClientComponent from "@/components/blog-client"

export default async function BlogPage() {
  let blogPosts: any[] = []
  let categories: any[] = []

  try {
    const supabase = await createClient()

    // Fetch blog posts with proper error handling
    const { data: postsData, error: postsError } = await supabase
      .from("blog_posts")
      .select(`
        *,
        authors (name, avatar_url),
        categories (name, slug)
      `)
      .eq("published", true)
      .order("created_at", { ascending: false })

    if (postsError) {
      console.error("Blog posts fetch error:", postsError)
      blogPosts = []
    } else {
      blogPosts = postsData || []
    }

    // Fetch categories with simple count
    const { data: categoriesData, error: categoriesError } = await supabase.from("categories").select("*").order("name")

    if (categoriesError) {
      console.error("Categories fetch error:", categoriesError)
      categories = []
    } else {
      categories = categoriesData || []
    }
  } catch (error) {
    console.error("Database connection error:", error)
    // Continue with empty arrays - don't crash the page
  }

  const processedCategories = [
    { id: "all", name: "All Posts", count: blogPosts.length, iconName: "BookOpen", color: "bg-blue-500" },
    ...categories.map((cat) => ({
      id: cat.slug,
      name: cat.name,
      count: blogPosts.filter((post) => post.categories?.slug === cat.slug).length,
      iconName: getIconNameForCategory(cat.slug),
      color: getColorForCategory(cat.slug),
    })),
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured_image_url) || []
  const latestPosts = blogPosts.slice(0, 3) || []

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/95 to-[#003d82]/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20 shadow-2xl">
                <Zap className="h-4 w-4 mr-2" />
                Stories, Insights & Updates
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Our
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Blog</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover inspiring stories, industry insights, and the latest updates from{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Adhithyan Institute
              </span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: `${blogPosts.length}`, label: "Articles Published" },
                { number: "50K+", label: "Monthly Readers" },
                { number: `${categories.length}`, label: "Expert Contributors" },
                { number: `${processedCategories.length}`, label: "Categories Covered" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Component for Interactive Features */}
      <BlogClientComponent
        blogPosts={blogPosts}
        categories={processedCategories}
        featuredPosts={featuredPosts}
        latestPosts={latestPosts}
      />

      <Footer />
    </div>
  )
}

function getIconNameForCategory(slug: string): string {
  const iconMap: { [key: string]: string } = {
    education: "GraduationCap",
    "success-stories": "Award",
    "industry-news": "TrendingUp",
    "campus-life": "Users",
    partnerships: "Globe",
    community: "Heart",
  }
  return iconMap[slug] || "BookOpen"
}

function getColorForCategory(slug: string) {
  const colorMap: { [key: string]: string } = {
    education: "bg-green-500",
    "success-stories": "bg-yellow-500",
    "industry-news": "bg-purple-500",
    "campus-life": "bg-pink-500",
    partnerships: "bg-indigo-500",
    community: "bg-red-500",
  }
  return colorMap[slug] || "bg-gray-500"
}
