'use client';

import TypingText from '@/app/components/TypingText/TypingText';
import { FC, useEffect, useState } from 'react';
import GlitchText from '@/app/components/GlitchText/GlitchText';
import { Section } from './Section';
import SequentialTyping from '../components/TypingText/SequentialTyping';

type LinkType = {
  name: string;
  section: Section;
};

const menuLinks: LinkType[] = [
  {
    name: 'About Me',
    section: 'about',
  },
  {
    name: 'Projects',
    section: 'projects',
  },
  {
    name: 'Skills',
    section: 'skills',
  },
  {
    name: 'Contact',
    section: 'contact',
  },
];

type MenuProps = {
  onSectionChange: (section: Section) => void;
};

const Menu: FC<MenuProps> = ({ onSectionChange }) => {
  const elements = menuLinks.map((link) => ({
    id: link.section,
    element: (
      <button 
        onClick={() => onSectionChange(link.section)} 
        className='text-left text-sm'
      >
        <TypingText text={link.name} />
      </button>
    ),
  }));

  return (
    <section className='m-2 flex flex-col text-sm'>
      <SequentialTyping 
        elements={elements} 
        delay={1000}
      />
    </section>
  );
};

export default Menu;
