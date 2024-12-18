import { Section } from '../Section';

export type LinkType = {
  name: string;
  section: Section;
};

export const menuLinks: LinkType[] = [
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
    name: 'Contacts',
    section: 'contacts',
  },
];
