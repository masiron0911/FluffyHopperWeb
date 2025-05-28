'use client';

import Image from 'next-image-export-optimizer';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import type { paths } from '@/types/strapi';
import { ProductCard } from '@/components/ui/productCard';

type Product = paths['/products']['get']['responses']['200']['content']['application/json'];
type Character = paths['/characters']['get']['responses']['200']['content']['application/json'];
type ProductCategory =
  paths['/product-categories']['get']['responses']['200']['content']['application/json'];

type Props = {
  goods: Product['data'];
  characters: Character['data'];
  productCategories: ProductCategory['data'];
};

const ITEMS_PER_PAGE = 12;

export default function Goods({ goods, characters, productCategories }: Props) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGoods = goods?.filter((item) => {
    const categoryNames = item.categories?.map((cat) => cat.name) ?? [];
    const characterNames = item.characters?.map((char) => char.name) ?? [];

    const matchCategory =
      selectedCategories.length === 0 ||
      categoryNames.some((name) => selectedCategories.includes(name!));
    const matchCharacter =
      selectedCharacters.length === 0 ||
      characterNames.some((name) => selectedCharacters.includes(name!));
    return matchCategory && matchCharacter;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const toggleCharacter = (character: string) => {
    setSelectedCharacters((prev) =>
      prev.includes(character) ? prev.filter((c) => c !== character) : [...prev, character],
    );
  };

  const categoriesFilter = productCategories?.map((item) => item.name);
  const charactersFilter = characters?.map((char) => char.name);

  const totalPages = Math.ceil(filteredGoods!.length / ITEMS_PER_PAGE);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedCharacters]);
  const paginatedGoods = filteredGoods!.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-200 to-orange-200">
          <Image
            src="/images/goods/2024_designfesta.jpg"
            alt="FluffyHopper グッズ"
            width={1200}
            height={600}
            className="object-cover opacity-30"
            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
          />
        </div>
        <div className="relative z-1 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-amber-700 md:text-5xl">グッズ紹介</h1>
          <p className="max-w-2xl text-lg text-amber-600 md:text-xl">
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
                className="rounded-full border-amber-200 pl-10 focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categoriesFilter?.map((selectedCategoryName, index) => {
                const categoryName = selectedCategoryName ?? '';
                const isSelected = selectedCategories.includes(categoryName);
                return (
                  <Button
                    key={index}
                    onClick={() => toggleCategory(categoryName)}
                    className={`rounded-full whitespace-nowrap ${
                      isSelected
                        ? 'bg-amber-500 text-white'
                        : 'border-amber-200 text-amber-700 hover:bg-amber-100'
                    }`}
                    size="sm"
                    variant={isSelected ? 'default' : 'outline'}
                  >
                    {categoryName}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-sm text-gray-500">キャラクター</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {charactersFilter?.map((character, index) => {
                const isSelected = selectedCharacters.includes(character);
                return (
                  <Button
                    key={index}
                    onClick={() => toggleCharacter(character)}
                    className={`rounded-full whitespace-nowrap ${
                      isSelected
                        ? 'bg-amber-500 text-white'
                        : 'border-amber-200 text-amber-700 hover:bg-amber-100'
                    }`}
                    size="sm"
                    variant={isSelected ? 'default' : 'outline'}
                  >
                    {character}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* グッズ一覧 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {paginatedGoods?.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name!}
              price={item.price!}
              imageUrl={item.image!.url!}
              storeUrl={item.storeUrl!}
            />
          ))}
        </div>

        {/* ページネーション */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;

              return (
                <Button
                  key={pageNumber}
                  variant={isActive ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`rounded-full border-amber-200 ${
                    isActive ? 'bg-amber-500 text-white' : 'text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
