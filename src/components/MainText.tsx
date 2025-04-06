import { motion, spring, Variants } from 'motion/react';
import React from 'react';
interface Props {
  children: string;
  variants: Variants;
}

const item = { initial: { top: 550 }, animate: { top: 0 } };

const MainText = ({ children, variants }: Props) => {
  return (
    <motion.h1
      layoutId='main-text'
      initial='initial'
      animate='animate'
      transition={{
        duration: 1,
        ease: 'circInOut',
        delay: 4,
        staggerChildren: 0.1,
        
      }}
      variants={variants}
      className='uppercase text-center tracking-wide text-base-content text-9xl font-bold font-mono  selection:bg-primary-content selection:text-white'
    >
      {children.split('').map((child, i) => {
        return (
          <motion.span
            className='relative'
            transition={spring}
            variants={item}
            key={i}
          >
            {child}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default MainText;
