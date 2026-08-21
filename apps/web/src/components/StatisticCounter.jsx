import React from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const StatisticCounter = ({ value, label, suffix = '+' }) => {
  const { count, ref } = useAnimatedCounter(value, 2500);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl font-bold text-gold-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-widest text-gray-400">
        {label}
      </div>
    </div>
  );
};

export default StatisticCounter;