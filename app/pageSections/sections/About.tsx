import Avatar from '@/app/components/Avatar/Avatar';
import Card from '@/app/components/Cards/Card';
import { FC } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdWavingHand } from 'react-icons/md';

type AboutProps = {
  className?: string;
};

const About: FC<AboutProps> = ({ className }) => {
  return (
    <Card
      title='About Me'
      className={className}
      description={
        <div>
          <h3 className='text-lg font-bold'>Who am I?</h3>
          <p>
            <MdWavingHand className='mr-1 inline-flex text-yellow-500' />
            Hi, I am Davis Fusco, a computer scientist based in{' '}
            <span className='inline-flex items-center'>
              Switzerland.
              <CiLocationOn className='ml-1 text-blue-500' />
            </span>
          </p>
          <p>
            I graduated with a Bachelor of Science in Computer Engineering from
            SUPSI, where I gained expertise in software development. Currently,
            I work as a Full-Stack Developer, a role that allows me to bring my
            passion for technology into professional practice.
          </p>
          <br />
          <h3 className='text-lg font-bold'>What I do?</h3>
          <p>
            I am specialized in designing, developing, and managing web
            applications, handling both frontend and backend aspects. My
            technical skills span a range of modern technologies, including
            JavaScript frameworks, Java & Spring Boot, and tools like Docker and
            Git. I have a strong foundation in software engineering and data
            analysis, which I leverage to create efficient and robust solutions.
          </p>
          <br />
          <h3 className='text-lg font-bold'>Why choose me?</h3>
          <p>
            I am a precise and curious person, always eager to learn and explore
            new skills. My strong problem-solving attitude and adaptability
            allow me to navigate challenges effectively, whether working
            independently or in a team. I believe in continuous growth and
            strive to contribute to the success of every project I am involved
            in by applying my knowledge and delivering impactful results.
          </p>
        </div>
      }
      upperElement={<Avatar src='/avatar.webp' />}
      tags={['Switzerland', 'Full-Stack Developer']}
    />
  );
};

export default About;
