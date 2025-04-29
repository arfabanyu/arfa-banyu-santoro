'use client';
import SectionLayout from '@/layouts/SectionLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import me_4 from '~/images/me_4.jpg';

const Footer = () => {
  return (
    <SectionLayout>
      <div className='h-screen flex flex-col pt-[20vh]'>
        <div className=''>
          <div className='max-w-2xl mx-auto space-y-4'>
            <Image src={me_4} alt='' className='size-24 rounded-full' />
            <h2 className='text-6xl leading-20 font-mono'>
              {"Let's Discuss Some Works..."}
            </h2>
            <hr className='text-base-300' />
            <p className='border border-base-300 p-4 w-fit'>
              banyuarfa1122@gmail.com
            </p>
            <p className='border border-base-300 p-4 w-fit'>
              banyuarfa1122@gmail.com
            </p>
          </div>
        </div>
        <div className='h-full flex justify-between items-end text-sm'>
          <div className='flex'>
            <div className='w-fit p-8 '>
              <h3 className='text-base-300'>Version</h3>
              <p>2025 &copy; Edition</p>
            </div>
            <div className='w-fit p-8 '>
              <h3 className='text-base-300'>Local Time</h3>
              <p>{new Date().toDateString()}</p>
            </div>
          </div>
          <div>
            <div className='w-fit p-8 '>
              <h3 className='text-base-300'>Version</h3>
              <ul className='flex'>
                <li>
                  <Link href={''}>Github</Link>
                </li>
                <li>
                  <Link href={''}>Instagram</Link>
                </li>
                <li>
                  <Link href={''}>LinkedIn</Link>
                </li>
                <li>
                  <Link href={''}></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
