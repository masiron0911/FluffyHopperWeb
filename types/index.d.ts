import type { characters } from '@/data/characters';
import type { newsItems } from '@/data/news';

export type CharacterId = keyof typeof characters;
export type CharacterName = (typeof characters)[keyof typeof characters]['name'];
export type Character = {
  name: CharacterName;
  color: string;
  description: string;
  longDescription: string;
  personality: string;
  speciality: string;
  favoriteFood: string;
  birthday: string;
  favorites: string;
  friends: CharacterName[];
  bgColor: string;
  textColor: string;
  borderColor: string;
  buttonColor: string;
  imgSrc: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
};

export type NewsTag = (typeof newsItems)[keyof typeof newsItems]['tag'];
