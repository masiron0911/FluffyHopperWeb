'use client';

import { useState, useEffect } from 'react';
import Image from 'next-image-export-optimizer';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function HomeGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: '/images/character_img/hello.png?height=800&width=800&text=Gallery+1',
      alt: 'ギャラリー画像 1',
    },
    { id: 2, src: '/placeholder.svg', alt: 'ギャラリー画像 2' },
    { id: 3, src: '/placeholder.svg', alt: 'ギャラリー画像 3' },
    { id: 4, src: '/placeholder.svg', alt: 'ギャラリー画像 4' },
    { id: 5, src: '/placeholder.svg', alt: 'ギャラリー画像 5' },
    { id: 6, src: '/placeholder.svg', alt: 'ギャラリー画像 6' },
    { id: 7, src: '/placeholder.svg', alt: 'ギャラリー画像 7' },
    { id: 8, src: '/placeholder.svg', alt: 'ギャラリー画像 8' },
    { id: 9, src: '/placeholder.svg', alt: 'ギャラリー画像 9' },
  ];

  const openModal = (id: number) => {
    const image = galleryImages.find((img) => img.id === id) || null;
    if (image) {
      setSelectedImage(image);
      document.body.style.overflow = 'hidden'; // スクロールを無効化
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // スクロールを有効化
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // 200px以上スクロールしたらボタンを表示
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="block cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
            onClick={() => openModal(image.id)}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                basePath={process.env.NEXT_PUBLIC_BASE_PATH}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 画像拡大モーダル */}
      {selectedImage !== null && (
        <div
          className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 rounded-full bg-white text-gray-700 hover:bg-gray-100"
              onClick={closeModal}
            >
              <X size={24} />
            </Button>
            <div className="relative h-full w-full">
              <Image
                src={selectedImage.src || '/placeholder.svg'}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="h-auto w-full object-contain"
                basePath={process.env.NEXT_PUBLIC_BASE_PATH}
              />
            </div>
          </div>
        </div>
      )}

      {/* トップに戻るボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-pink-500 shadow-lg transition-all duration-300 hover:bg-pink-600"
          aria-label="ページトップへ戻る"
        >
          <Image
            src="/placeholder.svg"
            alt="トップへ戻る"
            width={60}
            height={60}
            className="h-10 w-10 object-contain"
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
        </button>
      )}
    </>
  );
}
