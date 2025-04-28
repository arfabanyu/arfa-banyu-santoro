'use client'
import { motion } from 'motion/react';
import SectionLayout from '@/layouts/SectionLayout';
const Skills = () => {
  return (
    <SectionLayout>
      <div className='min-h-[80vh] grid place-content-center'>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(1rem)' }}
          whileInView={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 0.25 }}
          viewport={{ amount: 'all', once: true }}
          className='stats shadow'
        >
          <div className='stat place-items-center'>
            <div className='stat-title text-lg'>Repositories Created</div>
            <div className='stat-value text-7xl'>64+</div>
            <div className='stat-desc text-lg'>
              Including Web Apps, APIs, and Projects
            </div>
          </div>

          <div className='stat place-items-center'>
            <div className='stat-title text-lg'>Coding Hours</div>
            <div className='stat-value text-7xl'>1.500+</div>
            <div className='stat-desc text-lg'>
              ↗︎ Consistently 10+ hours/week
            </div>
          </div>

          <div className='stat place-items-center'>
            <div className='stat-title text-lg'>Tech Stack Mastered</div>
            <div className='stat-value text-7xl'>7+</div>
            <div className='stat-desc text-lg'>
              HTML, CSS, JS, React, Laravel, Tailwind, MySQL, etc.
            </div>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Skills;

//
// import React from 'react';
//
// import ParallaxText from '@/components/ParallaxSkills';
// import Image from 'next/image';
// import childeMe from '~/images/child_me.jpg';

// const Skills = () => {
//   const words = 'skills skills skills skills skills skills skills'.split(' ');
//   return (
//     <SectionLayout>
//       <div className='h-[500vh]'>
//         <motion.div className='sticky top-0 h-screen items-center  text-center'>
//           {/* <h2 className='text-3xl font-mono leading-normal text-left'>
//             a <span className='text-[#387478]'>MODERN WEB DEVELOPER</span>{' '}
//             focused on usability, functionality,{' '}
//             <span className='text-[#387478]'>SECURE SYSTEMS</span>, and seamless
//             interaction.
//           </h2> */}
//           <div>
//             <div className='text-7xl grid grid-flow-col grid-rows-7 gap-1 overflow-hidden '>
//               {Array.from({ length: 100 }, (v, k) => {
//                 return <div className='size-24 bg-neutral border border-base-100 rounded' key={k}></div>;
//               })}
//             </div>
//             {/* <div className='text-7xl grid grid-flow-col gap-1 overflow-hidden '>
//               {Array.from({ length: 20 }, (v, k) => {
//                 return <div className='size-24 bg-pink-50' key={k}></div>;
//               })}
//             </div> */}
//           </div>
//         </motion.div>
//       </div>
//     </SectionLayout>
//   );
// };
// const Word = ({ children }) => {
//   return <span>{children}&nbsp;</span>;
// };
// export default Skills;
