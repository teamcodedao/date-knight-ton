import type {Metadata} from 'next';
import {Gluten} from 'next/font/google';
import localFont from 'next/font/local';
import clsx from 'clsx';
import './globals.css';

const font = Gluten({
  subsets: ['latin'],
  display: 'swap',
});

const knightFont = localFont({
  src: './type_knight.ttf',
  variable: '--knight-font',
});

export const metadata: Metadata = {
  title: 'Date Knight',
  description: 'Date Knight',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(font.className, knightFont.variable)}>
        {children}
      </body>
    </html>
  );
}
