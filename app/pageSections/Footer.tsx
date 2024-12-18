import ArrowButton from '../components/Buttons/ArrowButton';
import BackButton from '../components/Buttons/BackButton';
import EnterButton from '../components/Buttons/EnterButton';
import TypingText from '../components/TypingText/TypingText';
import { Section, Direction } from './Section';

type FooterProps = {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
  onNavigate?: {
    onUp: () => void;
    onDown: () => void;
    onEnter: () => void;
  };
};

const Footer = ({
  currentSection,
  onSectionChange,
  onNavigate,
}: FooterProps) => {
  return (
    <footer className='flex w-full flex-col items-center justify-center gap-y-5 p-5'>
      <hr className='w-full border-2' />
      <div className='flex flex-row items-center justify-center gap-x-5'>
        {currentSection !== 'menu' && (
          <BackButton onSectionChange={onSectionChange} />
        )}
        {onNavigate && (
          <>
            <ArrowButton direction='up' onClick={onNavigate.onUp} />
            <ArrowButton direction='down' onClick={onNavigate.onDown} />
            <EnterButton onClick={onNavigate.onEnter} />
          </>
        )}
      </div>
      <div className='flex flex-row items-center justify-center'>
        <TypingText text='Developed by Me' className='text-2xs' />
      </div>
    </footer>
  );
};

export default Footer;
