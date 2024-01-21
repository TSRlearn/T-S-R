'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@shared';

import { Container } from '@landing-page/shared';

const CardItem = [
  {
    title: 'Fundamentals of Data Science',
    src: 'science.png',
    rotate: 'rotate(-8deg)',
    left: '0px',
  },
  {
    title: 'Fundamentals of Cyber Security',
    src: 'cyber.png',
    rotate: 'rotate(6deg)',
    left: '40px',
  },
];

function Card({
  left,
  radius = '8px',
  rotate,
  src,
  title,
}: {
  left: string;
  radius?: string;
  rotate: string;
  src: string;
  title: string;
}) {
  return (
    <div
      className='grid max-w-80 grid-cols-[70px_1fr] items-center gap-1 bg-white p-3 shadow-md'
      style={{
        transform: rotate,
        borderRadius: radius,
        marginLeft: left,
      }}
    >
      <Image
        alt='load'
        height={50}
        src={`/images/${src}`}
        width={60}
      />
      <h4 className='font-mont text-lg font-normal leading-6'>
        {title}
      </h4>
    </div>
  );
}

function RightSide({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='right-0 top-0 md:absolute'>
      <div className='relative'>
        <Image
          alt='A student smiling'
          className='hero-image w-full md:h-[600px]  md:max-w-[500px] md:rounded-r-[40px]'
          height={500}
          src='/images/hero.webp'
          width={550}
          onLoad={() => setIsShow(true)}
        />

        {isShow && (
          <ul className='absolute grid gap-4 max-md:bottom-0 md:left-0 md:top-[60%] md:-translate-x-1/2'>
            {CardItem.map((item) => (
              <li key={item.title}>
                <Card {...item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const [isShow, setIsShow] = useState(false);

  return (
    <section>
      <Container className='items-center justify-between md:flex'>
        <div className='pt-10'>
          <h1 className='font-mont text-4xl font-normal text-orange-700 lg:text-6xl'>
            Unlock Your <br /> Potential{' '}
            <span className='text-dark-900'>with</span>
            <br /> Accessible{' '}
            <Image
              alt='line pointing to available courses'
              className='inline-block'
              height={90}
              src='/icons/line.svg'
              width={170}
            />{' '}
            <br />{' '}
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

        <RightSide isShow={isShow} setIsShow={setIsShow} />
      </Container>
    </section>
  );
}
