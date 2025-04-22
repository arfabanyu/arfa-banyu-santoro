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
        <motion.div className='sticky top-0 h-screen grid place-content-center text-center'>
          <h2 className='text-5xl font-mono leading-normal'>
            a <span className='text-[#387478]'>MODERN WEB DEVELOPER</span>{' '}
            focused on usability, functionality,{' '}
            <span className='text-[#387478]'>SECURE SYSTEMS</span>, and seamless
            interaction.
          </h2>
          <div className='text-7xl'>
            <ParallaxText baseVelocity={10}>
              <Image src={childeMe} alt='' className='h-100 w-fit' />
            </ParallaxText>

            <motion.p>
              {words.map((word, i) => {
                return <Word key={i}>{word}</Word>;
              })}
            </motion.p>
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
