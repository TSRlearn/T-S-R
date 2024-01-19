import type { Metadata } from 'next';
import React from 'react';

import { Mont, plusJakarta } from './font';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${plusJakarta.className} ${Mont.variable}`}>
        {children}
      </body>
    </html>
  );
}
