import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import SequentialTyping from '@/app/components/TypingText/SequentialTyping';
import { FC } from 'react';

const About: FC<SectionProps> = ({}) => {
  const elements = [
    {
      id: 'title',
      element: (
        <div className='mb-10 flex justify-center'>
          <TypingText text='About Me' />
        </div>
      ),
    },
    {
      id: 'content',
      element: (
        <div className='text-2xs'>
          <TypingText text='I am a software engineer with a passion for creating user-friendly and efficient applications. I am a quick learner and I am always looking to expand my skills.' />
        </div>
      ),
    },
  ];

  return (
    <section className='relative'>
      <SequentialTyping elements={elements} />
    </section>
  );
};

export default About;
