'use client';

import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contacts from './sections/Contacts';

const Home = () => {
  return (
    <section className='flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:items-start md:gap-x-5'>
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </section>
  );
};

export default Home;
