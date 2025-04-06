import gsap from 'gsap';

const DURATION: number = 2;
const TRANSITION: string = 'expo.inOut';

export const animateWebReveal = () => {
  const element = document.querySelector('.main-text');

  const tl = gsap.timeline();
  tl.fromTo(
    element,
    { scale: 1 },
    { duration: DURATION, ease: TRANSITION, top: '100%' }
  );
};
