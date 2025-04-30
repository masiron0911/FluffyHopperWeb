import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import HomeGallery from '@/components/home-gallery';
import { newsItems } from '@/data/news';

export default function Home() {
  // ニュースの最新の4件のみ表示
  const latestNews = newsItems.slice(-4).reverse();

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-200">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="FluffyHopper キャラクターたち"
            width={1200}
            height={600}
            className="object-cover opacity-30"
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
        </div>
        <div className="relative z-1 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-pink-700 md:text-6xl">FluffyHopper</h1>
          <p className="mb-8 max-w-2xl text-xl text-pink-600 md:text-2xl">もふもふぴょーん</p>
          <div className="flex gap-4">
            <Link href="/characters">
              <Button className="rounded-full bg-pink-500 px-6 py-2 text-white hover:bg-pink-600">
                キャラクターを見る
              </Button>
            </Link>
            <Link href="/goods">
              <Button
                variant="outline"
                className="rounded-full border-pink-500 px-6 py-2 text-pink-500 hover:bg-pink-100"
              >
                グッズを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="bg-white px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-pink-700">お知らせ</h2>
            <Link
              href="/news"
              className="flex items-center text-sm text-pink-500 hover:text-pink-700"
            >
              もっと見る
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4">
            {latestNews.map((news, index) => (
              <Link
                href="#"
                key={index}
                className="flex flex-col gap-2 rounded-xl p-4 transition-colors hover:bg-pink-50 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm whitespace-nowrap text-gray-500">{news.date}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs whitespace-nowrap ${
                      news.tag === '新商品'
                        ? 'bg-pink-100 text-pink-700'
                        : news.tag === 'イベント'
                          ? 'bg-blue-100 text-blue-700'
                          : news.tag === 'お知らせ'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {news.tag}
                  </span>
                </div>
                <h3 className="text-gray-800 hover:text-pink-700">{news.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ブランド紹介 */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-pink-700">FluffyHopperについて</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-pink-300"></div>
          <p className="mx-auto max-w-3xl text-lg text-pink-800">
            &quot;毎日にもふもふとぽかぽかを&quot; Fluffy=ふわふわ Hopper=ぴょんぴょん
            心がふわふわ温かく、はずむようなわくわく感をお届けできるブランドとなるように名付けました。
            イラストレーターましろよう・3D造形家サックザックによる共同ブランド。
            オリジナルキャラクター&quot;うさぎのはなまる&quot;をはじめ、ほんわかやさしいタッチを活かしたラインナップを展開しています。
          </p>
        </div>

        {/* ギャラリーをクライアントコンポーネントとして分離 */}
        <HomeGallery />
      </section>

      {/* キャラクター紹介プレビュー */}
      <section className="bg-gradient-to-b from-pink-100 to-purple-100 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-pink-700">人気キャラクター</h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-pink-300"></div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:flex-row">
              <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-pink-200">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="はなまる"
                  width={160}
                  height={160}
                  className="object-cover"
                  basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-pink-700">はなまる</h3>
                <p className="mb-4 text-pink-600">
                  FluffyHopperの主役！好奇心旺盛で明るい性格の女の子うさぎ。
                  ピンク色の耳と花の模様が特徴です。
                </p>
                <Link href="/characters/hanamaru">
                  <Button className="rounded-full bg-pink-500 px-4 py-1 text-sm text-white hover:bg-pink-600">
                    詳しく見る
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:flex-row">
              <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-200">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="そらまめ"
                  width={160}
                  height={160}
                  className="object-cover"
                  basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-blue-600">そらまめ</h3>
                <p className="mb-4 text-blue-500">
                  はなまるの親友。おっとりした性格の男の子うさぎ。 水色の耳と雲の模様が特徴です。
                </p>
                <Link href="/characters/soramame">
                  <Button className="rounded-full bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600">
                    詳しく見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/characters">
              <Button
                variant="outline"
                className="rounded-full border-pink-500 px-6 py-2 text-pink-500 hover:bg-pink-100"
              >
                すべてのキャラクターを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* グッズ紹介プレビュー */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-pink-700">人気グッズ</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-pink-300"></div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`グッズ ${item}`}
                  width={200}
                  height={200}
                  className="h-48 w-full object-cover"
                  basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                />
              </div>
              <h3 className="mb-1 text-lg font-bold text-pink-700">はなまるぬいぐるみ</h3>
              <p className="mb-3 text-sm text-pink-500">¥2,800</p>
              <Button className="w-full rounded-full bg-pink-500 text-white hover:bg-pink-600">
                詳細を見る
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/goods">
            <Button
              variant="outline"
              className="rounded-full border-pink-500 px-6 py-2 text-pink-500 hover:bg-pink-100"
            >
              すべてのグッズを見る
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
