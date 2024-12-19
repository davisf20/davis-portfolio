'use client';

import { FC, useEffect, useState } from 'react';
import styles from './TypingText.module.css';
import { useTyping } from '@/app/context/typing/TypingProvider';

type TypingTextProps = {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
};

const TypingText: FC<TypingTextProps> = ({
  text,
  speed = 50,
  className,
  onComplete,
}) => {
  const [index, setIndex] = useState(0);
  const { activeText, setActiveText } = useTyping();

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      setActiveText(text);
      const timer = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, setActiveText, onComplete]);

  return (
    <span className={`whitespace-pre-line uppercase ${className}`}>
      {text.substring(0, index)}
      {activeText === text && <span className={styles.cursor} />}
    </span>
  );
};

export default TypingText;
