import React, { FC, ReactNode } from 'react';
import KdbExternalLink from '../Kdbs/KdbExternalLink';
import Carousel from '../Carousel/Carousel';

type element = {
  id?: string;
  title: string | ReactNode;
  description: string | ReactNode;
  tags: string[];
  link?: string;
  images?: string[];
};

type CardTextBadgeProps = {
  title: string;
  description: string | ReactNode;
  elements?: element[];
  className?: string;
};

const CardTextBadge: FC<CardTextBadgeProps> = ({
  title,
  description,
  elements,
  className,
}) => {
  return (
    <div
      className={`card max-w-[500px] border-2 border-tertiary bg-secondary shadow-xl ${className}`}
    >
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='mb-5 text-quaternary'>{description}</div>
        {elements &&
          elements.map((element, index) => (
            <div key={index} id={element.id} className='flex flex-col gap-y-5'>
              <hr />
              <div className='mb-5 flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <span className='card-title inline-flex items-center text-lg'>
                    {element.title}
                    {element.link && <KdbExternalLink link={element.link} />}
                  </span>
                </div>
                {element.images && <Carousel images={element.images} />}
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
