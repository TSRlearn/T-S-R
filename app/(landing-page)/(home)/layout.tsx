import { ReactNode } from 'react';

import { Header, Hero } from '@landing-page/pages/home';
import { Container } from '@landing-page/shared';

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Container
        as='div'
        className='relative bg-blue-100 !px-0 md:min-h-[118dvh]'
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
