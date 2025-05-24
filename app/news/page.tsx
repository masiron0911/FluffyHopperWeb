import { client } from '@/lib/strapi-client';
import type { paths } from '@/types/strapi';
import NewsClient from './NewsClient';

type LatestInformations =
  paths['/latest-informations']['get']['responses']['200']['content']['application/json']['data'];

export default async function News() {
  const res = await client.GET('/latest-informations', {
    params: {
      query: {
        populate: '*',
        sort: 'date:desc',
        fields: 'title,date,content,slug',
      },
    },
  });

  const sortedNews: LatestInformations = res.data?.data;

  return <NewsClient latestInformations={sortedNews} />;
}
