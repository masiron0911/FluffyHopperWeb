import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const urlRegex = /(https?:\/\/[^\s]+)/g;

type Props = {
  text: string;
};

const NewsText: React.FC<Props> = ({ text }) => {
  const parts = text.split(urlRegex);

  return (
    // Notice: tailwindのtext-lgで強制指定しているので注意
    <Typography component="div" variant="body1" className="!text-lg">
      {parts.map((part, index) =>
        urlRegex.test(part) ? (
          <Link key={index} href={part} target="_blank" rel="noopener noreferrer" underline="hover">
            {part}
          </Link>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </Typography>
  );
};

export { NewsText };
