export const compressImage = (file: File, maxSizeKB = 150): Promise<File> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      const maxWidth = 1200
      const maxHeight = 800
      let { width, height } = img

      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width
          width = maxWidth
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height
          height = maxHeight
        }
      }

      canvas.width = width
      canvas.height = height

      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height)

      // Start with high quality and reduce until size is acceptable
      let quality = 0.9
      const tryCompress = () => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to compress image"))
              return
            }

            const sizeKB = blob.size / 1024

            if (sizeKB <= maxSizeKB || quality <= 0.1) {
              // Create new file with compressed blob
              const compressedFile = new File([blob], file.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              })
              resolve(compressedFile)
            } else {
              quality -= 0.1
              tryCompress()
            }
          },
          "image/jpeg",
          quality,
        )
      }

      tryCompress()
    }

    img.onerror = () => reject(new Error("Failed to load image"))
    img.src = URL.createObjectURL(file)
  })
}
