import Link from "next/link"
import Image from "next-image-export-optimizer"
import { Instagram, Twitter, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Characters() {
  const characters = [
    {
      id: "hanamaru",
      name: "はなまる",
      color: "pink",
      description: "FluffyHopperの主役！好奇心旺盛で明るい性格の女の子うさぎ。ピンク色の耳と花の模様が特徴です。",
      personality: "明るく元気",
      birthday: "3月3日",
      favorites: "いちご、お花、おしゃれ",
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
      borderColor: "border-pink-300",
      imgSrc: "/images/character_img/hello.png?height=160&width=160",
    },
    {
      id: "soramame",
      name: "そらまめ",
      color: "blue",
      description: "はなまるの親友。おっとりした性格の男の子うさぎ。水色の耳と雲の模様が特徴です。",
      personality: "のんびり優しい",
      birthday: "7月7日",
      favorites: "本、星空、お昼寝",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-300",
      imgSrc: "/images/character_img/hello.png?height=160&width=160",
    },
    {
      id: "momoka",
      name: "ももか",
      color: "purple",
      description: "おしゃれが大好きな女の子うさぎ。紫色の耳とハートの模様が特徴です。",
      personality: "おしゃれでクール",
      birthday: "2月14日",
      favorites: "ファッション、スイーツ、音楽",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-300",
      imgSrc: "/images/character_img/batten.png?height=160&width=160",
    },
    {
      id: "piyo",
      name: "ぴよ",
      color: "yellow",
      description: "元気いっぱいの男の子うさぎ。黄色の耳と星の模様が特徴です。",
      personality: "活発でやんちゃ",
      birthday: "5月5日",
      favorites: "スポーツ、冒険、お菓子",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-300",
      imgSrc: "/images/character_img/hello.png?height=160&width=160",
    },
  ]

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
        <section className="relative h-[300px] overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">キャラクター紹介</h1>
            <p className="text-lg md:text-xl text-pink-600 max-w-2xl">
              FluffyHopperの愛らしいキャラクターたちをご紹介します！
            </p>
          </div>
        </section>

        {/* キャラクター一覧 */}
        <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characters.map((character) => (
              <Link href={`/characters/${character.id}`} key={character.id} className="block">
                <div
                  className={`rounded-3xl p-6 shadow-md flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-shadow ${character.bgColor}`}
                >
                  <div
                    className={`w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 ${character.borderColor}`}
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
                    <h3 className={`text-2xl font-bold ${character.textColor} mb-2`}>{character.name}</h3>
                    <p className={`${character.textColor} mb-4 opacity-80`}>{character.description}</p>
                    <Button
                      className={`rounded-full bg-${character.color}-500 hover:bg-${character.color}-600 text-white px-4 py-1 text-sm`}
                    >
                      詳しく見る
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
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
