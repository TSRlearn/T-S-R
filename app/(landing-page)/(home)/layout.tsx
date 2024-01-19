import { ReactNode } from 'react';
import Header from '@/client/landing-page/layout/header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
