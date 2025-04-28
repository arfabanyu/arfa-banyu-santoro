
import SectionLayout from '@/layouts/SectionLayout';
import {
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react';
import { motion } from 'motion/react';
import Hero from '@/sections/Hero';
import Appearance from '@/sections/Appearance';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Repo from '@/sections/Repo';

export default function Home() {
  return (
    <>
      <div data-theme='green'>
        <Hero />
        <Appearance />
      </div>
      <div data-theme='dark'>
        <About />
        <Skills />
        <Repo/>
      </div>
    </>
  );
}
{
  /* <div className='h-[500vh]'>
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
          </div> */
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
