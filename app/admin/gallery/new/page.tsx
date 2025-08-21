import GalleryForm from "@/components/gallery-form"

export default function NewGalleryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add New Image</h1>
        <p className="text-gray-600 mt-2">Upload and manage a new gallery image</p>
      </div>

      <GalleryForm />
    </div>
  )
}
