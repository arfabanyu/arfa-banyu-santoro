import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import MainText from './MainText';
const Intro = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5 }}
        className='h-screen w-screen grid place-content-center fixed top-0 z-50 bg-black '
      >
        <MainText
          variants={{
            initial: {
              scale: 1.15,
            },
            animate: {
              scale: 1,
            },
          }}
        >
          Arfa Banyu Santoro
        </MainText>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;
