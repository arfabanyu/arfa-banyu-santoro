'use client';
import SectionLayout from '@/layouts/SectionLayout';
import React, { useEffect, useRef, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(true);
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
  const scale = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, isMobile ? 1.1 : 2]
  );
  const scaleSect = useTransform(
    sectionTransition.scrollYProgress,
    [0, 1],
    ['0', '100%']
  );

  // Get Window Size
  useEffect(() => {
    setIsMobile(window.screen.width <= 425);
  }, []);
  return (
    <SectionLayout>
      <div>
        <div
          ref={target}
          className='sticky top-0 max-w-5xl mx-auto pt-96 gap-96 p-4 md:p-8 grid *:even:place-self-end *:aspect-[3_/_4] *:object-cover  *:max-w-80 '
        >
          <motion.h2
            style={{ opacity, scale }}
            className='sticky font-mono uppercase top-0 h-screen mx-auto place-content-center text-center mix-blend-multiply overflow-hidden'
          >
            {
              '"There Are No Exaggerations In The Story, Just Small Steps To Be Taken."'
            }
          </motion.h2>

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
