'use client';

import { TypingProvider } from './context/typing/TypingProvider';
import Home from './pageSections/Home';

const HomePage = () => (
  <main className='min-h-screen p-5 uppercase'>
    <TypingProvider>
      <Home />
    </TypingProvider>
  </main>
);

export default HomePage;
