import Image from 'next/image';

import Button from '@shared/components/elements/button';

export function Hero() {
  return (
    <section className='md:flex items-center justify-between'>
      <div>
        <h1 className='font-mont text-6xl font-normal text-orange-700'>
          Unlock Your <br /> Potential{' '}
          <span className='text-dark-900'>with</span>
          <br /> Accessible <br />{' '}
          <span className='text-dark-900'>Tech Education</span>
        </h1>
        <p>
          Gain in-demand skills with TSR Learning, evolving from
          novice to industry-ready expert, no degree or prior tech
          experience required.
        </p>

        <Button
          className='flex gap-2 rounded-[41px] font-normal'
          size='md'
        >
          Discover Courses{' '}
          <Image
            alt='load'
            height={20}
            src='/icons/circle.svg'
            width={20}
          />
        </Button>
      </div>

      <Image
        alt='a student smiling'
        src='/images/hero-lady.webp'
        width={500}
        height={500}
        className='md:absolute right-0 top-0'
      />
    </section>
  );
}
