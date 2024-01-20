'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@shared/components/elements/button';
import Logo from '@shared/components/elements/logo';
import { cn } from '@shared/lib/utils';

import Container from '@landing-page/shared/layout/container';

import { HeaderNav } from '../../data';

function NavLink() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex items-center gap-10'>
        {HeaderNav.map(({ label, route }) => {
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
    <Container className='flex items-center justify-between py-6'>
      <div className='flex items-center gap-10'>
        <Logo src='/icons/tsr-logo.svg' />
        <NavLink />
      </div>

      <Button size='sm' variant='yellow'>
        Enrol Now
      </Button>
    </Container>
  );
}
