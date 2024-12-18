import React from 'react';
import SequentialTyping from '../TypingText/SequentialTyping';
import TypingText from '../TypingText/TypingText';

type SkillsList = {
  name: string;
  icon: string;
};

type SkillsListProps = {
  title: string;
  skills: SkillsList[];
};

const SkillsInventory = ({ title, skills }: SkillsListProps) => {
  const maxWidth =
    Math.max(...skills.map((skill) => skill.name.length + skill.icon.length)) +
    5;
  const borderWidth = maxWidth + 3;
  const topLine = `|${'-'.repeat(borderWidth / 2 - title.length / 2 - 1)} ${title} ${'-'.repeat(
    borderWidth / 2 - title.length / 2 - 1
  )}|`;
  const bottomLine = `|${'-'.repeat(borderWidth)}|`;

  const elements = [
    {
      id: `${title}-top`,
      element: (
        <pre>
          <TypingText text={topLine} speed={50} />
        </pre>
      ),
    },
    ...skills.map((skill) => ({
      id: `${title}-${skill.name}`,
      element: (
        <pre>
          <TypingText
            text={`| [${skill.name}] ${skill.icon}${'\u00A0'.repeat(
              maxWidth - skill.name.length - 4
            )}|`}
            speed={50}
          />
        </pre>
      ),
    })),
    {
      id: `${title}-bottom`,
      element: (
        <pre>
          <TypingText text={bottomLine} speed={50} />
        </pre>
      ),
    },
  ];

  return <SequentialTyping elements={elements} delay={50} />;
};

export default SkillsInventory;
