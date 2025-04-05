'use client';
import BackgroundVideo from '@/components/BackgroundVideo';
import { useEffect, useState } from 'react';

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstTimeRender, setIsFirstTimeRender] = useState(true);
  
  useEffect(() => setIsFirstTimeRender(false), []);

  return (
    <section
      data-theme='dark-pink'
      className='section min-h-screen font-sans relative'
    >
      <BackgroundVideo />
      {children}
      {/* Transition element */}
      <div className='element h-screen w-screen bg-red-500 fixed'></div>
      {/* Fix transition blinking at section mount */}
      {isFirstTimeRender && (
        <div className='h-screen w-screen bg-red-500 top-0 fixed'></div>
      )}
    </section>
  );
}
