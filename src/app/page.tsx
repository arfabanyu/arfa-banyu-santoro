'use client';
import SectionLayout from '@/layouts/SectionLayout';
import { useAnimate } from 'motion/react';
import Image from 'next/image';
import arfa from '~/images/me_4.jpg';

export default function Home() {
  useAnimate();

  return (
    <SectionLayout>
      <div className='h-[500rem]'>
        <div className='sticky top-0'>
          <h1 className='*:block uppercase px-20 pt-24 py-10 font-mono text-[12rem] font-black '>
            <span>Arfa</span>
            <span>Banyu</span>
            <span>Santoro</span>
          </h1>
        </div>
      </div>
      {/* <Image src={arfa} alt='arfa' className='absolute top-28 size-48 -z-10 right-20' /> */}
    </SectionLayout>
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
