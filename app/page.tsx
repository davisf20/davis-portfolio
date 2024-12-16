'use client';

import Menu from '@/app/pageSections/Menu';
import { TypingProvider } from './context/typing/TypingProvider';
import { Section } from './pageSections/Section';
import About from './pageSections/sections/About';
import { useState } from 'react';
import Projects from './pageSections/sections/Projects';
import Skills from './pageSections/sections/Skills';
import Contact from './pageSections/sections/Contact';
import Header from './pageSections/Header';

const SectionComponents: Record<Section, React.FC<{ onSectionChange: (section: Section) => void }>> = {
  menu: ({ onSectionChange }: { onSectionChange: (section: Section) => void }) => (
    <Menu onSectionChange={onSectionChange} />
  ),
  about: About,
  projects: Projects,
  skills: Skills,
  contact: Contact,
} as const;

const Home = () => {
  const [currentSection, setCurrentSection] = useState<Section>('menu');
  const CurrentSection = SectionComponents[currentSection];

  return (
    <main className='uppercase'>
      <TypingProvider>
        <section className='m-5 h-screen border'>
          <Header />
          <div className='flex-1 p-5'>
            <CurrentSection onSectionChange={setCurrentSection} />
          </div>
        </section>
      </TypingProvider>
    </main>
  );
}

export default Home;
