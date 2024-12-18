'use client';

import TypingText from '@/app/components/TypingText/TypingText';
import { FC } from 'react';
import { Section } from '../Section';
import SequentialTyping from '../../components/TypingText/SequentialTyping';
import { menuLinks } from './menuConfig';

type MenuProps = {
  onSectionChange: (section: Section) => void;
  selectedIndex: number;
};

const Menu: FC<MenuProps> = ({ onSectionChange, selectedIndex }) => {
  const elements = menuLinks.map((link, index) => ({
    id: link.section,
    element: (
      <div className='grid grid-cols-[24px_1fr] items-center gap-x-2'>
        <div className='h-6 w-6'>
          {selectedIndex === index && (
            <svg viewBox='0 0 24 24'>
              <path
                d='M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z'
                fill='currentColor'
              />
            </svg>
          )}
        </div>
        <button
          onClick={() => onSectionChange(link.section)}
          className='text-left text-sm'
        >
          <TypingText text={link.name} />
        </button>
      </div>
    ),
  }));

  return (
    <section className='m-2 flex flex-col gap-y-2 text-sm'>
      <SequentialTyping elements={elements} delay={500} />
    </section>
  );
};

export default Menu;
