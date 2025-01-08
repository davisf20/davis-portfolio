import CardTextBadge from '@/app/components/Cards/CardTextBadge';
import Timeline from '@/app/components/Timelines/Timeline';
import { FC } from 'react';
import { FaUsers } from 'react-icons/fa';
import { LuGlobe, LuShoppingCart, LuTicket } from 'react-icons/lu';

const timelineElements = [
  {
    date: '2022',
    description: 'Ticket System',
    targetId: 'ticket-system',
  },
  {
    date: '2023',
    description: 'Users',
    targetId: 'misbehavior-study',
  },
  {
    date: '2024',
    description: 'Portfolio',
    targetId: 'portfolio',
  },
  {
    date: 'Current',
    description: 'Marketplace',
    targetId: 'marketplace',
  },
];

const projects = [
  {
    id: 'ticket-system',
    title: (
      <div className='flex items-center gap-x-2'>
        <LuTicket className='text-orange-500' /> Ticket System
      </div>
    ),
    description:
      'Developed a RESTful API for a web-based ticket tracking platform. Enables users to perform CRUD operations on tickets using JSON format.',
    tags: ['Java', 'Spring Boot', 'JavaScript'],
    link: 'https://github.com/davisf20/SUPSI-ticket-system',
  },
  {
    id: 'misbehavior-study',
    title: (
      <span>
        <FaUsers className='mr-2 inline-flex text-emerald-500' />
        Characterization of user misbehavior in online social media
      </span>
    ),
    description:
      'A study of Twitter misbehavior in discussions about the Covid-19 vaccine in Italy, focusing on misinformation and hate incitement, conducted for a bachelor’s degree project.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    link: 'https://github.com/davisf20/characterization-of-user-misbehavior-in-online-social-media',
  },
  {
    id: 'portfolio',
    title: (
      <div className='flex items-center gap-x-2'>
        <LuGlobe className='text-blue-500' /> This website
      </div>
    ),
    description:
      'This portfolio website as a showcase of my projects and skills.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    link: 'https://github.com/davisf20/davis-portfolio',
  },
  {
    id: 'marketplace',
    title: (
      <div className='flex items-center gap-x-2'>
        <LuShoppingCart className='text-lime-500' /> Marketplace
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

type ProjectsProps = {
  className?: string;
};

const Projects: FC<ProjectsProps> = ({ className }) => {
  return (
    <CardTextBadge
      title='Projects'
      description={<Timeline elements={timelineElements} />}
      elements={projects}
      className={className}
    />
  );
};

export default Projects;
