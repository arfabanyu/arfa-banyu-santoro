import SectionLayout from '@/layouts/SectionLayout';
import React from 'react';
import { LuArrowDownRight } from 'react-icons/lu';

const Hero = () => {
  return (
    <SectionLayout>
      <div className='overflow-hidden'>
        <h1 className='*:block *:w-fit uppercase px-20 pt-24 py-10 font-mono text-[12rem] font-black '>
          <span>Arfa</span>
          <span>Banyu</span>
          <span>Santoro</span>
        </h1>
        <p className='absolute top-56 right-56 text-xl grid '>
          <LuArrowDownRight className='-translate-x-0.5' />
          <span>10th Grade Student</span>
          <span>Full-Stack Web Developer</span>
          <span>Cybersecurity Enthusiast</span>
        </p>
      </div>
    </SectionLayout>
  );
};

export default Hero;
