import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useAnimatedCounter(endValue, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        // Easing function (easeOutExpo)
        const easeOut = 1 - Math.pow(1 - progress / duration, 3);
        setCount(Math.floor(endValue * easeOut));
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [endValue, duration, isInView]);

  return { count, ref };
}