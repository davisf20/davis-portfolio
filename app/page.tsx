'use client';

import Menu from '@/app/pageSections/menu/Menu';
import { TypingProvider } from './context/typing/TypingProvider';
import { Direction, Section, SectionComponent } from './pageSections/Section';
import { useState } from 'react';
import Header from './pageSections/Header';
import Footer from './pageSections/Footer';
import { menuLinks } from './pageSections/menu/menuConfig';
import About from './pageSections/sections/About';
import Projects from './pageSections/sections/Projects';
import Skills from './pageSections/sections/Skills';
import Contact from './pageSections/sections/Contact';

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
    <main className='uppercase'>
      <TypingProvider>
        <section className='m-5 flex h-screen flex-col border'>
          <Header />
          <div className='p-5'>{renderCurrentSection()}</div>
          <Footer
            currentSection={currentSection}
            onSectionChange={setCurrentSection}
            onNavigate={handleNavigation}
          />
        </section>
      </TypingProvider>
    </main>
  );
};

export default Home;
