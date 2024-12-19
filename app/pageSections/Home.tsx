'use client';

import Menu from '@/app/pageSections/menu/Menu';
import { useState } from 'react';
import { NavigationHandlers, Section, SectionComponent } from './Section';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './Footer';
import Header from './Header';
import Contacts from './sections/Contacts';
import { useKeyboardNavigation } from '../components/KeyboardNavigation/useKeyboardNavigation';

const SectionComponents: SectionComponent = {
  menu: Menu,
  about: About,
  projects: Projects,
  skills: Skills,
  contacts: Contacts,
} as const;

const Home = () => {
  const [currentSection, setCurrentSection] = useState<Section>('menu');
  const [navigationHandlers, setNavigationHandlers] =
    useState<NavigationHandlers>();

  useKeyboardNavigation({
    onEscape: () => setCurrentSection('menu'),
    isEnabled: currentSection !== 'menu',
  });

  const renderCurrentSection = () => {
    if (currentSection === 'menu') {
      return (
        <Menu
          onSectionChange={setCurrentSection}
          onNavigationChange={setNavigationHandlers}
        />
      );
    }
    const Component = SectionComponents[currentSection];
    return <Component onNavigationChange={setNavigationHandlers} />;
  };

  return (
    <section className='flex min-h-[calc(100vh-2.5rem)] flex-col items-center justify-center gap-y-10 border-4 sm:gap-y-10 md:gap-y-20'>
      <Header title={currentSection} />
      <div className='flex flex-1 items-start justify-center'>
        <div className='h-full w-full max-w-4xl p-5'>
          {renderCurrentSection()}
        </div>
      </div>
      <Footer
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onNavigate={navigationHandlers}
      />
    </section>
  );
};

export default Home;
