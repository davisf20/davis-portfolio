// import React from 'react';

// const projects = [
//   {
//     title: 'Progetto 1',
//     description: 'Descrizione breve del progetto 1',
//     icon: '🕹️',
//   },
//   {
//     title: 'Progetto 2',
//     description: 'Descrizione breve del progetto 2',
//     icon: '💾',
//   },
//   {
//     title: 'Progetto 3',
//     description: 'Descrizione breve del progetto 3',
//     icon: '🖥️',
//   },
// ];

// const ProjectCard = () => {
//   return (
//     <section className='bg-black p-8 text-white'>
//       <h2 className='font-pixel mb-8 text-4xl'>PROJECTS</h2>
//       <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className='shadow-pixel hover:shadow-pixel-active transform rounded-lg border-4 border-gray-700 bg-gray-900 p-4 transition-transform hover:scale-105'
//           >
//             <div className='text-5xl'>{project.icon}</div>
//             <h3 className='font-pixel mt-4 text-2xl'>{project.title}</h3>
//             <p className='mt-2 text-gray-400'>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectCard;

import React from 'react';

const projects = [
  { title: 'Progetto 1', year: '2022', description: 'Descrizione breve 1' },
  { title: 'Progetto 2', year: '2023', description: 'Descrizione breve 2' },
  { title: 'Progetto 3', year: '2024', description: 'Descrizione breve 3' },
];

const ProjectCard = () => {
  return (
    <section className='bg-black p-8 text-white'>
      <h2 className='font-pixel mb-8 text-center text-4xl'>PROJECT TIMELINE</h2>
      <div className='relative ml-8 border-l-4 border-gray-700'>
        {projects.map((project, index) => (
          <div key={index} className='mb-8 ml-8'>
            <div className='absolute -left-8 h-6 w-6 rounded-full border-4 border-gray-800 bg-blue-400'></div>
            <h3 className='font-pixel text-2xl'>{project.year}</h3>
            <h4 className='mt-2 text-xl'>{project.title}</h4>
            <p className='mt-2 text-gray-400'>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
