import { useEffect } from 'react';
import { useScroll } from 'motion/react';

export const useThemeByScroll = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const root = document.documentElement;
      if (latest > 0.85) {
        root.setAttribute('data-theme', 'dark'); // ganti ke tema yang kamu punya
      } else {
        root.setAttribute('data-theme', 'green');
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
};
