import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import HomeGallery from '@/components/home-gallery';
import { newsTagClassMap } from '@/constants/newsTagClassMap';
import { characters } from '@/data/characters';
import type { CharacterId } from '@/types';
import { client, detectImageFilepath } from '@/lib/strapi-client';

export default async function Home() {
  // お知らせ最新情報は4件取得
  const res = await client.GET('/latest-informations', {
    params: {
      query: {
        populate: '*',
        sort: 'date:desc',
        fields: 'title,date,content,slug',
        pagination: {
          limit: 4,
        },
      },
    },
  });
  const latestNews = res.data?.data;

  const resDisplayContents = await client.GET('/top-display-content', {
    params: {
      query: {
        'populate[products][populate]': 'image',
        populate: 'galleryImages',
        fields: '*',
        pagination: {
          limit: 4,
        },
      },
    },
  });
  const popularGoods = resDisplayContents.data?.data?.products;

  // 表示するキャラクターを設定
  const featuredCharacters: CharacterId[] = ['hanamaru', 'manpuku'];

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="images/character_img/shopcard2024.png"
            alt="FluffyHopper キャラクターたち"
            width={1200}
            height={600}
            className=""
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
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
            {latestNews?.map((news, index) => (
              <Link
                href={`/news/${news.slug}`}
                key={index}
                className="flex flex-col gap-2 rounded-xl p-4 transition-colors hover:bg-pink-50 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm whitespace-nowrap text-gray-500">{news.date}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${newsTagClassMap[news.tag.name!]}`}
                  >
                    {news.tag.name}
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
          <h2 className="mb-4 text-3xl font-bold text-pink-700">FluffyHopperのご紹介</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-pink-300"></div>
          <p className="mx-auto max-w-3xl text-lg text-pink-800">
            &quot;毎日にもふもふとぽかぽかを&quot; Fluffy=ふわふわ Hopper=ぴょんぴょん
            心がふわふわ温かく、はずむようなわくわく感をお届けできるブランドとなるように名付けました。
            イラストレーターましろよう・3D造形家サックザックによる共同ブランド。
            オリジナルキャラクター&quot;うさぎのはなまる&quot;をはじめ、ほんわかやさしいタッチを活かしたラインナップを展開しています。
          </p>
        </div>

        {/* ギャラリーをクライアントコンポーネントとして分離 */}
        <HomeGallery topDisplayContents={resDisplayContents.data?.data} />
      </section>

      {/* キャラクター紹介プレビュー */}
      <section className="bg-gradient-to-b from-pink-100 to-purple-100 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-pink-700">人気キャラクター</h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-pink-300"></div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredCharacters.map((key) => {
              const character = characters[key];

              return (
                <div
                  key={key}
                  className="flex flex-col items-center gap-6 rounded-3xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:flex-row"
                >
                  <div
                    className={`h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-4 ${character.borderColor}`}
                  >
                    <Image
                      src={character.imgSrc}
                      alt={character.name}
                      width={160}
                      height={160}
                      className="object-cover"
                      basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className={`mb-2 text-2xl font-bold ${character.textColor}`}>
                      {character.name}
                    </h3>
                    <p className={`mb-4 ${character.textColor}`}>{character.description}</p>
                    <Link href={`/characters/${key}`}>
                      <Button
                        className={`${character.buttonColor} rounded-full px-4 py-1 text-sm text-white hover:brightness-110`}
                      >
                        詳しく見る
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
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
          {popularGoods?.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  src={item.image?.url ? detectImageFilepath(item.image?.url) : '/placeholder.svg'}
                  alt={`グッズ ${item.name}`}
                  width={200}
                  height={200}
                  className="h-48 w-full object-cover"
                  basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                />
              </div>
              <h3 className="mb-1 text-lg font-bold text-pink-700">{item.name}</h3>
              <p className="mb-3 text-sm text-pink-500">{item.price}</p>
              <Link href={item.storeUrl!} target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full bg-pink-500 text-white hover:bg-pink-600">
                  詳細を見る
                </Button>
              </Link>
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
