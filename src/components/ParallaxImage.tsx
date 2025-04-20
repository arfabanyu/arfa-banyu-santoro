import { useMotionValue, useTransform, motion, useScroll } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';
const imagesPosition: {
  3: string;
  5: string;
  6: string;
  7: string;
} = {
  3: 'object-top',
  5: 'object-right',
  6: 'object-left',
  7: 'object-right',
};
const ParallaxImage = ({ src, index }) => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  });
  const random = Math.floor(Math.random() * -75) - 25;
  const height = random * -1;
  const scroll = useMotionValue(scrollYProgress).get();
  const translateY = useTransform(scroll, [0, 1], [0, random]);
  const opacity = useTransform(scroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const filter = useTransform(
    scroll,
    [0, 0.2, 0.8, 1],
    ['blur(0.5rem)', 'blur(0rem)', 'blur(0rem)', 'blur(0.5rem)']
  );
  return (
    <div className='relative transform transform-3d odd:skew-6 even:-skew-6'>
      <motion.div
        style={{ translateY, filter }}
        className={`bg-primary-content scale-110 w-full h-50 absolute top-1/2 -translate-y-1/2`}
      ></motion.div>
      <motion.div
        ref={target}
        initial={false}
        className='relative h-fit'
        style={{ opacity, filter }}
        whileHover={{
          scale: 1.2,
          translateY: '-3rem',
          translateX: index % 2 === 0 ? '-3rem' : '3rem',
          skew: 0,
        }}
      >
        <Image
          src={src}
          alt='me'
          className={(imagesPosition[index + 1] ?? '') + ' shadow-lg'}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
