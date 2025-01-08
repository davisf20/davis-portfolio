import { FC, ReactNode } from 'react';

type ButtonGlassProps = {
  onClick: () => void;
  text: string | ReactNode;
  className?: string;
};

const ButtonGlass: FC<ButtonGlassProps> = ({ onClick, text, className }) => {
  return (
    <button
      className={`btn glass hover:bg-primary ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonGlass;
