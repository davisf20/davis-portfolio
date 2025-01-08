import { FC, ReactNode } from 'react';

type CardProps = {
  title: string;
  description: string | ReactNode;
  upperElement?: ReactNode;
  lowerElement?: ReactNode;
  tags?: string[];
  className?: string;
};

const Card: FC<CardProps> = ({
  title,
  description,
  upperElement,
  lowerElement,
  tags,
  className,
}) => {
  return (
    <div
      className={`card w-full max-w-[500px] border-2 border-tertiary bg-secondary shadow-xl md:max-w-[1020px] ${className}`}
    >
      <div className='card-body flex flex-col gap-y-5'>
        <div className='flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-2'>
          <h2 className='card-title'>{title}</h2>
          {tags &&
            tags.map((tag) => (
              <div className='badge badge-primary' key={tag}>
                {tag}
              </div>
            ))}
        </div>
        {upperElement}
        <div className='whitespace-pre-line text-quaternary'>{description}</div>
        {lowerElement}
      </div>
    </div>
  );
};

export default Card;
