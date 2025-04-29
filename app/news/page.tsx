import Link from "next/link"
import Image from "next-image-export-optimizer"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "2023.12.15",
      tag: "新商品",
      title: "はなまるのクリスマス限定ぬいぐるみが登場！",
      content:
        "クリスマスをテーマにしたはなまるの限定ぬいぐるみが登場しました。赤いサンタ帽とマフラーを身につけた特別デザインです。数量限定なのでお早めにお買い求めください。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      date: "2023.12.01",
      tag: "イベント",
      title: "FluffyHopperカフェが東京・原宿にオープン決定！",
      content:
        "2024年1月15日から2月28日までの期間限定で、FluffyHopperカフェが原宿にオープンします。キャラクターをモチーフにしたかわいい料理やスイーツをお楽しみいただけます。また、カフェ限定のグッズも販売予定です。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      date: "2023.11.20",
      tag: "お知らせ",
      title: "公式オンラインショップがリニューアルしました",
      content:
        "FluffyHopper公式オンラインショップがリニューアルオープンしました。新しいデザインでより使いやすくなり、会員登録をすると限定特典も受けられるようになりました。ぜひチェックしてみてください。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      date: "2023.11.10",
      tag: "新キャラクター",
      title: "新キャラクター「ももか」が仲間入り！",
      content:
        "FluffyHopperの新しい仲間「ももか」が登場しました。おしゃれが大好きな女の子うさぎで、紫色の耳とハートの模様が特徴です。ももかのグッズも順次発売予定ですので、お楽しみに！",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      date: "2023.10.25",
      tag: "コラボレーション",
      title: "人気ドリンクブランドとのコラボ商品発売",
      content:
        "人気ドリンクブランド「フルーツティー」とFluffyHopperのコラボレーション商品が発売決定しました。はなまるとそらまめがデザインされたボトルと、オリジナルのドリンクをお楽しみいただけます。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      date: "2023.10.10",
      tag: "イベント",
      title: "FluffyHopper ハロウィンイベント開催",
      content:
        "10月31日、東京スカイツリータウンにてFluffyHopperハロウィンイベントを開催します。キャラクターたちのハロウィン衣装お披露目や、限定グッズの販売、フォトスポットなど盛りだくさんの内容です。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      date: "2023.09.15",
      tag: "新商品",
      title: "秋の新作ステーショナリーシリーズ登場",
      content:
        "秋をテーマにした新作ステーショナリーシリーズが登場しました。落ち葉や木の実などの秋モチーフとキャラクターたちがデザインされた文房具をお楽しみください。",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      date: "2023.09.01",
      tag: "お知らせ",
      title: "FluffyHopper公式アプリがリリース",
      content:
        "FluffyHopper公式アプリがついにリリースされました。最新情報のお知らせやデジタルスタンプラリー、限定壁紙のダウンロードなど、アプリならではのコンテンツをお楽しみいただけます。",
      image: "/placeholder.svg?height=300&width=500",
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
              alt="FluffyHopper ニュース"
              width={1200}
              height={600}
              className="object-cover opacity-30"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <div className="relative z-1 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">お知らせ</h1>
            <p className="text-lg md:text-xl text-pink-600 max-w-2xl">FluffyHopperの最新情報をお届けします！</p>
          </div>
        </section>

        {/* ニュース一覧 */}
        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={500}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                      basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gray-500 text-sm">{news.date}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs ${
                          news.tag === "新商品"
                            ? "bg-pink-100 text-pink-700"
                            : news.tag === "イベント"
                              ? "bg-blue-100 text-blue-700"
                              : news.tag === "お知らせ"
                                ? "bg-green-100 text-green-700"
                                : news.tag === "新キャラクター"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {news.tag}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h2>
                    <p className="text-gray-600 mb-4">{news.content}</p>
                    <Link href={`/news/${news.id}`}>
                      <Button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 text-sm">
                        詳しく見る
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ページネーション */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="default" size="icon" className="rounded-full bg-pink-500 hover:bg-pink-600">
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
