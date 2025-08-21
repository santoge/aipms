import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryClientComponent from "@/components/gallery-client"
import { createClient } from "@/lib/supabase/server"
import { Camera } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function GalleryPage() {
  let galleryImages: any[] = []
  let galleryCategories: any[] = []

  try {
    const supabase = await createClient()

    // Fetch gallery images
    const { data: imagesData, error: imagesError } = await supabase
      .from("gallery_images")
      .select(`
        *,
        gallery_categories (name, slug)
      `)
      .order("created_at", { ascending: false })

    if (imagesError) {
      console.error("Gallery images fetch error:", imagesError)
      galleryImages = []
    } else {
      galleryImages = imagesData || []
    }

    // Fetch gallery categories
    const { data: categoriesData, error: categoriesError } = await supabase
      .from("gallery_categories")
      .select("*")
      .order("name")

    if (categoriesError) {
      console.error("Gallery categories fetch error:", categoriesError)
      galleryCategories = []
    } else {
      galleryCategories = categoriesData || []
    }
  } catch (error) {
    console.error("Database connection error:", error)
    // Continue with empty arrays - don't crash the page
  }

  const categories = [
    { id: "all", name: "All Photos", count: galleryImages.length, iconName: "Camera" },
    ...galleryCategories.map((cat) => ({
      id: cat.slug,
      name: cat.name,
      count: galleryImages.filter((img) => img.gallery_categories?.slug === cat.slug).length,
      iconName: cat.slug === "events" ? "Calendar" : "Users",
    })),
  ]

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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20 shadow-2xl">
                <Camera className="h-4 w-4 mr-2" />
                Visual Journey Through Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Photo
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Gallery</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Capturing moments of{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Excellence, Growth & Community
              </span>{" "}
              at Adhithyan Institute
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: `${galleryImages.length}`, label: "Photos Captured" },
                { number: "50+", label: "Events Documented" },
                { number: "1000+", label: "Memories Created" },
                { number: "15+", label: "Years of Legacy" },
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
      <GalleryClientComponent galleryImages={galleryImages} categories={categories} />

      <Footer />
    </div>
  )
}
