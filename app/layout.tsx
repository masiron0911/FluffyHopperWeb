import type { Metadata } from 'next';
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: '--font-m-plus-rounded',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    template: '%s | FluffyHopper',
    default: 'FluffyHopper',
  },
  description: 'FluffyHopperのオフィシャルサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mPlusRounded1c.variable} antialiased`}
      >
        <div className="min-h-screen bg-pink-50">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
