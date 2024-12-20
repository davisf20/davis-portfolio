import { useKeyboardNavigation } from '@/app/components/KeyboardNavigation/useKeyboardNavigation';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';
import { projects } from '@/app/components/ProjectCard/projectsConfig';
import { SectionProps } from '@/app/pageSections/Section';
import { FC, useEffect, useMemo, useState } from 'react';

const Projects: FC<SectionProps> = ({ onNavigationChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handlers = useMemo(
    () => ({
      onLeft: () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev)),
      onRight: () =>
        setSelectedIndex((prev) =>
          prev < projects.length - 1 ? prev + 1 : prev
        ),
      onEnter: () => {
        const project = projects[selectedIndex];
        if (project) {
          window.open(project.link, '_blank');
        }
      },
    }),
    [selectedIndex]
  );

  useEffect(() => {
    onNavigationChange?.({
      onLeft: handlers.onLeft,
      onRight: handlers.onRight,
      onEnter: handlers.onEnter,
    });
    return () => onNavigationChange?.(undefined);
  }, [handlers, onNavigationChange]);

  useKeyboardNavigation(handlers);

  return (
    <section className='bg-black text-white'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isSelected={selectedIndex === index}
            onHover={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
