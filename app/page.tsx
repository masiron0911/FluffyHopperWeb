import Link from "next/link"
import Image from "next-image-export-optimizer"
import { Instagram, Twitter, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import HomeGallery from "@/components/home-gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-pink-200 py-4 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=120&width=200"
            alt="FluffyHopper ロゴ"
            width={120}
            height={40}
            className="h-10 w-auto"
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-pink-700 hover:text-pink-900 font-medium">
            ホーム
          </Link>
          <Link href="/characters" className="text-pink-700 hover:text-pink-900 font-medium">
            キャラクター
          </Link>
          <Link href="/goods" className="text-pink-700 hover:text-pink-900 font-medium">
            グッズ
          </Link>
        </nav>
        <div className="flex gap-3">
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
            >
              <Twitter size={20} />
            </Button>
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
            >
              <Instagram size={20} />
            </Button>
          </Link>
          <Link href="/shop" aria-label="ショップ">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
            >
              <ShoppingBag size={20} />
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="FluffyHopper キャラクターたち"
              width={1200}
              height={600}
              className="object-cover opacity-30"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <div className="relative z-1 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-4">FluffyHopper</h1>
            <p className="text-xl md:text-2xl text-pink-600 mb-8 max-w-2xl">もふもふぴょーん</p>
            <div className="flex gap-4">
              <Link href="/characters">
                <Button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-2">
                  キャラクターを見る
                </Button>
              </Link>
              <Link href="/goods">
                <Button
                  variant="outline"
                  className="rounded-full border-pink-500 text-pink-500 hover:bg-pink-100 px-6 py-2"
                >
                  グッズを見る
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* お知らせセクション */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-pink-700">お知らせ</h2>
              <Link href="/news" className="text-pink-500 hover:text-pink-700 text-sm flex items-center">
                もっと見る
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-4">
              {[
                { date: "2023.12.15", tag: "新商品", title: "はなまるのクリスマス限定ぬいぐるみが登場！" },
                { date: "2023.12.01", tag: "イベント", title: "FluffyHopperカフェが東京・原宿にオープン決定！" },
                { date: "2023.11.20", tag: "お知らせ", title: "公式オンラインショップがリニューアルしました" },
                { date: "2023.11.10", tag: "新キャラクター", title: "新キャラクター「ももか」が仲間入り！" },
              ].map((news, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-sm whitespace-nowrap">{news.date}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs whitespace-nowrap ${
                        news.tag === "新商品"
                          ? "bg-pink-100 text-pink-700"
                          : news.tag === "イベント"
                            ? "bg-blue-100 text-blue-700"
                            : news.tag === "お知らせ"
                              ? "bg-green-100 text-green-700"
                              : "bg-purple-100 text-purple-700"
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
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">FluffyHopperについて</h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-pink-800 max-w-3xl mx-auto">
              "毎日にもふもふとぽかぽかを" Fluffy=ふわふわ Hopper=ぴょんぴょん
              心がふわふわ温かく、はずむようなわくわく感をお届けできるブランドとなるように名付けました。
              イラストレーターましろよう・3D造形家サックザックによる共同ブランド。
              オリジナルキャラクター"うさぎのはなまる"をはじめ、ほんわかやさしいタッチを活かしたラインナップを展開しています。
            </p>
          </div>

          {/* ギャラリーをクライアントコンポーネントとして分離 */}
          <HomeGallery />
        </section>

        {/* キャラクター紹介プレビュー */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-pink-100 to-purple-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-700 mb-4">人気キャラクター</h2>
              <div className="w-24 h-1 bg-pink-300 mx-auto mb-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-3xl p-6 shadow-md flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-shadow">
                <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-pink-200">
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
                  <h3 className="text-2xl font-bold text-pink-700 mb-2">はなまる</h3>
                  <p className="text-pink-600 mb-4">
                    FluffyHopperの主役！好奇心旺盛で明るい性格の女の子うさぎ。 ピンク色の耳と花の模様が特徴です。
                  </p>
                  <Link href="/characters/hanamaru">
                    <Button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 text-sm">
                      詳しく見る
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-md flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-shadow">
                <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-200">
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
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">そらまめ</h3>
                  <p className="text-blue-500 mb-4">
                    はなまるの親友。おっとりした性格の男の子うさぎ。 水色の耳と雲の模様が特徴です。
                  </p>
                  <Link href="/characters/soramame">
                    <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 text-sm">
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
                  className="rounded-full border-pink-500 text-pink-500 hover:bg-pink-100 px-6 py-2"
                >
                  すべてのキャラクターを見る
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* グッズ紹介プレビュー */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">人気グッズ</h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`グッズ ${item}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-48"
                    basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                  />
                </div>
                <h3 className="text-lg font-bold text-pink-700 mb-1">はなまるぬいぐるみ</h3>
                <p className="text-pink-500 text-sm mb-3">¥2,800</p>
                <Button className="w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white">詳細を見る</Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/goods">
              <Button
                variant="outline"
                className="rounded-full border-pink-500 text-pink-500 hover:bg-pink-100 px-6 py-2"
              >
                すべてのグッズを見る
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-pink-200 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="FluffyHopper ロゴ"
                width={120}
                height={40}
                className="h-10 w-auto"
                basePath={process.env.NEXT_PUBLIC_BASE_PATH}
              />
            </div>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
                >
                  <Twitter size={20} />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
                >
                  <Instagram size={20} />
                </Button>
              </Link>
              <Link href="/shop" aria-label="ショップ">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white text-pink-500 hover:text-pink-700 hover:bg-pink-100"
                >
                  <ShoppingBag size={20} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-pink-700">
            <nav className="flex gap-6 mb-4 md:mb-0">
              <Link href="/" className="hover:text-pink-900">
                ホーム
              </Link>
              <Link href="/characters" className="hover:text-pink-900">
                キャラクター
              </Link>
              <Link href="/goods" className="hover:text-pink-900">
                グッズ
              </Link>
              <Link href="/contact" className="hover:text-pink-900">
                お問い合わせ
              </Link>
            </nav>
            <p className="text-sm">© 2023 FluffyHopper All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
