import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import SequentialTyping from '@/app/components/TypingText/SequentialTyping';
import { FC } from 'react';

const PinIcon = () => (
  <svg
    className='h-6 w-6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >
    <path
      d='M7 2h10v2H7V2zM5 6V4h2v2H5zm0 8H3V6h2v8zm2 2H5v-2h2v2zm2 2H7v-2h2v2zm2 2H9v-2h2v2zm2 0v2h-2v-2h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0-8h2v8h-2V6zm0 0V4h-2v2h2zm-5 2h-4v4h4V8z'
      fill='currentColor'
    />
  </svg>
);

const About: FC<SectionProps> = ({}) => {
  const elements = [
    {
      id: 'content1',
      element: (
        <div className='text-2xs'>
          <TypingText
            text={`Hi, I am Davis Fusco, a computer scientist based near Bellinzona, Switzerland.\nI currently work as a Full-Stack Developer, a role that allows me to combine my passion for software development with the skills acquired during my education and work experiences.\nI specialize in creating and managing web applications, dealing with both frontend and backend.`}
          />
        </div>
      ),
    },
    {
      id: 'content2',
      element: (
        <div className='text-2xs'>
          <TypingText
            text={`I am a precise and curious person, always ready to learn new skills.\nI enjoy working in a team and, even when faced with challenges, I am committed to finding effective solutions.\nMy goal is to continue to grow professionally, contributing my work to the success of the projects in which I participate.`}
          />
        </div>
      ),
    },
  ];

  return (
    <section className='flex flex-col gap-y-5 leading-loose'>
      <SequentialTyping elements={elements} />
    </section>
  );
};

export default About;
