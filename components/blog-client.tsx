"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  TrendingUp,
  Heart,
  ChevronRight,
  Award,
  Eye,
  BookOpen,
  Users,
  GraduationCap,
  Globe,
} from "lucide-react"
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

interface Category {
  id: string
  name: string
  count: number
  iconName: string // Changed from icon component to string
  color: string
}

interface BlogClientComponentProps {
  blogPosts: BlogPost[]
  categories: Category[]
  featuredPosts: BlogPost[]
  latestPosts: BlogPost[]
}

function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: any } = {
    BookOpen,
    GraduationCap,
    Award,
    TrendingUp,
    Users,
    Globe,
    Heart,
  }
  return iconMap[iconName] || BookOpen
}

export default function BlogClientComponent({
  blogPosts,
  categories,
  featuredPosts,
  latestPosts,
}: BlogClientComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.categories?.slug === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const trendingTags = [
    "technology",
    "innovation",
    "career",
    "health",
    "education",
    "success",
    "community",
    "partnerships",
  ]

  return (
    <>
      {/* Search and Categories */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50/30 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#002366]/20 focus:border-[#002366] bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = getIconComponent(category.iconName)
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    className={`${
                      selectedCategory === category.id
                        ? "bg-[#002366] hover:bg-[#003d82]"
                        : "border-[#002366]/20 text-[#002366] hover:bg-[#002366]/5"
                    } transition-all duration-300`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-2">Featured Stories</h2>
                <p className="text-gray-600">Our most popular and impactful articles</p>
              </div>
              <Badge className="bg-gradient-to-r from-[#002366] to-[#003d82] text-white px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.featured_image_url || "/placeholder.svg?height=300&width=600"}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Featured Badge */}
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>

                      {/* Category Badge */}
                      <Badge className="absolute top-4 right-4 bg-[#002366] text-white shadow-lg">
                        {post.categories?.name}
                      </Badge>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={post.authors?.avatar_url || "/placeholder.svg?height=32&width=32"}
                            alt={post.authors?.name || "Author"}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-medium text-[#002366]">{post.authors?.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#002366] mb-3 line-clamp-2 group-hover:text-[#003d82] transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">{post.summary}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {Math.floor(Math.random() * 1000) + 100}
                          </span>
                          <span className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {Math.floor(Math.random() * 100) + 10}
                          </span>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button size="sm" className="bg-[#002366] hover:bg-[#003d82]">
                            Read More
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#002366]">
                  {selectedCategory === "all"
                    ? "Latest Articles"
                    : `${categories.find((c) => c.id === selectedCategory)?.name} Articles`}
                </h2>
                <span className="text-sm text-gray-500">{filteredPosts.length} articles found</span>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white"
                    >
                      <CardContent className="p-0">
                        <div className="md:flex">
                          <div className="md:w-1/3 relative overflow-hidden">
                            <Image
                              src={post.featured_image_url || "/placeholder.svg?height=200&width=300"}
                              alt={post.title}
                              width={300}
                              height={200}
                              className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>

                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center space-x-2 mb-3">
                              <Badge variant="outline" className="text-[#002366] border-[#002366]">
                                {post.categories?.name}
                              </Badge>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {new Date(post.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#002366] mb-3 line-clamp-2 group-hover:text-[#003d82] transition-colors">
                              {post.title}
                            </h3>

                            <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Image
                                  src={post.authors?.avatar_url || "/placeholder.svg?height=24&width=24"}
                                  alt={post.authors?.name || "Author"}
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 rounded-full"
                                />
                                <span className="text-sm text-gray-600">{post.authors?.name}</span>
                              </div>

                              <Link href={`/blog/${post.slug}`}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white bg-transparent"
                                >
                                  Read More
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Tags */}
              <Card className="p-6 bg-white shadow-lg border-0">
                <h3 className="text-lg font-bold text-[#002366] mb-4">Trending Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-[#002366] hover:text-white transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Latest Posts */}
              <Card className="p-6 bg-white shadow-lg border-0">
                <h3 className="text-lg font-bold text-[#002366] mb-4">Latest Posts</h3>
                <div className="space-y-4">
                  {latestPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <div className="flex space-x-3 group cursor-pointer">
                        <Image
                          src={post.featured_image_url || "/placeholder.svg?height=60&width=60"}
                          alt={post.title}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-[#002366] line-clamp-2 group-hover:text-[#003d82] transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{new Date(post.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-gradient-to-br from-[#002366] to-[#003d82] text-white shadow-lg border-0">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest articles and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Button className="w-full bg-white text-[#002366] hover:bg-blue-50">Subscribe</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
