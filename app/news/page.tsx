import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import { newsTagClassMap } from '@/constants/newsTagClassMap';
import { client } from '@/lib/strapi-client';

export default async function News() {
  const res = await client.GET('/latest-informations', {
    params: {
      query: {
        populate: '*',
        sort: 'date:desc',
        fields: '*',
      },
    },
  });

  const sortedNews = res.data?.data;

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-200">
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
          <h1 className="mb-4 text-4xl font-bold text-pink-700 md:text-5xl">お知らせ</h1>
          <p className="max-w-2xl text-lg text-pink-600 md:text-xl">
            FluffyHopperの最新情報をお届けします！
          </p>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8">
          {sortedNews?.map((item) => {
            return (
              <div
                key={item.uid}
                className="overflow-hidden rounded-3xl bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={
                        item.image?.url
                          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`
                          : '/placeholder.svg'
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
                    <Link href={`/news/${item.uid}`}>
                      <Button className="rounded-full bg-pink-500 px-4 py-1 text-sm text-white hover:bg-pink-600">
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
          <div className="flex gap-2">
            <Button
              variant="default"
              size="icon"
              className="rounded-full bg-pink-500 hover:bg-pink-600"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-pink-200 text-pink-700 hover:bg-pink-100"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-pink-200 text-pink-700 hover:bg-pink-100"
            >
              3
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
