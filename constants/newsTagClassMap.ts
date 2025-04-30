import type { NewsItem } from '@/types';

// タグごとの配色設定
export const newsTagClassMap: Record<NewsItem['tag'], string> = {
  新商品: 'bg-pink-100 text-pink-700',
  イベント: 'bg-blue-100 text-blue-700',
  お知らせ: 'bg-green-100 text-green-700',
  新キャラクター: 'bg-purple-100 text-purple-700',
  コラボレーション: 'bg-yellow-100 text-yellow-700',
};
