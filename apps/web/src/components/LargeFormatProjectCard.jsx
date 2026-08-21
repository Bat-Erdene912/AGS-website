import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LargeFormatProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-navy-900 border border-white/5 h-[400px] md:h-[500px]">
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 text-xs font-semibold tracking-widest uppercase rounded-sm border border-gold-500/30 mb-4">
            {project.category}
          </span>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-lg text-gray-300 mb-8 line-clamp-2 max-w-2xl">
            {project.description}
          </p>
          <button className="flex items-center text-white hover:text-gold-500 transition-colors font-medium">
            View Case Study
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LargeFormatProjectCard;