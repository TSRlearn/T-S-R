import Image from 'next/image';

import { cn } from '@shared/index';

type CardType = {
  src: string;
  title: string;
};

type CourseType = {
  content: CardType[];
  type: string;
};

const Courses: CourseType[] = [
  {
    type: 'Courses',
    content: [
      {
        src: 'course.png',
        title: 'DevOps Essentials: From Automation to Integration',
      },
      {
        src: 'course.png',
        title: 'Cloud Computing Fundamentals: AWS, Azure, and GCP',
      },
      {
        src: 'course.png',
        title: 'Data Science and Analytics: The Complete Guide',
      },
      {
        src: 'course.png',
        title: 'DevOps Essentials: From Automation to Integration',
      },
    ],
  },
  {
    type: 'Cohort',
    content: [
      {
        src: 'course.png',
        title: 'DevOps Essentials: From Automation to Integration',
      },
      {
        src: 'course.png',
        title: 'Cloud Computing Fundamentals: AWS, Azure, and GCP',
      },
      {
        src: 'course.png',
        title: 'Data Science and Analytics: The Complete Guide',
      },
      {
        src: 'course.png',
        title: 'DevOps Essentials: From Automation to Integration',
      },
    ],
  },
];

function Card({ src, title }: CardType) {
  return (
    <div className='grid max-w-80 cursor-pointer grid-cols-[70px_1fr] items-center gap-1 rounded-md bg-gray-100 p-3 hover:bg-gray-200'>
      {' '}
      <Image
        alt='load'
        height={50}
        src={`/images/${src}`}
        width={60}
      />
      <h4 className='line-clamp-2 font-mont font-normal leading-6 !text-black'>
        {title}
      </h4>
    </div>
  );
}

function Dropdown() {
  return (
    <article className='grid grid-cols-2 gap-4 rounded-xl p-7'>
      {Courses.map(({ content, type }, idx) => (
        <div key={type} className='items-center gap-1'>
          <h3 className='mb-3 font-mont text-lg font-normal leading-6'>
            {type} →
          </h3>
          <div
            className={cn(
              'grid gap-y-4 gap-x-5',
              idx === 0 && 'border-e-2 pr-5 border-gray-300',
            )}
          >
            {content.map(({ src, title }) => (
              <Card key={title} src={src} title={title} />
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default Dropdown;
