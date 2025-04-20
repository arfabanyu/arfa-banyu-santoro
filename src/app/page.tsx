'use client';
import SectionLayout from '@/layouts/SectionLayout';
import {
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import one from '~/images/me_1.jpg';
import two from '~/images/me_2.jpg';
import three from '~/images/me_3.jpg';
import six from '~/images/me_6.jpg';
import five from '~/images/me_5.jpg';
import four from '~/images/me_4.jpg';
import seven from '~/images/me_7.jpg';
import eight from '~/images/me_8.jpg';
import nine from '~/images/me_9.jpg';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { LuArrowDownRight } from 'react-icons/lu';
import ParallaxImage from '@/components/ParallaxImage';

export default function Home() {
  const images = [one, two, three, four, five, six, seven, eight, nine];
  const back = useRef(null);
  const sectionTransition = useScroll({
    target: back,
    offset: ['start start', 'end end'],
  });
  const scaleSect = useTransform(
    sectionTransition.scrollYProgress,
    [0, 1],
    ['0', '100%']
  );

  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start', 'end'],
  });
  const scroll = useMotionValue(scrollYProgress).get();
  useEffect(() => {
    const scroll = () => {
      console.log(scrollYProgress.get());
      console.log(sectionTransition.scrollYProgress.get());
      // console.log(scrollY.get());
    };
    document.addEventListener('scroll', scroll);
  }, []);
  const opacity = useTransform(scroll, [0, 0.7], [0, 1]);
  const scale = useTransform(scroll, [0, 0.7], [1, 2]);
  const translateY = useTransform(scroll, [0.75, 1], [0, 1000]);

  return (
    <>
      <div data-theme='green'>
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
        {/* <SectionLayout>
        </SectionLayout> */}
      </div>
      <div data-theme='dark'>
        <SectionLayout>
          <div>
            <div></div>
          </div>
          {/* <div className='h-[500vh]'>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(0.5rem)' }}
              whileInView={{ opacity: 1, filter: 'blur(0)' }}
              viewport={{ amount: 'all' }}
              className='sticky top-0 h-screen place-content-center text-center'
            >
              <div className='stats stats-horizontal scale-200'>
                <div className='stat place-items-center'>
                  <p className='stat-title'>Jam Belajar</p>
                  <h4 className='stat-value'>2000+</h4>
                  <p className='stat-desc'>Fullstack Web Tech</p>
                </div>
                <div className='stat place-items-center'>
                  <p className='stat-title'>Tech Stack</p>
                  <h4 className='stat-value'>6+</h4>
                  <p className='stat-desc'>Fullstack Web Tech</p>
                </div>
                <div className='stat place-items-center'>
                  <p className='stat-title'>Repositories</p>
                  <h4 className='stat-value'>60+</h4>
                  <p className='stat-desc'>Fullstack Web Tech</p>
                </div>
              </div>
            </motion.div>
          </div> */}
        </SectionLayout>
        <SectionLayout>
          <div>
            <div></div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
}

{
  /* <div
id='home'
className='flex flex-col justify-between h-screen uppercase p-12 overflow-hidden'
>
<div className='w-full flex justify-between'>
  <span>&copy; {new Date().getFullYear()} Arfa Banyu Santoro</span>
  <button className='font-sans text-xl uppercase hover:before:content-[">_"]'>
    Menu
  </button>
</div>
<div className='grid gap-12'>
  <div>
    <MainText>Arfa Banyu Santoro</MainText>
    <h2 className='uppercase text-shadow-xl text-center text-xl font-mono tracking-[.5rem] text-primary-content'>
      Full-Stack Web Developer | Cyber Security Enthusiast
    </h2>
  </div>
  <div className='text-center space-y-2'>
    <Navigate
      href={'/home'}
      className='font-sans text-xl uppercase hover:before:content-[">_"] hover:after:content-["_<"]'
    >
      Start
    </Navigate>
    <br />
    <button className='font-sans text-xl uppercase hover:before:content-[">_"] hover:after:content-["_<"]'>
      Settings
    </button>
  </div>
</div>
<div className='w-full flex justify-between'>
  <p>
    <span>{new Date().toDateString()}</span>
  </p>
  <p>Located in Jakarta, Indonesia.</p>
</div>
</div> */
}
