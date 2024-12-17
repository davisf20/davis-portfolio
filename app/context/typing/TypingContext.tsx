import { createContext } from 'react';

type TypingContextType = {
  activeText: string | null;
  setActiveText: (text: string | null) => void;
};

export const TypingContext = createContext<TypingContextType | undefined>(
  undefined
);
