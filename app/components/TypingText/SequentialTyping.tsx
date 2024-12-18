import React, { FC, ReactNode, useEffect, useState } from 'react';
import TypingText from './TypingText';

export type TypingElement = {
  id: string;
  element: ReactNode;
};

type SequentialTypingProps = {
  elements: TypingElement[];
  delay?: number;
};

type TypingTextElement = React.ReactElement<{
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}>;

const isTypingTextElement = (
  element: React.ReactElement
): element is TypingTextElement => {
  return element.type === TypingText || element.type === SequentialTyping;
};

const SequentialTyping: FC<SequentialTypingProps> = ({
  elements,
  delay = 1000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTypingId, setCurrentTypingId] = useState<string | null>(null);

  const handleElementComplete = () => {
    setCurrentTypingId(null);
    setTimeout(() => {
      if (activeIndex < elements.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }, delay);
  };

  const injectOnComplete = (
    element: ReactNode,
    elementId: string
  ): ReactNode => {
    if (!React.isValidElement(element)) return element;

    if (isTypingTextElement(element)) {
      return React.cloneElement(element, {
        onComplete: () => {
          if (currentTypingId === elementId) {
            handleElementComplete();
          }
        },
      });
    }

    const children = React.Children.map(element.props.children, (child) => {
      if (React.isValidElement(child)) {
        return injectOnComplete(child, elementId);
      }
      return child;
    });

    return React.cloneElement(element, {}, children);
  };

  useEffect(() => {
    const currentElement = elements[activeIndex];
    if (currentElement) {
      setCurrentTypingId(currentElement.id);
    }
  }, [activeIndex, elements]);

  return (
    <>
      {elements.slice(0, activeIndex + 1).map((element) => (
        <div key={element.id}>
          {injectOnComplete(element.element, element.id)}
        </div>
      ))}
    </>
  );
};

export default SequentialTyping;
