import { FC } from 'react';
import GlitchText from '../components/GlitchText/GlitchText';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className='mt-20 flex flex-col items-center'>
      <GlitchText text={title} />
    </header>
  );
};

export default Header;
