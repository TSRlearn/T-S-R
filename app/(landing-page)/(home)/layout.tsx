import { ReactNode } from 'react';

import { Header } from '@landing-page/pages/home/layout/header';
import { Hero } from '@landing-page/pages/home/sections/hero';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <Hero />
      {children}
    </div>
  );
}

export default Layout;
