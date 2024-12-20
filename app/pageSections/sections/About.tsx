import Avatar from '@/app/components/Avatar/Avatar';
import Card from '@/app/components/Cards/Card';
import { CiLocationOn } from 'react-icons/ci';
import { MdWavingHand } from 'react-icons/md';

const About = () => {
  return (
    <Card
      title='About Me'
      description={
        <div>
          <p>
            <MdWavingHand className='mr-1 inline-flex text-yellow-500' />
            Hi, I am Davis Fusco, a computer scientist based in
            <span className='inline-flex items-center'>
              Switzerland.
              <CiLocationOn className='ml-1 text-blue-500' />
            </span>
          </p>
          <p>
            I currently work as a Full-Stack Developer, a role that allows me to
            combine my passion for software development with the skills I
            acquired during my education and work experiences.
          </p>
          <p>
            I am specialized in creating and managing web applications, dealing
            with both frontend and backend.
          </p>
          <br />
          <p>
            I am a precise and curious person, always ready to learn new skills.
          </p>
          <p>
            I enjoy working in a team, and even when faced with challenges, I am
            committed to finding effective solutions.
          </p>
          <p>
            My goal is to continue to grow professionally, contributing my work
            to the success of the projects in which I participate.
          </p>
        </div>
      }
      upperElement={<Avatar src='/avatar.webp' />}
      tags={['Switzerland', 'Full-Stack Developer']}
    />
  );
};

export default About;
