import SectionLayout from '@/layouts/SectionLayout';
import React from 'react';
import { LuArrowDownRight } from 'react-icons/lu';

const Hero = () => {
  return (
    <SectionLayout>
      <div className='overflow-hidden'>
        <h1 className='*:block *:w-fit uppercase px-4 pt-[40vh] md:px-20 md:pt-24 md:py-10 font-mono text-[14.06vw] font-black '>
          <span>Arfa</span>
          <span>Banyu</span>
          <span>Santoro</span>
        </h1>
        <p className='absolute top-[12vh] right-[10vh] md:top-[33vh] md:right-[17vw] md:text-xl grid '>
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
