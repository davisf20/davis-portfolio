import { FC, ReactNode, useEffect, useState } from 'react';

type TypingElement = {
  id: string;
  element: ReactNode;
};

type SequentialTypingProps = {
  elements: TypingElement[];
  delay?: number;
};

const SequentialTyping: FC<SequentialTypingProps> = ({ elements, delay = 1000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < elements.length - 1) {
      const timer = setTimeout(
        () => setActiveIndex(activeIndex + 1),
        delay
      );
      return () => clearTimeout(timer);
    }
  }, [activeIndex, elements.length, delay]);

  return (
    <>
      {elements.map((element, index) => (
        index <= activeIndex ? <div key={element.id}>{element.element}</div> : null
      ))}
    </>
  );
};

export default SequentialTyping;
