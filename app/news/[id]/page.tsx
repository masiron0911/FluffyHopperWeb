import Image from 'next-image-export-optimizer';
import { notFound } from 'next/navigation';
import { newsItems } from '@/data/news';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return Object.keys(newsItems).map((id) => ({ id }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const newsItem = newsItems[params.id];

  return {
    title: `${newsItem.title}`,
  };
}

export default async function NewsDetail({ params }: PageProps) {
  const newsItem = newsItems[(await params).id];
  if (!newsItem) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 text-sm text-gray-500">
        {newsItem.date} / {newsItem.tag}
      </div>
      <h1 className="mb-6 text-3xl font-bold">{newsItem.title}</h1>
      <div className="mb-8">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          width={800}
          height={450}
          className="w-full rounded-xl object-cover"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
      </div>
      <p className="text-lg leading-relaxed whitespace-pre-wrap text-gray-800">
        {newsItem.content}
      </p>
      <div className="mt-12 flex justify-center">
        <Link href="/news">
          <Button variant="outline" className="rounded-full px-6 py-2">
            お知らせ一覧に戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
