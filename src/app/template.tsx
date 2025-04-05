'use client';
import { animatePageIn } from '@/utils/animation/pageTransition';
import { useEffect } from 'react';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return <div>{children}</div>;
}
