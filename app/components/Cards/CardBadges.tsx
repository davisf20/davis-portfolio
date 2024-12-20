import { FC } from 'react';
import Progress from '../Progress/Progress';

const badgeColors: Record<number, string> = {
  0: 'badge-success',
  1: 'badge-warning',
  2: 'badge-error',
  3: 'badge-info',
};

export type CardBadgesElement = {
  title: string;
  tags: string[];
};

export type ProgressElement = {
  title: string;
  bars: {
    text: string;
    value: number;
    max?: number;
  }[];
};

type CardBadgesProps = {
  title: string;
  elements: (CardBadgesElement | ProgressElement)[];
};

const CardBadges: FC<CardBadgesProps> = ({ title, elements }) => {
  return (
    <div className='card bg-base-100 border-quaternary max-w-[500px] border-2 shadow-xl'>
      <div className='card-body flex flex-col gap-y-5'>
        <h2 className='card-title'>{title}</h2>
        {elements.map((element, elementIndex) =>
          'tags' in element ? (
            <div key={elementIndex} className='card-actions flex flex-col'>
              <div className='text-quaternary'>{element.title}</div>
              <div className='flex flex-wrap gap-2'>
                {element.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className={`badge ${badgeColors[elementIndex]}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div key={elementIndex} className='flex flex-col gap-2'>
              <div className='text-quaternary'>{element.title}</div>
              {element.bars.map((bar, barIndex) => (
                <Progress
                  key={barIndex}
                  title={bar.text}
                  value={bar.value}
                  max={bar.max}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardBadges;
