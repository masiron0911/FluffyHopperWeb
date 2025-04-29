import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import { characters } from '@/data/characters';

export default function Characters() {
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
          {Object.keys(characters).map((key) => {
            const character = characters[key];
            return (
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
            );
          })}
        </div>
      </section>
    </div>
  );
}
