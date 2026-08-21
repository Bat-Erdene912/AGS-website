import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import TestimonialCard from './TestimonialCard';
import { useTestimonials } from '@/hooks/useTestimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const { testimonials } = useTestimonials();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-24 bg-charcoal-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Client Perspectives</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              Trusted by global aviation leaders
            </h2>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-gold-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-gold-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;