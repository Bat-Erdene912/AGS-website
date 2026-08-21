import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PremiumServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigate to the service path if defined, otherwise fallback to slug
    const targetRoute = service.path || `/services/${service.slug || ''}`;
    navigate(targetRoute);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigation();
    }
  };

  return (
    <div 
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group relative block overflow-hidden rounded-xl aspect-[4/5] bg-navy-900 border border-white/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-background"
    >
      <img 
        src={service.image} 
        alt={service.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent opacity-80 pointer-events-none" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
        <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="w-10 h-1 bg-gold-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <h3 className="font-serif text-2xl font-semibold text-white mb-2">{service.title}</h3>
          <p className="text-sm text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {service.excerpt || service.description}
          </p>
          <div className="flex items-center text-gold-500 text-sm font-medium uppercase tracking-wider">
            Explore Service
            <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumServiceCard;