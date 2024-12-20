import { FC } from 'react';

type ButtonGlassProps = {
  onClick: () => void;
  text: string;
  className?: string;
};

const ButtonGlass: FC<ButtonGlassProps> = ({ onClick, text, className }) => {
  return (
    <button className={`btn glass ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonGlass;
