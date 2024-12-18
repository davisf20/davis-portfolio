'use client';

import Menu from '@/app/pageSections/menu/Menu';
import { useEffect, useState } from 'react';
import { Direction, NavigationHandlers, Section } from './Section';
import About from './sections/About';
import { SectionComponent } from './Section';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import { menuLinks } from './menu/menuConfig';
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
    <section className='flex h-full flex-col items-center justify-center gap-y-20 border-4'>
      <Header />
      <div className='flex flex-1 items-center justify-center'>
        <div className='h-full w-full max-w-2xl p-5'>
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
