import React, { FC, ReactNode } from 'react';
import KdbExternalLink from '../Kdbs/KdbExternalLink';

type element = {
  title: string | ReactNode;
  description: string | ReactNode;
  tags: string[];
  link?: string;
};

type CardTextBadgeProps = {
  title: string;
  description: string | ReactNode;
  elements?: element[];
};

const CardTextBadge: FC<CardTextBadgeProps> = ({
  title,
  description,
  elements,
}) => {
  return (
    <div className='card border-tertiary bg-secondary max-w-[500px] border-2 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='text-quaternary mb-5'>{description}</div>
        {elements &&
          elements.map((element, index) => (
            <div key={index} className='flex flex-col gap-y-5'>
              <hr />
              <div className='mb-5 flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <div className='card-title text-lg'>{element.title}</div>
                  {element.link && <KdbExternalLink link={element.link} />}
                </div>
                <div className='text-quaternary'>{element.description}</div>
                <div className='card-actions justify-end'>
                  {element.tags.map((tag) => (
                    <div className='badge badge-outline' key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardTextBadge;
