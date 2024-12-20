import { FC } from 'react';

type CardBadgesProps = {
  title: string;
  tags: string[];
};

const CardBadges: FC<CardBadgesProps> = ({ title, tags }) => {
  return (
    <div className='card bg-base-100 border-quaternary w-[500px] border-2 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='card-actions justify-end'>
          {tags.map((tag) => (
            <div className='badge badge-secondary' key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBadges;
