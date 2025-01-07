import { ReactNode } from 'react';

type ProgressProps = {
  title: string | ReactNode;
  value: number;
  max?: number;
};

const Progress = ({ title, value, max = 100 }: ProgressProps) => {
  return (
    <div className='flex flex-col gap-y-2 md:grid md:grid-cols-[auto_1fr] md:items-center md:justify-between md:gap-x-10'>
      <div className='text-left'>{title}</div>
      <div className='flex md:justify-end'>
        <progress
          className='progress progress-accent w-56'
          value={value}
          max={max}
        ></progress>
      </div>
    </div>
  );
};

export default Progress;
