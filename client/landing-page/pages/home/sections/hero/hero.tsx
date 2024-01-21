import Image from 'next/image';

import { Button } from '@shared';

import { Container } from '@landing-page/shared';

export function Hero() {
  return (
    <section>
      <Container className='items-center justify-between md:flex'>
        <div className='pt-10'>
          <h1 className='font-mont text-4xl font-normal text-orange-700 lg:text-6xl'>
            Unlock Your <br /> Potential{' '}
            <span className='text-dark-900'>with</span>
            <br /> Accessible <br />{' '}
            <span className='text-dark-900'>Tech Education</span>
          </h1>
          <p className='hero-description mb-5 mt-3 md:max-w-[26rem]'>
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
          alt='Grid'
          className='absolute left-1/2 top-1/2 h-full w-[80%] -translate-x-1/2 -translate-y-1/2'
          height={500}
          src='/images/hero-grid.png'
          width={700}
        />

        <Image
          alt='A student smiling'
          className='hero-image right-0 top-0 w-full  rounded-r-[40px] md:absolute md:h-[600px] md:max-w-[500px]'
          height={500}
          src='/images/hero.webp'
          width={550}
        />
      </Container>
    </section>
  );
}
