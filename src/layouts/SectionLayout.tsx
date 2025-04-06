'use client';
import BackgroundVideo from '@/components/BackgroundVideo';
import { useEffect, useRef, useState } from 'react';

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      data-theme='vintage'
      className='min-h-screen font-sans relative bg-primary text-primary-content isolate'
    >
      {children}
    </section>
  );
}
