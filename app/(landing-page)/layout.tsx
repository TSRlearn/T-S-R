import { ReactNode } from 'react';

import Footer from '@landing-page/shared/layout/footer';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
