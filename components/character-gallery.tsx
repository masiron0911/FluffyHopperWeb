'use client';

import { useState } from 'react';
import Image from 'next-image-export-optimizer';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface CharacterGalleryProps {
  images: GalleryImage[];
  textColor: string;
}

export default function CharacterGallery({ images, textColor }: CharacterGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // スクロールを無効化
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // スクロールを有効化
  };

  return (
    <>
      <section className="mx-auto max-w-4xl px-2 py-4 sm:px-4 sm:py-8 md:px-8">
        <div className="rounded-3xl bg-white p-4 shadow-md sm:p-8">
          <h2 className={`text-2xl font-bold ${textColor} mb-4`}>ギャラリー</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="block cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md sm:rounded-2xl"
                onClick={() => openModal(image)}
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
        </div>
      </section>

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
                className="max-h-[90vh] w-full object-contain"
                basePath={process.env.NEXT_PUBLIC_BASE_PATH}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
