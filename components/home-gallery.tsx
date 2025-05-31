'use client';

import { useState } from 'react';
import Image from 'next-image-export-optimizer';
import { Close, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@/components/ui/button';
import type { paths } from '@/types/strapi';
import { detectImageFilepath } from '@/lib/strapi-client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type TopDisplayContents =
  paths['/top-display-content']['get']['responses']['200']['content']['application/json'];
type Props = {
  topDisplayContents: TopDisplayContents['data'];
};

export default function HomeGallery({ topDisplayContents }: Props) {
  const galleryImages = topDisplayContents?.galleryImages ?? [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {galleryImages?.map((image, index) => (
          <div
            key={image.id}
            className="block cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
            onClick={() => openModal(index)}
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
      {selectedIndex !== null && (
        <div
          className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-amber-50 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 rounded-full bg-amber-100 text-amber-800 shadow-md hover:bg-gray-100"
              onClick={closeModal}
            >
              <Close sx={{ fontSize: 24 }} />
            </Button>
            <Swiper
              initialSlide={selectedIndex!}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{ clickable: true }}
              loop={true}
              keyboard={{
                enabled: true,
              }}
              modules={[Navigation, Pagination, Keyboard]}
              className="h-[80vh] w-full"
            >
              {galleryImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="flex h-full w-full items-center justify-center pb-10 select-none">
                    <Image
                      src={image?.url ? detectImageFilepath(image?.url) : '/placeholder.svg'}
                      alt={image.name!}
                      width={image?.width}
                      height={image?.height}
                      className="max-h-full max-w-full object-contain"
                      basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* カスタムナビゲーションボタン */}
              <div className="custom-prev absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-amber-100 p-2 shadow-md hover:bg-gray-200 md:block">
                <ChevronLeft className="text-amber-800" sx={{ fontSize: 24 }} />
              </div>
              <div className="custom-next absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-amber-100 p-2 shadow-md hover:bg-gray-200 md:block">
                <ChevronRight className="text-amber-800" sx={{ fontSize: 24 }} />
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
