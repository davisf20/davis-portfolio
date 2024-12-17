export type Section = 'menu' | 'about' | 'projects' | 'skills' | 'contact';
export type Direction = 'UP' | 'DOWN' | 'ENTER';

export type SectionProps = {};

export type MenuProps = {
  onSectionChange: (section: Section) => void;
  selectedIndex: number;
};

export type SectionComponent = {
  menu: React.FC<MenuProps>;
  about: React.FC<SectionProps>;
  projects: React.FC<SectionProps>;
  skills: React.FC<SectionProps>;
  contact: React.FC<SectionProps>;
};
