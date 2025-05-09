import createClient from 'openapi-fetch';
import type { paths } from '@/types/strapi';
import qs from 'qs';
import path from 'path';
import { createHash } from 'crypto';

const client = createClient<paths>({
  baseUrl: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
  headers: {
    Accept: 'application/json',
  },
  querySerializer(params) {
    return qs.stringify(params, {
      encodeValuesOnly: true,
    });
  },
});
export { client };

function hashUrl(url: string) {
  return createHash('md5').update(url).digest('hex');
}

function getExt(url: string) {
  const ext = path.extname(new URL(url).pathname);
  return ext || '.jpg';
}

export function detectImageFilepath(relativeUrl: string) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}${relativeUrl}`;
  const filename = hashUrl(url) + getExt(url);
  const filepath = `/images/remote-origin/${filename}`;
  return filepath;
}
