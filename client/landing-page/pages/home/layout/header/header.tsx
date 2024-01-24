'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button, Logo, cn } from '@shared';

import { Container } from '@landing-page/shared';

import { HeaderNav, HeaderNavProp } from '../../data';
import Dropdown from './dropdown';

const menu = {
  open: {
    scale: 1,
    transition: {
      duration: 0.65,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function NavLink({ navlink }: { navlink: HeaderNavProp[] }) {
  const [isShow, setIsShow] = useState(false);
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
                <div
                  onFocus={() => setIsShow(true)}
                  onMouseEnter={() => setIsShow(true)}
                  onMouseLeave={() => setIsShow(false)}
                  onMouseOver={() => setIsShow(true)}
                >
                  <button type='button'>{label}</button>
                  <AnimatePresence>
                    <motion.div
                      animate={isShow ? 'open' : 'closed'}
                      className='fixed left-14 top-20 !z-50 w-[700px] !bg-white'
                      initial='closed'
                      style={{ originX: 0.6 }}
                      variants={menu}
                    >
                      {isShow && <Dropdown />}
                    </motion.div>
                  </AnimatePresence>
                </div>
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
      className='relative z-10 flex items-center justify-between px-4 py-6'
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
