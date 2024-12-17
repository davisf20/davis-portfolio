import ProjectCard from '@/app/components/ProjectCard/ProjectCard';
import TypingText from '../../components/TypingText/TypingText';
import { SectionProps } from '@/app/pageSections/Section';
import { FC } from 'react';

const Projects: FC<SectionProps> = ({}) => {
  return (
    <>
      <TypingText text='Projects' />
      <ProjectCard />
    </>
  );
};

export default Projects;
