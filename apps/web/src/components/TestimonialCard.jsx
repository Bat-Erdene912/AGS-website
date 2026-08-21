import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-navy-900 border border-white/5 p-8 rounded-2xl relative h-full flex flex-col">
      <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
      <div className="flex-grow">
        <p className="text-lg text-gray-300 leading-relaxed font-serif italic mb-8">
          "{testimonial.quote}"
        </p>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center border border-white/10 text-gold-500 font-bold font-serif">
          {testimonial.logo}
        </div>
        <div>
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gold-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;