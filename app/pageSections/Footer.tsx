import ArrowButton from '../components/Buttons/ArrowButton';
import BackButton from '../components/Buttons/BackButton';
import EnterButton from '../components/Buttons/EnterButton';
import TypingText from '../components/TypingText/TypingText';
import { Section, Direction } from './Section';

type FooterProps = {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
  onNavigate: (direction: Direction) => void;
};

const Footer = ({
  currentSection,
  onSectionChange,
  onNavigate,
}: FooterProps) => {
  return (
    <footer className='mt-auto flex flex-col items-center justify-center gap-y-5 p-5'>
      <hr className='w-full' />
      <div className='flex flex-row items-center justify-center gap-x-5'>
        {currentSection !== 'menu' && (
          <BackButton onSectionChange={onSectionChange} />
        )}
        {currentSection === 'menu' && (
          <>
            <ArrowButton direction='up' onClick={() => onNavigate('UP')} />
            <ArrowButton direction='down' onClick={() => onNavigate('DOWN')} />
            <EnterButton onClick={() => onNavigate('ENTER')} />
          </>
        )}
        {/* <ArrowButton direction='left' onClick={() => onSectionChange(Section.LEFT)} />
            <ArrowButton direction='right' onClick={() => onSectionChange(Section.RIGHT)} /> */}
      </div>
      <div className='flex flex-row items-center justify-center'>
        <TypingText text='Made by Davis Fusco' className='text-2xs' />
      </div>
    </footer>
  );
};

export default Footer;
