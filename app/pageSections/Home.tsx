'use client';

import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contacts from './sections/Contacts';
import useIsMobile from '../hooks/useIsMobile';

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <section className='grid grid-cols-2 items-start gap-x-5 gap-y-5'>
          <About className='col-span-2' />
          <Projects className='col-span-1' />
          <div className='sticky top-5 col-span-1 flex flex-col gap-y-5'>
            <Skills />
            <Contacts />
          </div>
        </section>
      ) : (
        <section className='flex flex-col items-center gap-y-5'>
          <About />
          <Projects />
          <Skills />
          <Contacts />
        </section>
      )}
    </>
  );
};

export default Home;
