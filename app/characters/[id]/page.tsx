import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Heart, Star, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import CharacterGallery from '@/components/character-gallery';
import { characters } from '@/data/characters';
import type { Metadata } from 'next';
import type { CharacterId } from '@/types';
import { characterNameToIdMap } from '@/constants/characterIdMap';
import { client } from '@/lib/strapi-client';
import type { paths } from '@/types/strapi';
import { ProductCard } from '@/components/ui/productCard';

interface PageProps {
  params: Promise<{ id: CharacterId }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

type Product = paths['/products']['get']['responses']['200']['content']['application/json']['data'];

export async function generateStaticParams() {
  return Object.keys(characters).map((id) => ({ id }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const character = characters[params.id];

  return {
    title: `${character.name}`,
  };
}

export default async function CharacterDetail(props: PageProps) {
  const params = await props.params;
  const character = characters[params.id];

  if (!character) {
    notFound();
  }

  const resProduct = await client.GET('/products', {
    params: {
      query: {
        populate: '*',
        fields: '*',
        pagination: {
          limit: 4,
        },
        filters: {
          characters: {
            name: {
              $eq: character.name,
            },
          },
        },
      },
    },
  });
  const goods: Product = resProduct?.data?.data;

  const resCharacter = await client.GET('/characters', {
    params: {
      query: {
        populate: 'galleryImages',
        fields: '*',
        filters: {
          name: {
            $eq: character.name,
          },
        },
      },
    },
  });
  const characterContents = resCharacter?.data?.data;

  return (
    <div>
      {/* キャラクターヒーロー */}
      <section className={`relative h-[400px] overflow-hidden ${character.bgColor}`}>
        <div className="relative z-1 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-white">
            <Image
              src={character.imgSrc}
              alt={character.name}
              width={160}
              height={160}
              className="object-cover"
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          </div>
          <h1 className={`text-4xl font-bold md:text-5xl ${character.textColor} mb-2`}>
            {character.name}
          </h1>
          <p className={`text-lg ${character.textColor} max-w-2xl opacity-80`}>
            {character.description}
          </p>
        </div>
      </section>

      {/* キャラクター詳細 */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-md">
          <h2 className={`text-2xl font-bold ${character.textColor} mb-6`}>プロフィール</h2>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
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
              <p className="mb-4 text-gray-700">{character.longDescription}</p>
              <h3 className={`text-lg font-bold ${character.textColor} mb-2`}>お友達</h3>
              <div className="flex flex-wrap gap-2">
                {character.friends.map((friendName) => {
                  const friendId = characterNameToIdMap[friendName];
                  return (
                    <Link href={`/characters/${friendId}`} key={friendName}>
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-sm ${character.bgColor} ${character.textColor}`}
                      >
                        {friendName}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className={`${character.bgColor} rounded-2xl p-4 text-center`}>
              <Heart className={`mx-auto mb-2 ${character.textColor}`} size={32} />
              <h3 className={`text-lg font-bold ${character.textColor} mb-1`}>性格</h3>
              <p className={`${character.textColor} opacity-80`}>{character.personality}</p>
            </div>
            <div className={`${character.bgColor} rounded-2xl p-4 text-center`}>
              <Star className={`mx-auto mb-2 ${character.textColor}`} size={32} />
              <h3 className={`text-lg font-bold ${character.textColor} mb-1`}>特技</h3>
              <p className={`${character.textColor} opacity-80`}>{character.speciality}</p>
            </div>
            <div className={`${character.bgColor} rounded-2xl p-4 text-center`}>
              <Coffee className={`mx-auto mb-2 ${character.textColor}`} size={32} />
              <h3 className={`text-lg font-bold ${character.textColor} mb-1`}>好きな食べ物</h3>
              <p className={`${character.textColor} opacity-80`}>{character.favoriteFood}</p>
            </div>
          </div>

          {/* キャラクター画像ギャラリー - クライアントコンポーネントとして分離 */}
          <CharacterGallery
            characterContents={characterContents}
            characterName={character.name}
            textColor={character.textColor}
          />

          <h2 className={`text-2xl font-bold ${character.textColor} mb-6`}>グッズ</h2>
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {goods?.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name!}
                price={item.price!}
                imageUrl={item.image!.url!}
                storeUrl={item.storeUrl!}
              />
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
    </div>
  );
}
