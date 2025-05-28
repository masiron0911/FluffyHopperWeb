'use client';

import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Instagram, Twitter, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const fontSize = 'font-medium';
  const textColor = 'text-amber-800';
  const textColorHover = 'text-amber-950';

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-amber-50 px-6 py-4 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/character_img/logo-clear.png"
          alt="FluffyHopper ロゴ"
          width={180}
          height={80}
          className="h-10 w-auto"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className={`${fontSize} ${textColor} hover:${textColorHover}`}>
          ホーム
        </Link>
        <Link href="/characters" className={`${fontSize} ${textColor} hover:${textColorHover}`}>
          キャラクター
        </Link>
        <Link href="/goods" className={`${fontSize} ${textColor} hover:${textColorHover}`}>
          グッズ
        </Link>
      </nav>
      <div className="flex gap-3">
        <Link
          href="https://x.com/FluffyHopper_JP"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full bg-white ${textColor} hover:bg-amber-100 hover:${textColorHover}`}
          >
            <Twitter size={20} />
          </Button>
        </Link>
        <Link
          href="https://www.instagram.com/fluffyhopperjp/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full bg-white ${textColor} hover:bg-amber-100 hover:${textColorHover}`}
          >
            <Instagram size={20} />
          </Button>
        </Link>
        <Link
          href="https://fluffyhopper.base.ec/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ショップ"
        >
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full bg-white ${textColor} hover:bg-amber-100 hover:${textColorHover}`}
          >
            <ShoppingBag size={20} />
          </Button>
        </Link>
      </div>
    </header>
  );
}
