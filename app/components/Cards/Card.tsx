import { FC } from 'react';

type CardProps = {
  title: string;
  description: string;
  upperElement?: React.ReactNode;
  lowerElement?: React.ReactNode;
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
    <div className='card bg-base-100 border-quaternary w-full max-w-[500px] border-2 shadow-xl'>
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
        <p className='text-quaternary whitespace-pre-line'>{description}</p>
        {lowerElement}
      </div>
    </div>
  );
};

export default Card;
