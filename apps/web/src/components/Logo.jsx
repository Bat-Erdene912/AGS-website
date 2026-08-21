import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <img
      src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/f274644d614301eadcd92bb94fb1ff11.png"
      alt="Aeronautics Minimalist Logo"
      className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${className}`}
    />
  );
};

export default Logo;