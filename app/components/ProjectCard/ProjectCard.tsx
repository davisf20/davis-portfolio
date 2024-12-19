import React, { FC } from 'react';
import { Project } from './projectsConfig';

type ProjectCardProps = {
  project: Project;
  isSelected?: boolean;
  onHover?: () => void;
};

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  isSelected,
  onHover,
}) => {
  return (
    <a
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={onHover}
      className={`flex flex-col items-center justify-center gap-y-8 border-4 px-6 py-8 ${
        isSelected
          ? 'scale-105 border-blue-400 transition-transform'
          : 'border-white'
      }`}
    >
      <div className='h-10 w-10 text-3xl'>{project.icon}</div>
      <h3 className=''>{project.title}</h3>
      <p className='text-xs leading-relaxed text-gray-400'>
        {project.description}
      </p>
      <div className='flex flex-wrap gap-2'>
        {project.tags.map((tag, index) => (
          <div key={index} className='text-3xs bg-gray-700 px-2 py-1'>
            {tag}
          </div>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
