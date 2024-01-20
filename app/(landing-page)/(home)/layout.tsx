import { ReactNode } from 'react';

import { Header } from '@landing-page/pages/home/layout/header';
import { Hero } from '@landing-page/pages/home/sections/hero';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className='relative min-h-[110dvh] bg-blue-100'>
        <Header />
        <Hero />
      </div>

      {children}
    </main>
  );
}

export default Layout;
