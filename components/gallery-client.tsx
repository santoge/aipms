"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Search, Calendar, Download, Share2, Eye, X, ChevronLeft, ChevronRight, Users } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  id: string
  title: string
  description: string
  image_url: string
  alt_text: string
  created_at: string
  gallery_categories?: {
    name: string
    slug: string
  }
}

interface Category {
  id: string
  name: string
  count: number
  iconName: string
}

interface GalleryClientComponentProps {
  galleryImages: GalleryImage[]
  categories: Category[]
}

export default function GalleryClientComponent({ galleryImages, categories }: GalleryClientComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = galleryImages.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.gallery_categories?.slug === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (imageId: string) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  const getIcon = (iconName: string) => {
    const iconMap = {
      Camera,
      Calendar,
      Users,
    }
    return iconMap[iconName as keyof typeof iconMap] || Camera
  }

  return (
    <>
      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50/30 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#002366]/20 focus:border-[#002366] bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid w-full grid-cols-3 md:w-auto bg-white/80 backdrop-blur-sm">
                {categories.map((category) => {
                  const IconComponent = getIcon(category.iconName)
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-[#002366] data-[state=active]:text-white flex items-center space-x-2"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {category.count}
                      </Badge>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2 cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image_url || "/placeholder.svg?height=300&width=400"}
                        alt={item.alt_text || item.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Category Badge */}
                      <Badge className="absolute top-3 left-3 bg-[#002366] text-white shadow-lg">
                        {item.gallery_categories?.name || "General"}
                      </Badge>

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h3>
                        <div className="flex items-center justify-between text-xs text-gray-300">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(item.created_at).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Camera className="h-3 w-3 mr-1" />
                            Adhithyan Media
                          </span>
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
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={() => navigateImage("prev")}
              size="icon"
              variant="ghost"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={() => navigateImage("next")}
              size="icon"
              variant="ghost"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh]">
              <div className="lg:w-2/3 relative">
                <Image
                  src={selectedImageData.image_url || "/placeholder.svg?height=600&width=800"}
                  alt={selectedImageData.alt_text || selectedImageData.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Details */}
              <div className="lg:w-1/3 p-6 bg-white overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-[#002366] text-white mb-2">
                      {selectedImageData.gallery_categories?.name || "General"}
                    </Badge>
                    <h2 className="text-2xl font-bold text-[#002366] mb-2">{selectedImageData.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{selectedImageData.description}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-500">Date:</span>
                        <p className="text-gray-800">{new Date(selectedImageData.created_at).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Photographer:</span>
                        <p className="text-gray-800">Adhithyan Media Team</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4 flex space-x-2">
                    <Button size="sm" className="flex-1 bg-[#002366] hover:bg-[#003d82]">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
