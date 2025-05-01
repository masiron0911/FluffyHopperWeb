import type { Character } from '@/types';

export const characters: Record<string, Character> = {
  hanamaru: {
    name: 'はなまる',
    color: 'pink',
    description: 'おいしいものとお昼寝が大好きな黒目の白うさぎ。',
    longDescription:
      'おいしいものとお昼寝が大好きな黒目の白うさぎ。7つ子きょうだいの6番目。小さいことは気にしないマイペースな性格。りすのまんぷくと仲良くお散歩するのが日課。',
    personality: 'マイペース',
    speciality: 'おいしいものを見つけること',
    favoriteFood: 'あんみつ',
    birthday: '5月5日',
    favorites: 'おひるね・おさんぽ',
    friends: ['まんぷく', 'ばってん'],
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-300',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    imgSrc: '/images/character_img/hanamaru.png',
    images: [
      {
        id: 1,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 1',
      },
      {
        id: 2,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 2',
      },
      {
        id: 3,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 3',
      },
    ],
  },
  manpuku: {
    name: 'まんぷく',
    color: 'blue',
    description: 'どんぐりの隠し場所を探しているうちに迷子になってしまったシマリス。',
    longDescription:
      'どんぐりの隠し場所を探しているうちに迷子になってしまったシマリスのまんぷく。どんぐりをつまみ食いしていたはなまると出会い、一緒に美味しいものめぐりをしている。',
    personality: 'しっかりもの',
    speciality: '読書',
    favoriteFood: 'くるみゆべし',
    birthday: '3月3日',
    favorites: 'おいしいお店さがし',
    friends: ['はなまる', 'ばってん'],
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-300',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    imgSrc: '/images/character_img/manpuku.png',
    images: [
      {
        id: 1,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 1',
      },
      {
        id: 2,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 2',
      },
      {
        id: 3,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 3',
      },
    ],
  },
  batten: {
    name: 'ばってん',
    color: 'purple',
    description: 'おなかのギザギザした模様が特徴的なはなまるの兄うさぎ。いたずら好き。',
    longDescription:
      '7つ子きょうだいの3番目。はなまるのお兄ちゃん。ちょっぴりイジワルで、はなまるに度々いたずらを仕掛けて楽しんでいる。でも本当は寂しがりや。',
    personality: 'いたずらっこ',
    speciality: '発明',
    favoriteFood: 'カレー',
    birthday: '9月2日',
    favorites: 'いたずら',
    friends: ['はなまる', 'まんぷく'],
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-300',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    imgSrc: '/images/character_img/batten.png',
    images: [
      {
        id: 1,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 1',
      },
      {
        id: 2,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 2',
      },
      {
        id: 3,
        src: '/placeholder.svg',
        alt: 'キャラクター画像 3',
      },
    ],
  },
};
