'use client';
import { animatePageOut } from '@/utils/animation/pageTransition';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navigate = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  const router = useRouter();

  const handlePageTransition = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    animatePageOut({ href, router });
  };
  return (
    <Link className={className} onClick={handlePageTransition} href={href}>
      {children}
    </Link>
  );
};

export default Navigate;
