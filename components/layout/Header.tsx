'use client';

import Link from 'next/link';
import Image from 'next-image-export-optimizer';
import { Close, Menu, ChevronRight } from '@mui/icons-material';
// import { Button } from '@/components/ui/button';
import { Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcons } from '@/components/ui/SocialIcons';

export default function Header() {
  const fontWeight = 'font-medium';
  const textColor = 'text-amber-800';
  const textColorHover = 'text-amber-950';

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-amber-50 px-6 py-4 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/character_img/logo-clear.png"
          alt="FluffyHopper ロゴ"
          width={180}
          height={80}
          className="h-10 w-auto"
          basePath={process.env.NEXT_PUBLIC_BASE_PATH}
        />
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className={`${fontWeight} ${textColor} hover:${textColorHover}`}>
          ホーム
        </Link>
        <Link href="/characters" className={`${fontWeight} ${textColor} hover:${textColorHover}`}>
          キャラクター
        </Link>
        <Link href="/goods" className={`${fontWeight} ${textColor} hover:${textColorHover}`}>
          グッズ
        </Link>
      </nav>
      <div className="hidden gap-3 md:flex">
        <SocialIcons textColor={textColor} textColorHover={textColorHover} fontSize={20} />
      </div>

      {/* モバイル用メニューボタン */}
      <div className="md:hidden">
        <IconButton
          onClick={toggleDrawer}
          className="!hover:bg-amber-100 !hover:text-amber-950 !text-amber-800"
        >
          <AnimatePresence mode="wait" initial={false}>
            {drawerOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Close sx={{ fontSize: 40 }} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu sx={{ fontSize: 40 }} />
              </motion.div>
            )}
          </AnimatePresence>
        </IconButton>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        className="w-dvw"
        slotProps={{ paper: { sx: { top: '84px' } } }}
      >
        <div className="flex h-full w-screen flex-col gap-4 bg-amber-50 p-4">
          <Link
            href="/"
            onClick={toggleDrawer}
            className={`text-lg ${fontWeight} ${textColor} flex flex-row items-center gap-1`}
          >
            <ChevronRight sx={{ fontSize: 20 }} />
            ホーム
          </Link>
          <Link
            href="/characters"
            onClick={toggleDrawer}
            className={`text-lg ${fontWeight} ${textColor} flex flex-row items-center gap-1`}
          >
            <ChevronRight sx={{ fontSize: 20 }} />
            キャラクター
          </Link>
          <Link
            href="/goods"
            onClick={toggleDrawer}
            className={`text-lg ${fontWeight} ${textColor} flex flex-row items-center gap-1`}
          >
            <ChevronRight sx={{ fontSize: 20 }} />
            グッズ
          </Link>
          <div className="flex items-center justify-center gap-6 pt-12">
            <SocialIcons textColor={textColor} textColorHover={textColorHover} fontSize={24} />
          </div>
        </div>
      </Drawer>
    </header>
  );
}
