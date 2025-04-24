import SectionLayout from '@/layouts/SectionLayout';
import React from 'react';
import { motion } from 'motion/react';
import ParallaxText from '@/components/ParallaxSkills';
import Image from 'next/image';
import childeMe from '~/images/child_me.jpg';

const Skills = () => {
  const words = 'skills skills skills skills skills skills skills'.split(' ');
  return (
    <SectionLayout>
      <div className='h-[500vh]'>
        <motion.div className='sticky top-0 h-screen items-center  text-center'>
          {/* <h2 className='text-3xl font-mono leading-normal text-left'>
            a <span className='text-[#387478]'>MODERN WEB DEVELOPER</span>{' '}
            focused on usability, functionality,{' '}
            <span className='text-[#387478]'>SECURE SYSTEMS</span>, and seamless
            interaction.
          </h2> */}
          <div>
            <div className='text-7xl grid grid-flow-col grid-rows-7 gap-1 overflow-hidden '>
              {Array.from({ length: 100 }, (v, k) => {
                return <div className='size-24 bg-neutral border border-base-100 rounded' key={k}></div>;
              })}
            </div>
            {/* <div className='text-7xl grid grid-flow-col gap-1 overflow-hidden '>
              {Array.from({ length: 20 }, (v, k) => {
                return <div className='size-24 bg-pink-50' key={k}></div>;
              })}
            </div> */}
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};
const Word = ({ children }) => {
  return <span>{children}&nbsp;</span>;
};
export default Skills;
