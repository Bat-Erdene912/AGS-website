import React from 'react';
import { MapPin } from 'lucide-react';

const airports = [
  { name: 'Chinggis Khaan Intl', top: '45%', left: '55%' },
  { name: 'Khovd', top: '40%', left: '20%' },
  { name: 'Mörön', top: '30%', left: '40%' },
  { name: 'Dalanzadgad', top: '45%', left: '25%' },
  { name: 'Choibalsan', top: '35%', left: '45%' },
  { name: 'Altai', top: '50%', left: '15%' }
];

const MongoliaAirportMap = () => {
  return (
    <div className="relative w-full aspect-video bg-navy-900 rounded-2xl border border-white/5 overflow-hidden">
      {/* Abstract Map Representation */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 1000 600" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M200,300 Q300,100 500,200 T800,300 T900,500 T500,550 T200,450 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-gold-500"
          />
        </svg>
      </div>

      {/* Airport Markers */}
      {airports.map((airport, i) => (
        <div 
          key={i} 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{ top: airport.top, left: airport.left }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-gold-500 rounded-full animate-ping absolute inset-0 opacity-50" />
            <div className="w-3 h-3 bg-gold-500 rounded-full relative z-10" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-navy-950 text-white text-xs px-3 py-1.5 rounded border border-white/10 z-20">
            {airport.name}
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm text-gray-400">
        <MapPin className="w-4 h-4 text-gold-500" />
        <span>Supported Airports</span>
      </div>
    </div>
  );
};

export default MongoliaAirportMap;