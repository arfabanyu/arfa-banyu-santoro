import SectionLayout from '@/layouts/SectionLayout';
import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <SectionLayout>
      <div className='h-[500vh]'>
        <motion.div className='sticky top-0 pt-8'>
          <h2 className='font-mono text-9xl leading-normal flex flex-wrap'>
            {'BELIEVING that learning is not a task, but a lifestyle.'
              .split(' ')
              .map((word, i) => {
                return (
                  <span key={i} className={i === 0 ? 'text-[#387478]' : ''}>
                    {word}&nbsp;
                  </span>
                );
              })}
            {/* <span data-theme='green' className='text-primary-content bg-transparent'>BELIEVING</span> that learning is not a task, but a
                    lifestyle */}
          </h2>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default About;
