// import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '📜' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Debugging', icon: '🔧' },
];

// const skills = ['Linguaggio C++', 'JavaScript', 'Pixel Design', 'UX/UI Skills'];

import React from 'react';

const SkillsInventory = ({}) => {
  // Calcola la larghezza massima per allineare correttamente i bordi
  const maxWidth = Math.max(...skills.map((skill) => skill.name.length)) + 5; // +5 per i caratteri [] e il carattere ' '

  const horizontalLine = '-'.repeat(maxWidth);

  return (
    <div className='p-2'>
      <pre>
        {`|${'-'.repeat(maxWidth / 2)}`}
        {` HARD SKILLS ${'-'.repeat(maxWidth / 2)}|\n`}
        {skills
          .map(
            (skill) =>
              `| [${skill.name}] ${skill.icon}${' '.repeat(maxWidth - skill.name.length - 4)}|`
          )
          .join('\n')}
        {`\n|${horizontalLine}|`}
      </pre>
    </div>
  );
};

export default SkillsInventory;

// import React from 'react';

// const skills = [
//   { name: 'JavaScript', level: 80 },
//   { name: 'React', level: 70 },
//   { name: 'Tailwind CSS', level: 65 },
//   { name: 'Problem Solving', level: 90 },
// ];

// const SkillsList = () => {
//   return (
//     <section className='bg-black p-8 text-white'>
//       <h2 className='font-pixel mb-8 text-center text-4xl'>SKILLS PROGRESS</h2>
//       <div className='space-y-6'>
//         {skills.map((skill, index) => (
//           <div key={index}>
//             <h3 className='font-pixel mb-2 text-lg'>{skill.name}</h3>
//             <div className='shadow-pixel relative h-8 w-full rounded-none border-4 border-gray-600 bg-gray-900'>
//               <div
//                 className='pixel-bar h-full border-b-4 border-t-4 border-green-600 bg-green-400'
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//               <span className='font-pixel absolute right-2 top-1/2 -translate-y-1/2 transform text-xs'>
//                 {skill.level}%
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsList;
