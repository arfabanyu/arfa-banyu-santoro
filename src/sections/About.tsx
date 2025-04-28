'use client'
import SectionLayout from '@/layouts/SectionLayout';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const About = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target, offset: ['start', 'end'] });
  const words = 'BELIEVING that learning is not a task, but a lifestyle.'.split(
    ' '
  );

  // useEffect(() => {
  //   const scroll = () => {
  //     console.log(scrollYProgress.get());
  //     // console.log(scrollY.get());
  //   };
  //   document.addEventListener('scroll', scroll);
  // }, [scrollYProgress]);
  return (
    <SectionLayout>
      <div className='h-[800vh]' ref={target}>
        <motion.div className='sticky top-0 pt-8'>
          <h2 className='font-mono text-9xl leading-normal flex flex-wrap'>
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  range={[start, end]}
                  progress={scrollYProgress}
                  className={i === 0 ? 'text-[#387478]' : ''}
                >
                  {word}
                </Word>
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
const Word = ({ children, className, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='relative isolate'>
      <span className='absolute -z-10 opacity-10'>{children}</span>
      <motion.span style={{ opacity }} className={className}>
        {children}&nbsp;
      </motion.span>
    </span>
  );
};

export default About;
