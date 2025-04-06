import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const DURATION: number = 2;
const TRANSITION: string = 'expo.inOut';

export const animatePageIn = () => {
  const element = document.querySelector('.element');

  const tl = gsap.timeline();
  tl.fromTo(
    element,
    { top: 0 },
    { duration: DURATION, ease: TRANSITION, top: '100%' }
  );
};

export const animatePageOut = ({
  href,
  router,
}: {
  href: string;
  router: AppRouterInstance;
}) => {
  const element = document.querySelector('.element');

  const tl = gsap.timeline();
  tl.fromTo(
    element,
    { top: '100%' },
    {
      duration: DURATION,
      ease: TRANSITION,
      top: 0,
      onComplete: () => router.push(href),
    }
  );
};
