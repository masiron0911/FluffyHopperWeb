import Link from "next/link"
import Image from "next-image-export-optimizer"
import { Heart, Star, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import CharacterGallery from "@/components/character-gallery"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// 正しい型定義を使用
interface PageProps {
  params: {
    id: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// 静的パスを生成
export async function generateStaticParams() {
  return [{ id: "hanamaru" }, { id: "soramame" }, { id: "momoka" }, { id: "piyo" }]
}

export default function CharacterDetail({ params }: PageProps) {
  const characters = {
    hanamaru: {
      name: "はなまる",
      color: "pink",
      description: "FluffyHopperの主役！好奇心旺盛で明るい性格の女の子うさぎ。ピンク色の耳と花の模様が特徴です。",
      longDescription:
        "はなまるは、FluffyHopperの主役キャラクターです。いつも明るく元気いっぱいで、周りの友達を笑顔にするのが大好き。花が大好きで、いつも頭に小さな花の飾りをつけています。好奇心旺盛な性格で、新しいことに挑戦するのが大好きです。お料理やお菓子作りが得意で、みんなにおいしいものを振る舞うのが幸せだと感じています。",
      personality: "明るく元気",
      birthday: "3月3日",
      favorites: "いちご、お花、おしゃれ",
      friends: ["そらまめ", "ももか", "ぴよ"],
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
      borderColor: "border-pink-300",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=800&text=Character+Image+1", alt: "キャラクター画像 1" },
        { id: 2, src: "/placeholder.svg?height=800&width=800&text=Character+Image+2", alt: "キャラクター画像 2" },
        { id: 3, src: "/placeholder.svg?height=800&width=800&text=Character+Image+3", alt: "キャラクター画像 3" },
      ],
    },
    soramame: {
      name: "そらまめ",
      color: "blue",
      description: "はなまるの親友。おっとりした性格の男の子うさぎ。水色の耳と雲の模様が特徴です。",
      longDescription:
        "そらまめは、はなまるの一番の親友です。のんびりとした性格で、いつも穏やかな笑顔を絶やしません。本を読んだり、星空を眺めたりするのが大好き。はなまるとは対照的な性格ですが、お互いを補い合う素敵な友情を育んでいます。空や雲が好きで、よく空を見上げては夢を描いています。",
      personality: "のんびり優しい",
      birthday: "7月7日",
      favorites: "本、星空、お昼寝",
      friends: ["はなまる", "ぴよ", "ももか"],
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-300",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=800&text=Character+Image+1", alt: "キャラクター画像 1" },
        { id: 2, src: "/placeholder.svg?height=800&width=800&text=Character+Image+2", alt: "キャラクター画像 2" },
        { id: 3, src: "/placeholder.svg?height=800&width=800&text=Character+Image+3", alt: "キャラクター画像 3" },
      ],
    },
    momoka: {
      name: "ももか",
      color: "purple",
      description: "おしゃれが大好きな女の子うさぎ。紫色の耳とハートの模様が特徴です。",
      longDescription:
        "ももかは、おしゃれが大好きなトレンドリーダー。最新のファッションやアクセサリーに詳しく、いつもおしゃれな服を着こなしています。少し気取った性格に見えますが、実は友達思いで優しい心の持ち主。特にスイーツ作りが得意で、みんなでティーパーティーを開くのが大好きです。",
      personality: "おしゃれでクール",
      birthday: "2月14日",
      favorites: "ファッション、スイーツ、音楽",
      friends: ["はなまる", "そらまめ"],
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-300",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=800&text=Character+Image+1", alt: "キャラクター画像 1" },
        { id: 2, src: "/placeholder.svg?height=800&width=800&text=Character+Image+2", alt: "キャラクター画像 2" },
        { id: 3, src: "/placeholder.svg?height=800&width=800&text=Character+Image+3", alt: "キャラクター画像 3" },
      ],
    },
    piyo: {
      name: "ぴよ",
      color: "yellow",
      description: "元気いっぱいの男の子うさぎ。黄色の耳と星の模様が特徴です。",
      longDescription:
        "ぴよは、いつも元気いっぱいで活発な男の子うさぎ。スポーツが得意で、特にサッカーが大好き。冒険心が強く、新しい場所を探検するのが趣味です。少しやんちゃな面もありますが、困っている友達がいると真っ先に助けに行く勇敢な心の持ち主。お菓子が大好きで、特にチョコレートには目がありません。",
      personality: "活発でやんちゃ",
      birthday: "5月5日",
      favorites: "スポーツ、冒険、お菓子",
      friends: ["はなまる", "そらまめ"],
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-300",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      images: [
        { id: 1, src: "/placeholder.svg?height=800&width=800&text=Character+Image+1", alt: "キャラクター画像 1" },
        { id: 2, src: "/placeholder.svg?height=800&width=800&text=Character+Image+2", alt: "キャラクター画像 2" },
        { id: 3, src: "/placeholder.svg?height=800&width=800&text=Character+Image+3", alt: "キャラクター画像 3" },
      ],
    },
  }

  const character = characters[params.id as keyof typeof characters]

  if (!character) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main>
        {/* キャラクターヒーロー */}
        <section className={`relative h-[400px] overflow-hidden ${character.bgColor}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt={character.name}
              width={1200}
              height={800}
              className="object-cover opacity-30"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <div className="relative z-1 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt={character.name}
                width={160}
                height={160}
                className="object-cover"
                basePath={process.env.NEXT_PUBLIC_BASE_PATH}
              />
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold ${character.textColor} mb-2`}>{character.name}</h1>
            <p className={`text-lg ${character.textColor} max-w-2xl opacity-80`}>{character.description}</p>
          </div>
        </section>

        {/* キャラクター詳細 */}
        <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className={`text-2xl font-bold ${character.textColor} mb-6`}>プロフィール</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="mb-6">
                  <h3 className={`text-lg font-bold ${character.textColor} mb-2`}>性格</h3>
                  <p className="text-gray-700">{character.personality}</p>
                </div>
                <div className="mb-6">
                  <h3 className={`text-lg font-bold ${character.textColor} mb-2`}>誕生日</h3>
                  <p className="text-gray-700">{character.birthday}</p>
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${character.textColor} mb-2`}>好きなもの</h3>
                  <p className="text-gray-700">{character.favorites}</p>
                </div>
              </div>
              <div>
                <h3 className={`text-lg font-bold ${character.textColor} mb-2`}>自己紹介</h3>
                <p className="text-gray-700 mb-4">{character.longDescription}</p>
                <h3 className={`text-lg font-bold ${character.textColor} mb-2`}>お友達</h3>
                <div className="flex flex-wrap gap-2">
                  {character.friends.map((friend) => (
                    <Link
                      href={`/characters/${friend === "はなまる" ? "hanamaru" : friend === "そらまめ" ? "soramame" : friend === "ももか" ? "momoka" : "piyo"}`}
                      key={friend}
                    >
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm ${character.bgColor} ${character.textColor}`}
                      >
                        {friend}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className={`${character.bgColor} rounded-2xl p-4 text-center`}>
                <Heart className={`mx-auto mb-2 ${character.textColor}`} size={32} />
                <h3 className={`text-lg font-bold ${character.textColor} mb-1`}>性格</h3>
                <p className={`${character.textColor} opacity-80`}>{character.personality}</p>
              </div>
              <div className={`${character.bgColor} rounded-2xl p-4 text-center`}>
                <Star className={`mx-auto mb-2 ${character.textColor}`} size={32} />
                <h3 className={`text-lg font-bold ${character.textColor} mb-1`}>特技</h3>
                <p className={`${character.textColor} opacity-80`}>
                  {character.name === "はなまる"
                    ? "お料理"
                    : character.name === "そらまめ"
                      ? "読書"
                      : character.name === "ももか"
                        ? "ファッション"
                        : "スポーツ"}
                </p>
              </div>
              <div className={`${character.bgColor} rounded-2xl p-4 text-center`}>
                <Coffee className={`mx-auto mb-2 ${character.textColor}`} size={32} />
                <h3 className={`text-lg font-bold ${character.textColor} mb-1`}>好きな食べ物</h3>
                <p className={`${character.textColor} opacity-80`}>
                  {character.name === "はなまる"
                    ? "いちご"
                    : character.name === "そらまめ"
                      ? "ミルクティー"
                      : character.name === "ももか"
                        ? "マカロン"
                        : "チョコレート"}
                </p>
              </div>
            </div>

            {/* キャラクター画像ギャラリー - クライアントコンポーネントとして分離 */}
            <CharacterGallery images={character.images} textColor={character.textColor} />

            <h2 className={`text-2xl font-bold ${character.textColor} mb-6`}>グッズ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-50 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt={`${character.name}グッズ ${item}`}
                      width={150}
                      height={150}
                      className="object-cover w-full h-32"
                      basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                    />
                  </div>
                  <h3 className={`text-sm font-bold ${character.textColor} mb-1`}>{character.name}ぬいぐるみ</h3>
                  <p className="text-gray-500 text-xs mb-2">¥2,800</p>
                  <Button className={`w-full rounded-full text-xs py-1 ${character.buttonColor} text-white`}>
                    詳細を見る
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/goods">
                <Button
                  variant="outline"
                  className={`rounded-full border-${character.color}-500 ${character.textColor} hover:bg-${character.color}-100 px-6 py-2`}
                >
                  すべてのグッズを見る
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
