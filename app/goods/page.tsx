import { client } from '@/lib/strapi-client';
import GoodsClient from './GoodsClient';
import type { paths } from '@/types/strapi';

type Product = paths['/products']['get']['responses']['200']['content']['application/json']['data'];
type Character =
  paths['/characters']['get']['responses']['200']['content']['application/json']['data'];
type ProductCategory =
  paths['/product-categories']['get']['responses']['200']['content']['application/json']['data'];

export default async function Goods() {
  const resProduct = await client.GET('/products', {
    params: {
      query: {
        populate: '*',
        fields: '*',
      },
    },
  });
  const goods: Product = resProduct?.data?.data;

  const resProductCategory = await client.GET('/product-categories', {
    params: {
      query: {
        populate: '*',
        fields: '*',
      },
    },
  });
  const productCategories: ProductCategory = resProductCategory?.data?.data;

  const resCharacter = await client.GET('/characters', {
    params: {
      query: {
        populate: '*',
        fields: '*',
      },
    },
  });
  const characters: Character = resCharacter?.data?.data;

  return (
    <GoodsClient goods={goods} characters={characters} productCategories={productCategories} />
  );
}
