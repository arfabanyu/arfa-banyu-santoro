import SectionLayout from '@/layouts/SectionLayout';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import one from '~/images/me_1.jpg';
import two from '~/images/me_2.jpg';
import three from '~/images/me_3.jpg';
import six from '~/images/me_6.jpg';
import five from '~/images/me_5.jpg';
import four from '~/images/me_4.jpg';
import seven from '~/images/me_7.jpg';
import eight from '~/images/me_8.jpg';
import nine from '~/images/me_9.jpg';
import ParallaxImage from '@/components/ParallaxImage';

const Appearance = () => {
  const images = [one, two, three, four, five, six, seven, eight, nine];

  const target = useRef(null);
  const back = useRef(null);

  const sectionTransition = useScroll({
    target: back,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start', 'end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 2]);
  const translateY = useTransform(scrollYProgress, [0.75, 1], [0, 1000]);
  const scaleSect = useTransform(
    sectionTransition.scrollYProgress,
    [0, 1],
    ['0', '100%']
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
      <div>
        <div
          ref={target}
          className='sticky top-0 max-w-5xl mx-auto pt-96 space-y-96 p-16 flex flex-col *:even:self-end *:aspect-[3_/_4] *:object-cover *:w-80 '
        >
          <motion.div
            style={{ opacity, scale }}
            className='sticky top-20 grid place-content-center mx-auto -z-10'
          >
            <motion.h2
              transition={{ staggerChildren: 0.1 }}
              className='text-center mix-blend-multiply overflow-hidden'
            >
              {'"There Are No Exaggerations In The Story, Just Small Steps To Be Taken."'
                .split(' ')
                .map((word, i) => {
                  return (
                    <motion.span
                      style={{ translateY }}
                      className='leading-none'
                      key={i}
                    >
                      {word + ' '}
                    </motion.span>
                  );
                })}
            </motion.h2>
          </motion.div>

          {images.map((image, i) => {
            return <ParallaxImage key={i} index={i} src={image} />;
          })}
          {/* Spaces */}
          {images.map((image, i) => {
            if (i + 1 <= 5) return <div key={i}></div>;
          })}
        </div>
        <div ref={back} className='h-[250vh] relative'>
          <motion.div
            style={{ width: scaleSect }}
            className='h-[150vh] sticky top-0 bg-black'
          ></motion.div>
        </div>
        {/* <div className='h-[200vh] relative bg-gradient-to-t from-75% from-primary to-transparent '></div> */}
      </div>
    </SectionLayout>
  );
};

export default Appearance;
