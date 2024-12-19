import SkillsList from '@/app/components/SkillsList/SkillsList';
import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import { FC } from 'react';
import SequentialTyping from '@/app/components/TypingText/SequentialTyping';

const hardSkills = [
  { name: 'JavaScript', icon: '📜' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Debugging', icon: '🔧' },
];

const softSkills = [
  { name: 'Communication', icon: '🗣️' },
  { name: 'Teamwork', icon: '👥' },
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Adaptability', icon: '🔄' },
];

const Skills: FC<SectionProps> = ({}) => {
  const elements = [
    {
      id: 'hardSkills',
      element: <SkillsList title='HARD SKILLS' skills={hardSkills} />,
    },
    {
      id: 'softSkills',
      element: <SkillsList title='SOFT SKILLS' skills={softSkills} />,
    },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <SequentialTyping elements={elements} delay={1000} />
    </div>
  );
};

export default Skills;
