'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, Logo, cn } from '@shared';

import { Container } from '@landing-page/shared';

import { HeaderNav, HeaderNavProp } from '../../data';

function NavLink({ navlink }: { navlink: HeaderNavProp[] }) {
  const pathname = usePathname();
  const getNavLink = navlink || [];

  return (
    <nav>
      <ul className='hidden items-center gap-10 md:flex'>
        {getNavLink.map(({ label, route }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;

          return (
            <li
              key={label}
              className={cn(
                isActive ? 'text-blue-700' : 'text-black',
                'font-mont font-normal hover:text-blue-700 focus:text-normal-700',
              )}
            >
              {label === 'Courses' ? (
                <button type='button'>{label}</button>
              ) : (
                <Link href={route}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <Container
      as='header'
      className='relative z-10 flex items-center justify-between py-6'
    >
      <div className='flex items-center gap-10'>
        <Logo src='/icons/tsr-logo.svg' />
        <NavLink navlink={HeaderNav} />
      </div>

      <Button size='sm' variant='orange'>
        Enrol Now
      </Button>
    </Container>
  );
}
