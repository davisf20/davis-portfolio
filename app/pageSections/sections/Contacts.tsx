import SequentialTyping, {
  TypingElement,
} from '@/app/components/TypingText/SequentialTyping';
import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import { FC, useEffect, useMemo, useState } from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { useKeyboardNavigation } from '@/app/components/KeyboardNavigation/useKeyboardNavigation';

const EmailIcon = () => (
  <svg
    className='h-6 w-6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >
    <path
      d='M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z'
      fill='currentColor'
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    className='h-6 w-6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >
    <path
      d='M6 6V4H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2v2h-2v2H8V6H6Zm2 6v-2h8v2h2V6h2v12h-2v2h-2v-4h-2v4h-4v-4H6v2h2v2H6v-2H4v-2h2v-2H4V6h2v6h2Z'
      fill='currentColor'
    />
  </svg>
);

const Contacts: FC<SectionProps> = ({ onNavigationChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSubtitleComplete, setIsSubtitleComplete] = useState(false);

  const links = useMemo(
    () => [
      { id: 'email', href: 'mailto:davis.fusco.20@gmail.com' },
      { id: 'linkedin', href: 'https://www.linkedin.com/in/davis-fusco' },
      { id: 'github', href: 'https://github.com/davisf20' },
    ],
    []
  );

  const handlers = useMemo(
    () => ({
      onUp: () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev)),
      onDown: () =>
        setSelectedIndex((prev) => (prev < links.length - 1 ? prev + 1 : prev)),
      onEnter: () => {
        const link = links[selectedIndex];
        if (link) {
          window.open(link.href, '_blank');
        }
      },
    }),
    [selectedIndex, links]
  );

  useEffect(() => {
    onNavigationChange?.(handlers);
    return () => onNavigationChange?.(undefined);
  }, [handlers, onNavigationChange]);

  useKeyboardNavigation(handlers);

  const linkElements: TypingElement[] = [
    {
      id: 'email',
      element: (
        <div className='flex items-center gap-x-2 text-2xs'>
          {selectedIndex === 0 ? (
            <div className='h-6 w-6'>
              <svg viewBox='0 0 24 24'>
                <path
                  d='M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z'
                  fill='currentColor'
                />
              </svg>
            </div>
          ) : (
            <div className='h-6 w-6' />
          )}
          <EmailIcon />
          <a href='mailto:davis.fusco.20@gmail.com' className='hover:underline'>
            <TypingText text='davis.fusco.20@gmail.com' />
          </a>
        </div>
      ),
    },
    {
      id: 'linkedin',
      element: (
        <div className='flex items-center gap-x-2 text-2xs'>
          {selectedIndex === 1 ? (
            <div className='h-6 w-6'>
              <svg viewBox='0 0 24 24'>
                <path
                  d='M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z'
                  fill='currentColor'
                />
              </svg>
            </div>
          ) : (
            <div className='h-6 w-6' />
          )}
          <CiLinkedin className='h-6 w-6' />
          <a
            href='https://www.linkedin.com/in/davis-fusco'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            <TypingText text='LinkedIn' />
          </a>
        </div>
      ),
    },
    {
      id: 'github',
      element: (
        <div className='flex items-center gap-x-2 text-2xs'>
          {selectedIndex === 2 ? (
            <div className='h-6 w-6'>
              <svg viewBox='0 0 24 24'>
                <path
                  d='M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z'
                  fill='currentColor'
                />
              </svg>
            </div>
          ) : (
            <div className='h-6 w-6' />
          )}
          <GithubIcon />
          <a
            href='https://github.com/davisf20'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            <TypingText text='GitHub' />
          </a>
        </div>
      ),
    },
  ];

  return (
    <section className='flex flex-col items-center gap-y-10'>
      <div className='text-center text-2xs underline'>
        <TypingText
          text='Here is how you can reach me:'
          onComplete={() => setIsSubtitleComplete(true)}
        />
      </div>
      <div className='w-full'>
        {isSubtitleComplete && (
          <SequentialTyping elements={linkElements} delay={500} />
        )}
      </div>
    </section>
  );
};

export default Contacts;
