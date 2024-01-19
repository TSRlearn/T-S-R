import Logo from '@shared/components/elements/logo';

import Container from '@landing-page/shared/layout/container';

import { HeaderNav } from '../../data';

function NavLink() {
  return (
    <nav>
      <ul className='flex items-center gap-10'>
        {HeaderNav.map(({ label, link }) => (
          <li key={label}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <Container className='flex items-center justify-between'>
      <div className='flex items-center gap-10'>
        <Logo src='/icons/tsr-logo.svg' />
        <NavLink />
      </div>

      <button type='button'>Enrol Now</button>
    </Container>
  );
}
