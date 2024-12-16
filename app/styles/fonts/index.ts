import { Pixelify_Sans } from 'next/font/google';

import localFont from 'next/font/local';

export const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-pixelify'
});

export const pixeled = localFont({
  src: './files/Pixeled.ttf',
  variable: '--font-pixeled'
});
