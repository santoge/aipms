import { createServerClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import GalleryForm from "@/components/gallery-form"

interface EditGalleryPageProps {
  params: {
    id: string
  }
}

export const dynamic = "force-dynamic"

export default async function EditGalleryPage({ params }: EditGalleryPageProps) {
  const supabase = createServerClient()

  if (!supabase) {
    return <div>Supabase not configured</div>
  }

  const { data: image, error } = await supabase.from("gallery_images").select("*").eq("id", params.id).single()

  if (error || !image) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Edit Gallery Image</h1>
        <p className="text-gray-600 mt-2">Update your gallery image</p>
      </div>

      <GalleryForm initialData={image} />
    </div>
  )
}
