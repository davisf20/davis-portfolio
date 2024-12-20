import { FC, ReactNode } from 'react';

type CardProps = {
  title: string;
  description: string | ReactNode;
  upperElement?: ReactNode;
  lowerElement?: ReactNode;
  tags?: string[];
};

const Card: FC<CardProps> = ({
  title,
  description,
  upperElement,
  lowerElement,
  tags,
}) => {
  return (
    <div className='card border-tertiary bg-secondary w-full max-w-[500px] border-2 shadow-xl'>
      <div className='card-body'>
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
        <div className='text-quaternary whitespace-pre-line'>{description}</div>
        {lowerElement}
      </div>
    </div>
  );
};

export default Card;
