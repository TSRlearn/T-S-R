import Image from 'next/image';
import Link from 'next/link';

function Logo({ src }: { src: string }) {
  return (
    <Link href='/'>
      <Image alt='tsr logo' height={45} src={src} width={112} />
    </Link>
  );
}

export default Logo;
