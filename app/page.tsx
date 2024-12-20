'use client';

import Footer from './pageSections/Footer';
import Home from './pageSections/Home';

const HomePage = () => (
  <main className='flex min-h-screen flex-col items-center justify-center gap-y-10 p-5 md:p-20'>
    <Home />
    <Footer />
  </main>
);

export default HomePage;
