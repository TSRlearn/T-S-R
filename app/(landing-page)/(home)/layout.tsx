import { ReactNode } from 'react';

import { Header, Hero } from '@landing-page/pages/home';
import { Container } from '@landing-page/shared';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Container
        as='div'
        className='relative min-h-[109dvh] bg-blue-100'
        variant='outer'
      >
        <Header />
        <Hero />
      </Container>

      {children}
    </main>
  );
}

export default Layout;
