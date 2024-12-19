import type { Metadata, Viewport } from 'next';
import './globals.css';
import { pixeled } from './styles/fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://davisf.dev'),
  title: 'DAVIS',
  description: 'Davis Fusco - Full-Stack Developer',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Davis Fusco',
    'Full-Stack Developer',
    'Web Development',
    'React',
    'TypeScript',
    'Java',
  ],
  authors: [{ name: 'Davis Fusco' }],
  creator: 'Davis Fusco',
  publisher: 'Davis Fusco',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CH',
    siteName: 'Davis Fusco Portfolio',
    title: 'Davis',
    description: 'Davis Fusco - Full-Stack Developer',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${pixeled.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
