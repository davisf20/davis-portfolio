import Avatar from '@/app/components/Avatar/Avatar';
import Card from '@/app/components/Cards/Card';

const About = () => {
  return (
    <Card
      title='About Me'
      description={`Hi, I am Davis Fusco, a computer scientist based near Bellinzona, Switzerland.\n
I currently work as a Full-Stack Developer, a role that allows me to combine my passion for software development with the skills acquired during my education and work experiences.\n
I specialize in creating and managing web applications, dealing with both frontend and backend.\n
I am a precise and curious person, always ready to learn new skills.\n
I enjoy working in a team and, even when faced with challenges, I am committed to finding effective solutions.
My goal is to continue to grow professionally, contributing my work to the success of the projects in which I participate.`}
      upperElement={<Avatar />}
      tags={['Switzerland', 'Full-Stack Developer']}
    />
  );
};

export default About;
