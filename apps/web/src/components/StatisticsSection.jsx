import React from 'react';
import StatisticCounter from './StatisticCounter';

const StatisticsSection = () => {
  const stats = [
    { value: 15, label: 'Airports Supported' },
    { value: 200, label: 'Projects Completed' },
    { value: 10, label: 'Years Experience' },
    { value: 50, label: 'Aviation Partners' }
  ];

  return (
    <section className="py-24 bg-navy-950 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="px-4">
              <StatisticCounter value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;