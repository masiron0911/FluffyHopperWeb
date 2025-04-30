import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import { newsItems } from '@/data/news';

export default function News() {
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
          {Object.entries(newsItems).map(([id, news]) => {
            return (
              <div
                key={id}
                className="overflow-hidden rounded-3xl bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={news.image || '/placeholder.svg'}
                      alt={news.title}
                      width={500}
                      height={300}
                      className="h-48 w-full object-cover md:h-full"
                      basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm text-gray-500">{news.date}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          news.tag === '新商品'
                            ? 'bg-pink-100 text-pink-700'
                            : news.tag === 'イベント'
                              ? 'bg-blue-100 text-blue-700'
                              : news.tag === 'お知らせ'
                                ? 'bg-green-100 text-green-700'
                                : news.tag === '新キャラクター'
                                  ? 'bg-purple-100 text-purple-700'
                                  : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {news.tag}
                      </span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-gray-800">{news.title}</h2>
                    <p className="mb-4 text-gray-600">{news.content}</p>
                    <Link href={`/news/${id}`}>
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
