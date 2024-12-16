'use client';

import TypingText from '@/app/components/TypingText/TypingText';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import GlitchText from '@/app/components/GlitchText/GlitchText';

type LinkType = {
  name: string;
  href: string;
};

const menuLinks: LinkType[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About Me',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const Header: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < menuLinks.length - 1) {
      const timer = setTimeout(
        () => setActiveIndex(activeIndex + 1),
        calculateTotalTypingTime(menuLinks[activeIndex])
      );
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  function calculateTotalTypingTime(link: LinkType) {
    const speed = 100;
    return link.name.length * speed;
  }

  return (
    <header className='m-5 h-screen border'>
      <div className='flex flex-col items-center'>
        <GlitchText text={'Hello'} />
      </div>

      <div className='m-2 flex flex-col text-sm'>
        {menuLinks.map((link: LinkType, index) => {
          if (index <= activeIndex) {
            return (
              <Link key={link.name} href={link.href}>
                <TypingText text={link.name} className='uppercase' />
              </Link>
            );
          }
          return null;
        })}
      </div>
    </header>
  );
};

export default Header;
