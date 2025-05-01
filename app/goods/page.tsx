'use client';

import Image from 'next-image-export-optimizer';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { goods } from '@/data/goods';
import { characters } from '@/data/characters';
import { useState } from 'react';

export default function Goods() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);

  const filteredGoods = Object.entries(goods).filter(([, item]) => {
    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchCharacter =
      selectedCharacters.length === 0 || selectedCharacters.includes(item.character);
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

  const categoriesFilter = [
    ...Array.from(new Set(Object.values(goods).map((item) => item.category))),
  ];
  const charactersFilter = [...Object.values(characters).map((char) => char.name)];

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
              {categoriesFilter.map((category, index) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <Button
                    key={index}
                    onClick={() => toggleCategory(category)}
                    className={`rounded-full whitespace-nowrap ${
                      isSelected
                        ? 'bg-pink-500 text-white'
                        : 'border-pink-200 text-pink-700 hover:bg-pink-100'
                    }`}
                    size="sm"
                    variant={isSelected ? 'default' : 'outline'}
                  >
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-sm text-gray-500">キャラクター</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {charactersFilter.map((character, index) => {
                const isSelected = selectedCharacters.includes(character);
                return (
                  <Button
                    key={index}
                    onClick={() => toggleCharacter(character)}
                    className={`rounded-full whitespace-nowrap ${
                      isSelected
                        ? 'bg-pink-500 text-white'
                        : 'border-pink-200 text-pink-700 hover:bg-pink-100'
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
          {filteredGoods.map(([id, item]) => (
            <div
              key={id}
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
