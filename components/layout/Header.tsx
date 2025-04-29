"use client"

import Link from "next/link"
import Image from "next-image-export-optimizer"
import { Instagram, Twitter, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-pink-200 py-4 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/placeholder.svg?height=120&width=200"
          alt="FluffyHopper ロゴ"
          width={120}
          height={40}
          className="h-10 w-auto"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="/" className="text-pink-700 hover:text-pink-900 font-medium">ホーム</Link>
        <Link href="/characters" className="text-pink-700 hover:text-pink-900 font-medium">キャラクター</Link>
        <Link href="/goods" className="text-pink-700 hover:text-pink-900 font-medium">グッズ</Link>
      </nav>
      <div className="flex gap-3">
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Button variant="ghost" size="icon" className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100">
            <Twitter size={20} />
          </Button>
        </Link>
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Button variant="ghost" size="icon" className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100">
            <Instagram size={20} />
          </Button>
        </Link>
        <Link href="/shop" aria-label="ショップ">
          <Button variant="ghost" size="icon" className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100">
            <ShoppingBag size={20} />
          </Button>
        </Link>
      </div>
    </header>
  )
}
