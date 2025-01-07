import CardBadges, {
  CardBadgesElement,
} from '@/app/components/Cards/CardBadges';
import { ProgressElement } from '@/app/components/Cards/CardBadges';
import { FC } from 'react';
import { LuBrain, LuCodeXml, LuLanguages } from 'react-icons/lu';

const skills: (CardBadgesElement | ProgressElement)[] = [
  {
    title: (
      <div className='flex items-center gap-x-2'>
        <LuCodeXml /> Hard Skills
      </div>
    ),
    tags: [
      'HTML, CSS & TS',
      'Java & Spring Boot',
      'SQL',
      'Python',
      'Git',
      'Docker',
      'TDD (Maven, Jest)',
      'React & NextJS',
      'NodeJS, NestJS & NextJS',
      'Web Development',
      'Data Analysis',
      'Machine Learning',
      'NLP',
    ],
  },
  {
    title: (
      <div className='flex items-center gap-x-2'>
        <LuBrain /> Soft Skills
      </div>
    ),
    tags: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'],
  },
  {
    title: (
      <div className='flex items-center gap-x-2'>
        <LuLanguages /> Languages
      </div>
    ),
    bars: [
      {
        text: (
          <>
            <span className='font-bold'>Italian</span>
            <span className='text-sm text-quaternary'> (Native)</span>
          </>
        ),
        value: 100,
      },
      {
        text: (
          <>
            <span className='font-bold'>English</span>
            <span className='text-sm text-quaternary'> (Professional)</span>
          </>
        ),
        value: 80,
      },
    ],
  },
];

type SkillsProps = {
  className?: string;
};

const Skills: FC<SkillsProps> = ({ className }) => {
  return <CardBadges title='Skills' elements={skills} className={className} />;
};

export default Skills;
