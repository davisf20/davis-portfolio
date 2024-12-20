import { FC } from 'react';

type TimelineProps = {
  elements: {
    date: string;
    description: string;
  }[];
};

const Timeline: FC<TimelineProps> = ({ elements }) => {
  return (
    <ul className='timeline max-md:timeline-vertical text-sm'>
      {elements.map((element, index) => (
        <li key={index}>
          {index > 0 && <hr className='bg-tertiary' />}
          <div className='timeline-start'>{element.date}</div>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end timeline-box bg-tertiary'>
            {element.description}
          </div>
          {index < elements.length - 1 && <hr className='bg-tertiary' />}
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
