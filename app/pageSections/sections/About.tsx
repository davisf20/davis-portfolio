import TypingText from "../../components/TypingText/TypingText";
import { SectionProps } from "@/app/pageSections/Section";
import SequentialTyping from "@/app/components/TypingText/SequentialTyping";
import { FC } from "react";

const About: FC<SectionProps> = ({}) => {
  const elements = [
    {
      id: 'title',
      element: (
        <div className="flex justify-center">
          <TypingText text='About Me' />
        </div>
      )
    }
  ];

  return (
    <section className="relative">
      <SequentialTyping elements={elements} />
    </section>
  );
};

export default About;
