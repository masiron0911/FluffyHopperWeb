'use client';

import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Instagram, Twitter, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-amber-100 px-6 py-4 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/placeholder.svg"
          alt="FluffyHopper ロゴ"
          width={120}
          height={40}
          className="h-10 w-auto"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className="font-medium text-pink-700 hover:text-pink-900">
          ホーム
        </Link>
        <Link href="/characters" className="font-medium text-pink-700 hover:text-pink-900">
          キャラクター
        </Link>
        <Link href="/goods" className="font-medium text-pink-700 hover:text-pink-900">
          グッズ
        </Link>
      </nav>
      <div className="flex gap-3">
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-700"
          >
            <Twitter size={20} />
          </Button>
        </Link>
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-700"
          >
            <Instagram size={20} />
          </Button>
        </Link>
        <Link href="/shop" aria-label="ショップ">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-700"
          >
            <ShoppingBag size={20} />
          </Button>
        </Link>
      </div>
    </header>
  );
}
