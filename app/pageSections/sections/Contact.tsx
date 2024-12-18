import SequentialTyping from '@/app/components/TypingText/SequentialTyping';
import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import { FC } from 'react';
import { CiLinkedin } from 'react-icons/ci';

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

const Contact: FC<SectionProps> = ({}) => {
  const elements = [
    {
      id: 'title',
      element: (
        <div className='mb-10 flex justify-center'>
          <TypingText text='Contact' />
        </div>
      ),
    },
    {
      id: 'content',
      element: (
        <div className='mb-5 text-2xs underline'>
          <TypingText text='Here is how you can reach me:' />
        </div>
      ),
    },
    {
      id: 'email',
      element: (
        <div className='flex items-center gap-x-2 text-2xs'>
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
    <section className='relative flex flex-col gap-y-2'>
      <SequentialTyping elements={elements} delay={500} />
    </section>
  );
};

export default Contact;
