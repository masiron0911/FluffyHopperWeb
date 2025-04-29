import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';

export default function Characters() {
  const characters = [
    {
      id: 'hanamaru',
      name: 'はなまる',
      color: 'pink',
      description:
        'FluffyHopperの主役！好奇心旺盛で明るい性格の女の子うさぎ。ピンク色の耳と花の模様が特徴です。',
      personality: '明るく元気',
      birthday: '3月3日',
      favorites: 'いちご、お花、おしゃれ',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
      borderColor: 'border-pink-300',
      imgSrc: '/images/character_img/hello.png?height=160&width=160',
    },
    {
      id: 'soramame',
      name: 'そらまめ',
      color: 'blue',
      description: 'はなまるの親友。おっとりした性格の男の子うさぎ。水色の耳と雲の模様が特徴です。',
      personality: 'のんびり優しい',
      birthday: '7月7日',
      favorites: '本、星空、お昼寝',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-300',
      imgSrc: '/images/character_img/hello.png?height=160&width=160',
    },
    {
      id: 'momoka',
      name: 'ももか',
      color: 'purple',
      description: 'おしゃれが大好きな女の子うさぎ。紫色の耳とハートの模様が特徴です。',
      personality: 'おしゃれでクール',
      birthday: '2月14日',
      favorites: 'ファッション、スイーツ、音楽',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-300',
      imgSrc: '/images/character_img/batten.png?height=160&width=160',
    },
    {
      id: 'piyo',
      name: 'ぴよ',
      color: 'yellow',
      description: '元気いっぱいの男の子うさぎ。黄色の耳と星の模様が特徴です。',
      personality: '活発でやんちゃ',
      birthday: '5月5日',
      favorites: 'スポーツ、冒険、お菓子',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-300',
      imgSrc: '/images/character_img/hello.png?height=160&width=160',
    },
  ];

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[300px] overflow-hidden">
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
          <h1 className="mb-4 text-4xl font-bold text-pink-700 md:text-5xl">キャラクター紹介</h1>
          <p className="max-w-2xl text-lg text-pink-600 md:text-xl">
            FluffyHopperの愛らしいキャラクターたちをご紹介します！
          </p>
        </div>
      </section>

      {/* キャラクター一覧 */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {characters.map((character) => (
            <Link href={`/characters/${character.id}`} key={character.id} className="block">
              <div
                className={`flex flex-col items-center gap-6 rounded-3xl p-6 shadow-md transition-shadow hover:shadow-lg md:flex-row ${character.bgColor}`}
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
                  <h3 className={`text-2xl font-bold ${character.textColor} mb-2`}>
                    {character.name}
                  </h3>
                  <p className={`${character.textColor} mb-4 opacity-80`}>
                    {character.description}
                  </p>
                  <Button
                    className={`rounded-full bg-${character.color}-500 hover:bg-${character.color}-600 px-4 py-1 text-sm text-white`}
                  >
                    詳しく見る
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
