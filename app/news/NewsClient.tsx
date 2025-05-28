'use client';

import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import { newsTagClassMap } from '@/constants/newsTagClassMap';
import { detectImageFilepath } from '@/lib/strapi-client';
import type { paths } from '@/types/strapi';
import { useState } from 'react';

type LatestInformations =
  paths['/latest-informations']['get']['responses']['200']['content']['application/json'];
type Props = {
  latestInformations: LatestInformations['data'];
};

const ITEMS_PER_PAGE = 10;

export default function News({ latestInformations }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(latestInformations!.length / ITEMS_PER_PAGE);
  const paginatedNews = latestInformations!.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-200 to-orange-200">
          <Image
            src="/placeholder.svg"
            alt="FluffyHopper ニュース"
            width={1200}
            height={600}
            className="object-cover opacity-30"
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
        </div>
        <div className="relative z-1 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-amber-700 md:text-5xl">お知らせ</h1>
          <p className="max-w-2xl text-lg text-amber-600 md:text-xl">
            FluffyHopperの最新情報をお届けします！
          </p>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8">
          {paginatedNews.map((item) => {
            return (
              <div
                key={item.slug}
                className="overflow-hidden rounded-3xl bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={
                        item.image?.url ? detectImageFilepath(item.image.url) : '/placeholder.svg'
                      }
                      alt={item.title}
                      width={500}
                      height={300}
                      className="h-48 w-full object-cover md:h-full"
                      basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${newsTagClassMap[item.tag.name!]}`}
                      >
                        {item.tag.name}
                      </span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-gray-800">{item.title}</h2>
                    <p className="mb-4 text-gray-600">{item.content}</p>
                    <Link href={`/news/${item.slug}`}>
                      <Button className="rounded-full bg-amber-500 px-4 py-1 text-sm text-white hover:bg-amber-600">
                        詳しく見る
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ページネーション */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;
              return (
                <Button
                  key={page}
                  variant={isActive ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-full ${
                    isActive
                      ? 'bg-amber-500 text-white'
                      : 'border-amber-200 text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  {page}
                </Button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
