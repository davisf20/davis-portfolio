import CardBadges, {
  CardBadgesElement,
} from '@/app/components/Cards/CardBadges';
import { ProgressElement } from '@/app/components/Cards/CardBadges';

const skills: (CardBadgesElement | ProgressElement)[] = [
  {
    title: 'Hard Skills',
    tags: ['Programming', 'Data Science', 'Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Soft Skills',
    tags: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'],
  },
  {
    title: 'Language',
    bars: [
      { text: 'Italian', value: 100 },
      { text: 'English', value: 70 },
    ],
  },
];

const Skills = () => {
  return <CardBadges title='Skills' elements={skills} />;
};

export default Skills;
