import fs from "fs";
import path from "path";
import createClient from 'openapi-fetch';
import type { paths } from '@/types/strapi';

const OUTPUT_FILE = path.join(__dirname, "..", "remoteOptimizedImages.js");

async function fetchAllImageUrls(): Promise<string[]> {

    const client = createClient<paths>({
      baseUrl: `https://strapi.se00sas.com/api`,
      headers: {
        Accept: 'application/json',
      }
    });
  try {
    const res = await client.GET('/upload/files');
    const imageUrls = res.data?.map((item) => `https://strapi.se00sas.com${item.url}`);
    return Array.from(new Set(imageUrls));
  } catch (err) {
    console.error("❌ Strapi upload/files API から画像取得に失敗:", err);
    return [];
  }
}

async function generateFile(): Promise<void> {
  const urls = await fetchAllImageUrls();

  const content = `module.exports = ${JSON.stringify(urls, null, 2)};\n`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`✅ remoteOptimizedImages.js を生成しました（${urls.length}件）`);
}

generateFile();
