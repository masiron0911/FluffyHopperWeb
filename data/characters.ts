import type { Character } from '@/types';

export const characters: Record<string, Character> = {
  hanamaru: {
    name: 'はなまる',
    color: 'amber',
    description: 'おいしいものとお昼寝が大好きな黒目の白うさぎ。',
    longDescription:
      'おいしいものとお昼寝が大好きな黒目の白うさぎ。7つ子きょうだいの6番目。小さいことは気にしないマイペースな性格。りすのまんぷくと仲良くお散歩するのが日課。',
    personality: 'マイペース',
    speciality: 'おいしいものを見つけること',
    favoriteFood: 'あんみつ',
    birthday: '5月5日',
    favorites: 'おひるね・おさんぽ',
    friends: ['まんぷく', 'ばってん'],
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-300',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
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
    color: 'orange',
    description: 'どんぐりの隠し場所を探しているうちに迷子になってしまったシマリス。',
    longDescription:
      'どんぐりの隠し場所を探しているうちに迷子になってしまったシマリスのまんぷく。どんぐりをつまみ食いしていたはなまると出会い、一緒に美味しいものめぐりをしている。',
    personality: 'しっかりもの',
    speciality: '読書',
    favoriteFood: 'くるみゆべし',
    birthday: '3月3日',
    favorites: 'おいしいお店さがし',
    friends: ['はなまる', 'ばってん'],
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-300',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
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
