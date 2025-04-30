import Image from 'next-image-export-optimizer';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Goods() {
  const categories = ['すべて', 'ぬいぐるみ', '文房具', 'アクセサリー', 'バッグ', 'ホームグッズ'];

  const characters = ['すべて', 'はなまる', 'そらまめ', 'ももか', 'ぴよ'];

  const goods = [
    {
      id: 1,
      name: 'はなまるぬいぐるみ S',
      price: '¥2,800',
      character: 'はなまる',
      category: 'ぬいぐるみ',
      color: 'pink',
    },
    {
      id: 2,
      name: 'そらまめぬいぐるみ S',
      price: '¥2,800',
      character: 'そらまめ',
      category: 'ぬいぐるみ',
      color: 'blue',
    },
    {
      id: 3,
      name: 'はなまるマスコット',
      price: '¥1,500',
      character: 'はなまる',
      category: 'ぬいぐるみ',
      color: 'pink',
    },
    {
      id: 4,
      name: 'ぴよマスコット',
      price: '¥1,500',
      character: 'ぴよ',
      category: 'ぬいぐるみ',
      color: 'yellow',
    },
    {
      id: 5,
      name: 'FluffyHopperボールペン',
      price: '¥650',
      character: 'すべて',
      category: '文房具',
      color: 'pink',
    },
    {
      id: 6,
      name: 'はなまるメモ帳',
      price: '¥480',
      character: 'はなまる',
      category: '文房具',
      color: 'pink',
    },
    {
      id: 7,
      name: 'ももかミラー',
      price: '¥1,200',
      character: 'ももか',
      category: 'アクセサリー',
      color: 'purple',
    },
    {
      id: 8,
      name: 'そらまめトートバッグ',
      price: '¥1,800',
      character: 'そらまめ',
      category: 'バッグ',
      color: 'blue',
    },
    {
      id: 9,
      name: 'FluffyHopperマグカップ',
      price: '¥1,500',
      character: 'すべて',
      category: 'ホームグッズ',
      color: 'pink',
    },
    {
      id: 10,
      name: 'はなまるクッション',
      price: '¥2,500',
      character: 'はなまる',
      category: 'ホームグッズ',
      color: 'pink',
    },
    {
      id: 11,
      name: 'ぴよTシャツ',
      price: '¥2,800',
      character: 'ぴよ',
      category: 'アパレル',
      color: 'yellow',
    },
    {
      id: 12,
      name: 'ももかポーチ',
      price: '¥1,600',
      character: 'ももか',
      category: 'バッグ',
      color: 'purple',
    },
  ];

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-200">
          <Image
            src="/placeholder.svg"
            alt="FluffyHopper グッズ"
            width={1200}
            height={600}
            className="object-cover opacity-30"
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
        </div>
        <div className="relative z-1 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-pink-700 md:text-5xl">グッズ紹介</h1>
          <p className="max-w-2xl text-lg text-pink-600 md:text-xl">
            FluffyHopperのかわいいグッズをご紹介します！
          </p>
        </div>
      </section>

      {/* 検索・フィルター */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search
                className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="グッズを検索"
                className="rounded-full border-pink-200 pl-10 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'default' : 'outline'}
                  className={`rounded-full whitespace-nowrap ${index === 0 ? 'bg-pink-500 hover:bg-pink-600' : 'border-pink-200 text-pink-700 hover:bg-pink-100'}`}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-sm text-gray-500">キャラクター</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {characters.map((character, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'default' : 'outline'}
                  className={`rounded-full whitespace-nowrap ${index === 0 ? 'bg-pink-500 hover:bg-pink-600' : 'border-pink-200 text-pink-700 hover:bg-pink-100'}`}
                  size="sm"
                >
                  {character}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* グッズ一覧 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {goods.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg"
                  alt={item.name}
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover"
                  basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                />
              </div>
              <h3 className={`text-sm font-bold md:text-base text-${item.color}-700 mb-1`}>
                {item.name}
              </h3>
              <p className="mb-3 text-xs text-gray-500 md:text-sm">{item.price}</p>
              <Button
                className={`w-full rounded-full py-1 text-xs bg-${item.color}-500 hover:bg-${item.color}-600 text-white`}
              >
                詳細を見る
              </Button>
            </div>
          ))}
        </div>

        {/* ページネーション */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-pink-200 text-pink-700 hover:bg-pink-100"
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
