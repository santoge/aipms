import { createServerClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit } from "lucide-react"
import Link from "next/link"
import DeleteGalleryButton from "@/components/delete-gallery-button"

export const dynamic = "force-dynamic"

export default async function GalleryPage() {
  const supabase = createServerClient()

  if (!supabase) {
    return <div>Supabase not configured</div>
  }

  // Fetch gallery images with category information
  const { data: images, error } = await supabase
    .from("gallery_images")
    .select(`
      *,
      gallery_categories(name)
    `)
    .order("display_order", { ascending: true })

  if (error) {
    console.error("Error fetching images:", error)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-600 mt-2">Manage your gallery images</p>
        </div>
        <Link href="/admin/gallery/new">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Image
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images && images.length > 0 ? (
          images.map((image) => (
            <Card key={image.id}>
              <CardHeader className="p-0">
                <img
                  src={image.image_url || "/placeholder.svg?height=200&width=300"}
                  alt={image.alt_text || image.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{image.title}</CardTitle>
                <CardDescription className="mb-4">{image.description || "No description available"}</CardDescription>
                <div className="flex items-center justify-between mb-4">
                  {image.gallery_categories && <Badge variant="secondary">{image.gallery_categories.name}</Badge>}
                  <span className="text-sm text-gray-500">Order: {image.display_order}</span>
                </div>
                <div className="flex space-x-2">
                  <Link href={`/admin/gallery/edit/${image.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteGalleryButton imageId={image.id} imageTitle={image.title} />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full">
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-4">No gallery images found</p>
                <Link href="/admin/gallery/new">
                  <Button>Add your first image</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
