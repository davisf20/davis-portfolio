import CardBadges, {
  CardBadgesElement,
} from '@/app/components/Cards/CardBadges';
import { ProgressElement } from '@/app/components/Cards/CardBadges';
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
      { text: 'Italian', value: 100 },
      { text: 'English', value: 70 },
    ],
  },
];

const Skills = () => {
  return <CardBadges title='Skills' elements={skills} />;
};

export default Skills;
