import { Button } from '@shared/index';

import { Container } from '@landing-page/shared';

export function Cohort() {
  return (
    <Container
      as='section'
      className='bg relative grid h-screen place-items-center overflow-hidden text-white'
      variant='outer'
    >
      <Container>
        <button disabled className='cursor-not-allowed' type='button'>
          ✦ COHORT II
        </button>

        <h1>Become an Industry-Ready DevOps Expert</h1>
        <p>
          Dive into the dynamic world of cybersecurity with TSR
          Learning. Whether you&apos;re starting out or scaling up,
          our course is crafted to turn you into a skilled
          professional, ready to tackle today&apos;s cyber challenges.
        </p>

        <div>
          <Button variant='orange'>Join Cohort II</Button>
        </div>
      </Container>
    </Container>
  );
}
