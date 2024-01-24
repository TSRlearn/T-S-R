import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';

export function Cohort() {
  return (
    <Container
      as='section'
      className='bg relative grid min-h-screen place-items-center overflow-hidden text-center text-white'
      variant='outer'
    >
      <Container>
        <button
          disabled
          className='boder-1 boder-solid mb-5 cursor-not-allowed rounded-[30px] border-gray-300 bg-white px-5 py-1 text-lg text-blue-700'
          type='button'
        >
          ✦ COHORT II
        </button>

        <h1 className='mx-auto font-mont md:max-w-[900px] lg:text-[80px] lg:leading-[75px]'>
          Become an Industry-Ready{' '}
          <span className='text-orange-700'>DevOps</span> Expert
        </h1>
        <p className='mx-auto mt-4 max-w-[700px] text-lg'>
          Dive into the dynamic world of cybersecurity with TSR
          Learning. Whether you&apos;re starting out or scaling up,
          our course is crafted to turn you into a skilled
          professional, ready to tackle today&apos;s cyber challenges.
        </p>

        <div className='mt-10'>
          <Button className='text-lg' size='lg' variant='orange'>
            Join Cohort II
          </Button>
        </div>
      </Container>
    </Container>
  );
}
