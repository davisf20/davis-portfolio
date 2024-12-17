import { FC } from "react";

type EnterButtonProps = {
  onClick: () => void;
};

const EnterButton: FC<EnterButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-x-2 items-center"
    >
      
      <svg 
        className="w-6 h-6"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      > 
        <path 
          d="M18 16H8v2H6v-2H4v-2h2v-2h2v2h10V4h2v12h-2zM8 12v-2h2v2H8zm0 6v2h2v-2H8z" 
          fill="currentColor"
        />
      </svg>
      <span className="text-xs uppercase">Enter</span>
    </button>
  );
};

export default EnterButton;
