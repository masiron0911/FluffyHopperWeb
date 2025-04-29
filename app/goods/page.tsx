import Image from "next-image-export-optimizer"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function Goods() {
  const categories = ["すべて", "ぬいぐるみ", "文房具", "アクセサリー", "バッグ", "ホームグッズ"]

  const characters = ["すべて", "はなまる", "そらまめ", "ももか", "ぴよ"]

  const goods = [
    {
      id: 1,
      name: "はなまるぬいぐるみ S",
      price: "¥2,800",
      character: "はなまる",
      category: "ぬいぐるみ",
      color: "pink",
    },
    {
      id: 2,
      name: "そらまめぬいぐるみ S",
      price: "¥2,800",
      character: "そらまめ",
      category: "ぬいぐるみ",
      color: "blue",
    },
    {
      id: 3,
      name: "はなまるマスコット",
      price: "¥1,500",
      character: "はなまる",
      category: "ぬいぐるみ",
      color: "pink",
    },
    {
      id: 4,
      name: "ぴよマスコット",
      price: "¥1,500",
      character: "ぴよ",
      category: "ぬいぐるみ",
      color: "yellow",
    },
    {
      id: 5,
      name: "FluffyHopperボールペン",
      price: "¥650",
      character: "すべて",
      category: "文房具",
      color: "pink",
    },
    {
      id: 6,
      name: "はなまるメモ帳",
      price: "¥480",
      character: "はなまる",
      category: "文房具",
      color: "pink",
    },
    {
      id: 7,
      name: "ももかミラー",
      price: "¥1,200",
      character: "ももか",
      category: "アクセサリー",
      color: "purple",
    },
    {
      id: 8,
      name: "そらまめトートバッグ",
      price: "¥1,800",
      character: "そらまめ",
      category: "バッグ",
      color: "blue",
    },
    {
      id: 9,
      name: "FluffyHopperマグカップ",
      price: "¥1,500",
      character: "すべて",
      category: "ホームグッズ",
      color: "pink",
    },
    {
      id: 10,
      name: "はなまるクッション",
      price: "¥2,500",
      character: "はなまる",
      category: "ホームグッズ",
      color: "pink",
    },
    {
      id: 11,
      name: "ぴよTシャツ",
      price: "¥2,800",
      character: "ぴよ",
      category: "アパレル",
      color: "yellow",
    },
    {
      id: 12,
      name: "ももかポーチ",
      price: "¥1,600",
      character: "ももか",
      category: "バッグ",
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main>
        {/* ヒーローセクション */}
        <section className="relative h-[250px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="FluffyHopper グッズ"
              width={1200}
              height={600}
              className="object-cover opacity-30"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <div className="relative z-1 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">グッズ紹介</h1>
            <p className="text-lg md:text-xl text-pink-600 max-w-2xl">FluffyHopperのかわいいグッズをご紹介します！</p>
          </div>
        </section>

        {/* 検索・フィルター */}
        <section className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="グッズを検索"
                  className="pl-10 rounded-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={`rounded-full whitespace-nowrap ${index === 0 ? "bg-pink-500 hover:bg-pink-600" : "border-pink-200 text-pink-700 hover:bg-pink-100"}`}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">キャラクター</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {characters.map((character, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={`rounded-full whitespace-nowrap ${index === 0 ? "bg-pink-500 hover:bg-pink-600" : "border-pink-200 text-pink-700 hover:bg-pink-100"}`}
                    size="sm"
                  >
                    {character}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* グッズ一覧 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {goods.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-2xl overflow-hidden mb-3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={item.name}
                    width={200}
                    height={200}
                    className="object-cover w-full aspect-square"
                    basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                  />
                </div>
                <h3 className={`text-sm md:text-base font-bold text-${item.color}-700 mb-1`}>{item.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{item.price}</p>
                <Button
                  className={`w-full rounded-full text-xs py-1 bg-${item.color}-500 hover:bg-${item.color}-600 text-white`}
                >
                  詳細を見る
                </Button>
              </div>
            ))}
          </div>

          {/* ページネーション */}
          <div className="flex justify-center mt-12">
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
      </main>
      <Footer />
    </div>
  )
}
