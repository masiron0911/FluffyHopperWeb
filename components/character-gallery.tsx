"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

interface CharacterGalleryProps {
  images: GalleryImage[]
  textColor: string
}

export default function CharacterGallery({ images, textColor }: CharacterGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden" // スクロールを無効化
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto" // スクロールを有効化
  }

  return (
    <>
      <section className="py-4 sm:py-8 px-2 sm:px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-md">
          <h2 className={`text-2xl font-bold ${textColor} mb-4`}>ギャラリー</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="block overflow-hidden rounded-lg sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 画像拡大モーダル */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-white rounded-full text-gray-700 hover:bg-gray-100"
              onClick={closeModal}
            >
              <X size={24} />
            </Button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
