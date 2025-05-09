import fs from 'fs';
import path from 'path';
import createClient from 'openapi-fetch';
import type { paths } from '@/types/strapi';
import { createHash } from 'crypto';
import https from 'https';

const outDir = path.join(process.cwd(), 'public', 'images', 'remote-origin');

function hashUrl(url: string) {
  return createHash('md5').update(url).digest('hex');
}

function getExt(url: string) {
  const ext = path.extname(new URL(url).pathname);
  return ext || '.jpg';
}

//  Strapi上にある全画像ファイルのパスを取得
async function fetchAllImageUrls(): Promise<string[]> {
  const client = createClient<paths>({
    baseUrl: `https://strapi.se00sas.com/api`,
    headers: {
      Accept: 'application/json',
    },
  });
  try {
    const res = await client.GET('/upload/files');
    const imageUrls = res.data?.map((item) => `https://strapi.se00sas.com${item.url}`);
    return Array.from(new Set(imageUrls));
  } catch (err) {
    console.error('❌ Strapi upload/files API から画像取得に失敗:', err);
    return [];
  }
}

async function download(url: string) {
  const filename = hashUrl(url) + getExt(url);
  const outPath = path.join(outDir, filename);
  if (fs.existsSync(outPath)) return filename;

  return new Promise<string>((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) return reject(`Failed: ${url}`);
        fs.mkdirSync(outDir, { recursive: true });
        const file = fs.createWriteStream(outPath);
        res.pipe(file);
        file.on('finish', () => file.close(() => resolve(filename)));
      })
      .on('error', reject);
  });
}

(async () => {
  const imageUrls = await fetchAllImageUrls();
  for (const url of imageUrls) {
    try {
      const filename = await download(url);
      console.log(`✅ Downloaded: ${url} → ${filename}`);
    } catch (e) {
      console.error(e);
    }
  }
})();
