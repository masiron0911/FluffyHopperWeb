import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-orange-100 px-4 py-16 text-center">
      <div className="mb-8">
        <Image
          src="/placeholder.svg"
          alt="FluffyHopper 404"
          width={240}
          height={240}
          className="mx-auto mb-4 opacity-60"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
        <h1 className="mb-4 text-5xl font-bold text-amber-700">404 - ページが見つかりません</h1>
        <p className="mb-8 text-lg text-amber-600">
          ごめんなさい、お探しのページは存在しないようです。
          <br />
          URLが間違っているか、削除された可能性があります。
        </p>
        <Link href="/">
          <Button className="rounded-full bg-amber-500 px-6 py-2 text-white hover:bg-amber-600">
            トップページへ戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
