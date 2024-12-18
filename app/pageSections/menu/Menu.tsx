'use client';

import TypingText from '@/app/components/TypingText/TypingText';
import { FC, useEffect, useMemo, useState } from 'react';
import { MenuProps } from '../Section';
import SequentialTyping, {
  TypingElement,
} from '../../components/TypingText/SequentialTyping';
import { menuLinks } from './menuConfig';
import { useKeyboardNavigation } from '@/app/components/KeyboardNavigation/useKeyboardNavigation';

const Menu: FC<MenuProps> = ({ onSectionChange, onNavigationChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlers = useMemo(
    () => ({
      onUp: () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev)),
      onDown: () =>
        setSelectedIndex((prev) =>
          prev < menuLinks.length - 1 ? prev + 1 : prev
        ),
      onEnter: () => onSectionChange(menuLinks[selectedIndex].section),
    }),
    [selectedIndex, onSectionChange]
  );

  useEffect(() => {
    onNavigationChange?.(handlers);
    return () => onNavigationChange?.(undefined);
  }, [handlers, onNavigationChange]);

  useKeyboardNavigation(handlers);

  const elements: TypingElement[] = [
    {
      id: 'subtitle',
      element: (
        <div className='mb-20'>
          <TypingText text='Hi, I am Davis, wellcome to my portfolio :)' />
        </div>
      ),
    },
  ].concat(
    menuLinks.map((link, index) => ({
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
    }))
  );

  return (
    <section className='m-2 flex flex-col gap-y-2 text-sm'>
      <SequentialTyping elements={elements} delay={500} />
    </section>
  );
};

export default Menu;
