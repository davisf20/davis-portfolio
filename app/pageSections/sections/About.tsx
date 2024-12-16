import BackButton from "@/app/components/BackButton/BackButton";
import TypingText from "../../components/TypingText/TypingText";
import { Section } from "@/app/pageSections/Section";
import SequentialTyping from "@/app/components/TypingText/SequentialTyping";

const About = ({ onSectionChange }: { onSectionChange: (section: Section) => void }) => {
  const elements = [
    {
      id: 'back',
      element: <BackButton onSectionChange={onSectionChange} />
    },
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
