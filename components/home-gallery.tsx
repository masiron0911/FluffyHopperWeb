'use client';

import { useState, useEffect } from 'react';
import Image from 'next-image-export-optimizer';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { paths } from '@/types/strapi';
import { detectImageFilepath } from '@/lib/strapi-client';

type TopDisplayContents =
  paths['/top-display-content']['get']['responses']['200']['content']['application/json'];
type Props = {
  topDisplayContents: TopDisplayContents['data'];
};

export default function HomeGallery({ topDisplayContents }: Props) {
  const galleryImages = topDisplayContents?.galleryImages;
  const _galleryImagesOne = galleryImages?.[0];

  const [selectedImage, setSelectedImage] = useState<typeof _galleryImagesOne | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const openModal = (id: number) => {
    const image = galleryImages?.find((img) => img.id === id) || null;
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
        {galleryImages?.map((image) => (
          <div
            key={image.id}
            className="block cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
            onClick={() => openModal(image.id!)}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image?.url ? detectImageFilepath(image?.url) : '/placeholder.svg'}
                alt={image.name!}
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
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white"
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
                src={
                  selectedImage?.url ? detectImageFilepath(selectedImage?.url) : '/placeholder.svg'
                }
                alt={selectedImage!.name!}
                className="max-h-[90vh] w-full object-contain"
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
