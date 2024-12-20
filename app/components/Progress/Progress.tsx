type ProgressProps = {
  title: string;
  value: number;
  max?: number;
};

const Progress = ({ title, value, max = 100 }: ProgressProps) => {
  return (
    <div className='flex flex-col gap-y-2 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-x-10'>
      <div className='font-bold'>{title}</div>
      <progress
        className='progress progress-accent w-56'
        value={value}
        max={max}
      ></progress>
    </div>
  );
};

export default Progress;
