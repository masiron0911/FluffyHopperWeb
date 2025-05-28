'use client';

import { useState, useEffect } from 'react';
import Image from 'next-image-export-optimizer';

export function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
        setFadeIn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showScrollTop) {
      const timeout = setTimeout(() => setFadeIn(true), 10);
      return () => clearTimeout(timeout);
    }
  }, [showScrollTop]);

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-0 bottom-6 z-40 hidden max-w-40 items-center justify-center overflow-hidden transition-all duration-300 hover:opacity-50 md:block"
      aria-label="ページトップへ戻る"
    >
      <Image
        src="/images/scroll_top.png"
        alt="トップへ戻る"
        width="500"
        height="1000"
        className={`object-contain transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        basePath={process.env.NEXT_PUBLIC_BASE_PATH}
      />
    </button>
  );
}
