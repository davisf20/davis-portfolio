import SkillsList from '@/app/components/SkillsList/SkillsList';
import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import { FC } from 'react';

const Skills: FC<SectionProps> = ({}) => {
  return (
    <>
      <TypingText text='Skills' />
      <SkillsList />
    </>
  );
};

export default Skills;
