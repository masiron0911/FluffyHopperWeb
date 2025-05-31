'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

type SwiperSliderProps = {
  slides: React.ReactNode[];
};

export function SwiperSlider({ slides }: SwiperSliderProps) {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="h-full w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex max-h-[800px] items-center justify-center overflow-hidden">
            {slide}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
