'use client';

import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next-image-export-optimizer';
import { detectImageFilepath } from '@/lib/strapi-client';

type Props = {
  content: BlocksContent;
};

export function NewsText({ content }: Props) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <Typography component="p" className="!text-lg">
            {children}
          </Typography>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <Typography variant="h1">{children}</Typography>;
            case 2:
              return <Typography variant="h2">{children}</Typography>;
            case 3:
              return <Typography variant="h3">{children}</Typography>;
            case 4:
              return <Typography variant="h4">{children}</Typography>;
            case 5:
              return <Typography variant="h5">{children}</Typography>;
            case 6:
              return <Typography variant="h6">{children}</Typography>;
            default:
              return <Typography variant="h1">{children}</Typography>;
          }
        },
        link: ({ children, url }) => (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              display: 'block', // 横幅いっぱいにする
              maxWidth: '100%', // 親幅に合わせる
              whiteSpace: 'nowrap', // 改行させない
              overflow: 'hidden', // はみ出た部分を隠す
              textOverflow: 'ellipsis', // 末尾に ... を表示
            }}
          >
            {children}
          </Link>
        ),
        image: ({ image }) => {
          return (
            <Image
              src={image.url ? detectImageFilepath(image.url) : '/placeholder.svg'}
              alt={image.name}
              width={image.width}
              height={image.height}
              basePath={process.env.NEXT_PUBLIC_BASE_PATH}
            />
          );
        },
      }}
    />
  );
}
