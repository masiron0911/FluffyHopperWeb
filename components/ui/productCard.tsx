import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Button } from '@/components/ui/button';
import { detectImageFilepath } from '@/lib/strapi-client';

type Props = {
  name: string;
  price: string;
  imageUrl: string;
  storeUrl: string;
};

export function ProductCard({ name, price, imageUrl, storeUrl }: Props) {
  return (
    <div
      key={name}
      className="flex flex-col justify-between rounded-3xl bg-white p-2 shadow-md transition-shadow hover:shadow-lg md:p-4"
    >
      <div className="mb-4 overflow-hidden rounded-2xl">
        <Image
          src={imageUrl ? detectImageFilepath(imageUrl) : '/placeholder.svg'}
          alt={`グッズ ${name}`}
          width={200}
          height={200}
          className="h-48 w-full object-cover"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
      </div>
      <h3 className="mb-1 text-sm font-bold text-amber-700 md:text-base">{name}</h3>
      <div>
        <p className="mb-3 text-sm text-amber-500">{price}</p>
        <Link href={storeUrl!} target="_blank" rel="noopener noreferrer">
          <Button className="w-full rounded-full bg-amber-500 text-white hover:bg-amber-600">
            詳細を見る
          </Button>
        </Link>
      </div>
    </div>
  );
}
