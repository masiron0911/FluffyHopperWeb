import Link from "next/link"
import Image from "next-image-export-optimizer"
import { Instagram, Twitter, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="bg-pink-200 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="FluffyHopper ロゴ"
                width={120}
                height={40}
                className="h-10 w-auto"
                basePath={process.env.NEXT_PUBLIC_BASE_PATH}
              />
            </div>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
                >
                  <Twitter size={20} />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
                >
                  <Instagram size={20} />
                </Button>
              </Link>
              <Link href="/shop" aria-label="ショップ">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
                >
                  <ShoppingBag size={20} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-pink-700">
            <nav className="flex gap-6 mb-4 md:mb-0">
              <Link href="/" className="hover:text-pink-900">
                ホーム
              </Link>
              <Link href="/characters" className="hover:text-pink-900">
                キャラクター
              </Link>
              <Link href="/goods" className="hover:text-pink-900">
                グッズ
              </Link>
              <Link href="/contact" className="hover:text-pink-900">
                お問い合わせ
              </Link>
            </nav>
            <p className="text-sm">© 2023 FluffyHopper All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  