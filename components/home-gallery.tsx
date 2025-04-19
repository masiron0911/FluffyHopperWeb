"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

export default function HomeGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const galleryImages = [
    { id: 1, src: "/placeholder.svg?height=800&width=800&text=Gallery+1", alt: "ギャラリー画像 1" },
    { id: 2, src: "/placeholder.svg?height=800&width=800&text=Gallery+2", alt: "ギャラリー画像 2" },
    { id: 3, src: "/placeholder.svg?height=800&width=800&text=Gallery+3", alt: "ギャラリー画像 3" },
    { id: 4, src: "/placeholder.svg?height=800&width=800&text=Gallery+4", alt: "ギャラリー画像 4" },
    { id: 5, src: "/placeholder.svg?height=800&width=800&text=Gallery+5", alt: "ギャラリー画像 5" },
    { id: 6, src: "/placeholder.svg?height=800&width=800&text=Gallery+6", alt: "ギャラリー画像 6" },
    { id: 7, src: "/placeholder.svg?height=800&width=800&text=Gallery+7", alt: "ギャラリー画像 7" },
    { id: 8, src: "/placeholder.svg?height=800&width=800&text=Gallery+8", alt: "ギャラリー画像 8" },
    { id: 9, src: "/placeholder.svg?height=800&width=800&text=Gallery+9", alt: "ギャラリー画像 9" },
  ]

  const openModal = (id: number) => {
    const image = galleryImages.find((img) => img.id === id) || null
    if (image) {
      setSelectedImage(image)
      document.body.style.overflow = "hidden" // スクロールを無効化
    }
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto" // スクロールを有効化
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      // 200px以上スクロールしたらボタンを表示
      if (window.scrollY > 200) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="block overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => openModal(image.id)}
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

      {/* トップに戻るボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-pink-500 shadow-lg hover:bg-pink-600 transition-all duration-300 flex items-center justify-center overflow-hidden"
          aria-label="ページトップへ戻る"
        >
          <Image
            src="/placeholder.svg?height=60&width=60&text=↑"
            alt="トップへ戻る"
            width={60}
            height={60}
            className="w-10 h-10 object-contain"
          />
        </button>
      )}
    </>
  )
}
