'use client';

import Link from 'next/link';
import { Instagram, X, ShoppingBag } from '@mui/icons-material';
import { Button } from '@/components/ui/button';

type Props = {
  textColor: string;
  textColorHover: string;
  fontSize: number;
};

export function SocialIcons({ textColor, textColorHover, fontSize }: Props) {
  return (
    <>
      <Link
        href="https://x.com/FluffyHopper_JP"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full bg-white ${textColor} hover:bg-amber-100 hover:${textColorHover}`}
        >
          <X sx={{ fontSize: fontSize }} />
        </Button>
      </Link>
      <Link
        href="https://www.instagram.com/fluffyhopperjp/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full bg-white ${textColor} hover:bg-amber-100 hover:${textColorHover}`}
        >
          <Instagram sx={{ fontSize: fontSize }} />
        </Button>
      </Link>
      <Link
        href="https://fluffyhopper.base.ec/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ショップ"
      >
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full bg-white ${textColor} hover:bg-amber-100 hover:${textColorHover}`}
        >
          <ShoppingBag sx={{ fontSize: fontSize }} />
        </Button>
      </Link>
    </>
  );
}
