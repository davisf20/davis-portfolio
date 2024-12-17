'use client';

import { useContext, useState } from 'react';
import { TypingContext } from './TypingContext';

export const TypingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeText, setActiveText] = useState<string | null>(null);

  return (
    <TypingContext.Provider value={{ activeText, setActiveText }}>
      {children}
    </TypingContext.Provider>
  );
};

export const useTyping = () => {
  const context = useContext(TypingContext);
  if (!context) {
    throw new Error('useTyping must be used within a TypingProvider');
  }
  return context;
};
