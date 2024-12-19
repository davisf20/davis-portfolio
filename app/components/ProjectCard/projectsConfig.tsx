export type Project = {
  link: string;
  title: string;
  description: string | React.ReactNode;
  icon: string | React.ReactNode;
  tags: string[];
};

export const projects: Project[] = [
  {
    link: './',
    title: 'This website',
    description:
      'This portfolio website as a showcase of my projects and skills.',
    icon: (
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        {' '}
        <path
          d='M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z'
          fill='blue'
        />{' '}
      </svg>
    ),
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    link: 'https://www.google.com',
    title: 'Marketplace',
    description: 'Marketplace is a platform for buying and selling products.',
    icon: (
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
          d='M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z'
          fill='green'
        />
      </svg>
    ),
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Next.js',
      'Nest.js',
      'PostgreSQL',
      'Stripe',
    ],
  },
  {
    link: 'https://github.com/davisf20/characterization-of-user-misbehavior-in-online-social-media',
    title: 'Analysis of user misbehavior in online social media',
    description:
      'A study of Twitter misbehavior in discussions about the Covid-19 vaccine in Italy, focusing on misinformation and hate incitement, conducted for a bachelor’s degree project.',
    icon: (
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        {' '}
        <path
          d='M6 3h12v18H6V3zm10 16V5h-2v2h-4V5H8v14h8zm-5-4h2v2h-2v-2z'
          fill='red'
        />{' '}
      </svg>
    ),
    tags: ['Python', 'Machine Learning', 'Data Science'],
  },
  {
    link: 'https://github.com/davisf20/SUPSI-ticket-system',
    title: 'Ticket System',
    description:
      'Developed a RESTful API for a web-based ticket tracking platform. Enables users to perform CRUD operations on tickets using JSON format.',
    icon: (
      <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
          d='M3 2h2v2h2v2H5v14h14V6h-2V4h2V2h2v20H3V2zm12 2V2h2v2h-2zm-2 0h2v2h-2V4zm-2 0V2h2v2h-2zM9 4h2v2H9V4zm0 0V2H7v2h2zm8 4H7v2h10V8zM7 12h10v2H7v-2zm10 6v-2h-4v2h4z'
          fill='grey'
        />
      </svg>
    ),
    tags: ['Java', 'Spring Boot', 'JavaScript'],
  },
];
