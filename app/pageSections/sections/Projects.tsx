import CardTextBadge from '@/app/components/Cards/CardTextBadge';
import Timeline from '@/app/components/Timelines/Timeline';
import { FaUsers } from 'react-icons/fa';
import { LuGlobe, LuShoppingCart, LuStore, LuTicket } from 'react-icons/lu';

const timelineElements = [
  {
    date: '2022',
    description: 'Ticket System',
  },
  {
    date: '2023',
    description: 'Users',
  },
  {
    date: '2024',
    description: 'Portfolio',
  },
  {
    date: 'Current',
    description: 'Marketplace',
  },
];

const projects = [
  {
    title: (
      <div className='flex items-center gap-x-2'>
        <LuTicket /> Ticket System
      </div>
    ),
    description:
      'Developed a RESTful API for a web-based ticket tracking platform. Enables users to perform CRUD operations on tickets using JSON format.',
    tags: ['Java', 'Spring Boot', 'JavaScript'],
    link: 'https://github.com/davisf20/SUPSI-ticket-system',
  },
  {
    title: (
      <div className='flex items-start gap-x-2'>
        <FaUsers /> Characterization of user misbehavior in online social media
      </div>
    ),
    description:
      'A study of Twitter misbehavior in discussions about the Covid-19 vaccine in Italy, focusing on misinformation and hate incitement, conducted for a bachelor’s degree project.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    link: 'https://github.com/davisf20/characterization-of-user-misbehavior-in-online-social-media',
  },
  {
    title: (
      <div className='flex items-center gap-x-2'>
        <LuGlobe /> This website
      </div>
    ),
    description:
      'This portfolio website as a showcase of my projects and skills.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    link: 'https://github.com/davisf20/davis-portfolio',
  },
  {
    title: (
      <div className='flex items-center gap-x-2'>
        <LuShoppingCart /> Marketplace
      </div>
    ),
    description:
      'A marketplace where users can buy and sell their items, specialized in sports.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Next.js',
      'Nest.js',
      'PostgreSQL',
      'Stripe',
    ],
    link: 'https://court-x.com',
  },
];

const Projects = () => {
  return (
    <CardTextBadge
      title='Projects'
      description={<Timeline elements={timelineElements} />}
      elements={projects}
    />
  );
};

export default Projects;
