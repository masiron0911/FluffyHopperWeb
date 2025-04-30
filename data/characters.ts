import type { Character } from '@/types';

export const characters: Record<string, Character> = {
  hanamaru: {
    name: 'はなまる',
    color: 'pink',
    description:
      'FluffyHopperの主役！好奇心旺盛で明るい性格の女の子うさぎ。ピンク色の耳と花の模様が特徴です。',
    longDescription:
      'はなまるは、FluffyHopperの主役キャラクターです。いつも明るく元気いっぱいで、周りの友達を笑顔にするのが大好き。花が大好きで、いつも頭に小さな花の飾りをつけています。好奇心旺盛な性格で、新しいことに挑戦するのが大好きです。お料理やお菓子作りが得意で、みんなにおいしいものを振る舞うのが幸せだと感じています。',
    personality: '明るく元気',
    speciality: 'お料理',
    favoriteFood: 'いちご',
    birthday: '3月3日',
    favorites: 'いちご、お花、おしゃれ',
    friends: ['そらまめ', 'ももか', 'ぴよ'],
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-300',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    imgSrc: '/images/character_img/hello.png',
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
  soramame: {
    name: 'そらまめ',
    color: 'blue',
    description: 'はなまるの親友。おっとりした性格の男の子うさぎ。水色の耳と雲の模様が特徴です。',
    longDescription:
      'そらまめは、はなまるの一番の親友です。のんびりとした性格で、いつも穏やかな笑顔を絶やしません。本を読んだり、星空を眺めたりするのが大好き。はなまるとは対照的な性格ですが、お互いを補い合う素敵な友情を育んでいます。空や雲が好きで、よく空を見上げては夢を描いています。',
    personality: 'のんびり優しい',
    speciality: '読書',
    favoriteFood: 'ミルクティー',
    birthday: '7月7日',
    favorites: '本、星空、お昼寝',
    friends: ['はなまる', 'ぴよ', 'ももか'],
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-300',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    imgSrc: '/images/character_img/hello.png',
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
  momoka: {
    name: 'ももか',
    color: 'purple',
    description: 'おしゃれが大好きな女の子うさぎ。紫色の耳とハートの模様が特徴です。',
    longDescription:
      'ももかは、おしゃれが大好きなトレンドリーダー。最新のファッションやアクセサリーに詳しく、いつもおしゃれな服を着こなしています。少し気取った性格に見えますが、実は友達思いで優しい心の持ち主。特にスイーツ作りが得意で、みんなでティーパーティーを開くのが大好きです。',
    personality: 'おしゃれでクール',
    speciality: 'ファッション',
    favoriteFood: 'マカロン',
    birthday: '2月14日',
    favorites: 'ファッション、スイーツ、音楽',
    friends: ['はなまる', 'そらまめ'],
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
  piyo: {
    name: 'ぴよ',
    color: 'yellow',
    description: '元気いっぱいの男の子うさぎ。黄色の耳と星の模様が特徴です。',
    longDescription:
      'ぴよは、いつも元気いっぱいで活発な男の子うさぎ。スポーツが得意で、特にサッカーが大好き。冒険心が強く、新しい場所を探検するのが趣味です。少しやんちゃな面もありますが、困っている友達がいると真っ先に助けに行く勇敢な心の持ち主。お菓子が大好きで、特にチョコレートには目がありません。',
    personality: '活発でやんちゃ',
    speciality: 'スポーツ',
    favoriteFood: 'チョコレート',
    birthday: '5月5日',
    favorites: 'スポーツ、冒険、お菓子',
    friends: ['はなまる', 'そらまめ'],
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-300',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
    imgSrc: '/images/character_img/hello.png',
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
