'use client';

import Menu from '@/app/pageSections/menu/Menu';
import { useEffect, useState } from 'react';
import { Direction, Section } from './Section';
import About from './sections/About';
import { SectionComponent } from './Section';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import { menuLinks } from './menu/menuConfig';
import Footer from './Footer';
import Header from './Header';

const SectionComponents: SectionComponent = {
  menu: Menu,
  about: About,
  projects: Projects,
  skills: Skills,
  contact: Contact,
} as const;

const Home = () => {
  const [currentSection, setCurrentSection] = useState<Section>('menu');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavigation = (direction: Direction) => {
    switch (direction) {
      case 'UP':
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case 'DOWN':
        setSelectedIndex((prev) =>
          prev < menuLinks.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ENTER':
        setCurrentSection(menuLinks[selectedIndex].section);
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentSection === 'menu') {
        switch (event.key) {
          case 'ArrowUp':
            handleNavigation('UP');
            break;
          case 'ArrowDown':
            handleNavigation('DOWN');
            break;
          case 'Enter':
            handleNavigation('ENTER');
            break;
        }
      } else if (event.key === 'Escape') {
        setCurrentSection('menu');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, selectedIndex]);

  const renderCurrentSection = () => {
    if (currentSection === 'menu') {
      return (
        <Menu
          onSectionChange={setCurrentSection}
          selectedIndex={selectedIndex}
        />
      );
    }
    const Component = SectionComponents[currentSection];
    return <Component />;
  };

  return (
    <section className='flex h-full flex-col gap-y-20 border-4'>
      <Header />
      <div className='flex flex-1 items-center justify-center'>
        <div className='h-full w-full max-w-2xl p-5'>
          {renderCurrentSection()}
        </div>
      </div>
      <Footer
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onNavigate={handleNavigation}
      />
    </section>
  );
};

export default Home;
