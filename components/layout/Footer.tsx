import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { Contacts } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-amber-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-2 md:mb-0">
            <Image
              src="/images/character_img/logo-clear.png"
              alt="FluffyHopper ロゴ"
              width={120}
              height={40}
              className="h-10 w-auto"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <div className="flex gap-4">
            <SocialIcons textColor="text-amber-500" textColorHover="bg-amber-100" fontSize={20} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between text-amber-800 md:flex-row">
          <nav className="mb-4 flex gap-6 md:mb-0">
            <Link href="/" className="hidden hover:text-amber-950 md:flex">
              ホーム
            </Link>
            <Link href="/characters" className="hidden hover:text-amber-950 md:flex">
              キャラクター
            </Link>
            <Link href="/goods" className="hidden hover:text-amber-950 md:flex">
              グッズ
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdVGFhgjRMqLOtFvHOlF1zVI5q2eA-NhnvSHOJvjwqW1dkYTw/viewform"
              className="hover:text-amber-950"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="hidden md:flex">お問い合わせ</h1>
              <h1 className="flex items-center md:hidden">
                <Contacts sx={{ fontSize: 24 }} />
                お問い合わせ
              </h1>
            </Link>
          </nav>
          <p className="text-sm">© 2023 FluffyHopper All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
