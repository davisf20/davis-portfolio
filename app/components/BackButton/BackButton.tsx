import { Section } from "@/app/pageSections/Section";
import TypingText from "../TypingText/TypingText";

const BackButton = ({ onSectionChange }: { onSectionChange: (section: Section) => void }) => {
  return (
    <button
      onClick={() => onSectionChange('menu')}
      className="absolute top-5 left-5 text-sm"
    >
      <TypingText text='← Back' />
    </button>
  );
};

export default BackButton;
