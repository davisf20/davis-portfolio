'use client';

import { FC, useEffect, useState } from 'react';

type TypingTextProps = {
  text: string;
  speed?: number;
};

const TypingText: FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timer);
    }
  }, [index, text.length, speed]);

  return <span>{text.substring(0, index)}</span>;
};

export default TypingText;
