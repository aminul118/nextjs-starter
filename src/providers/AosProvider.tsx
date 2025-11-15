'use client';

import { IChildren } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosProvider = ({ children }: IChildren) => {
  useEffect(() => {
    // Ensure AOS runs *after hydration finishes*
    requestAnimationFrame(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return <>{children}</>;
};

export default AosProvider;
