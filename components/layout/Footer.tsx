import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Instagram, Twitter, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-amber-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-2 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="FluffyHopper ロゴ"
              width={120}
              height={40}
              className="h-10 w-auto"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-700"
              >
                <Twitter size={20} />
              </Button>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-700"
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
                className="rounded-full bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-700"
              >
                <ShoppingBag size={20} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between text-amber-800 md:flex-row">
          <nav className="mb-4 flex gap-6 md:mb-0">
            <Link href="/" className="hover:text-amber-950">
              ホーム
            </Link>
            <Link href="/characters" className="hover:text-amber-950">
              キャラクター
            </Link>
            <Link href="/goods" className="hover:text-amber-950">
              グッズ
            </Link>
            <Link href="/contact" className="hover:text-amber-950">
              お問い合わせ
            </Link>
          </nav>
          <p className="text-sm">© 2023 FluffyHopper All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
