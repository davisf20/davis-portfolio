export type Section = 'menu' | 'about' | 'projects' | 'skills' | 'contacts';
export type Direction = 'UP' | 'DOWN' | 'ENTER';

export type NavigationHandlers = {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onEnter?: () => void;
};

export type MenuProps = {
  onSectionChange: (section: Section) => void;
  onNavigationChange?: (handlers: NavigationHandlers | undefined) => void;
};

export type SectionProps = {
  onNavigationChange?: (handlers: NavigationHandlers | undefined) => void;
};

export type SectionComponent = {
  menu: React.FC<MenuProps>;
  about: React.FC<SectionProps>;
  projects: React.FC<SectionProps>;
  skills: React.FC<SectionProps>;
  contacts: React.FC<SectionProps>;
};
