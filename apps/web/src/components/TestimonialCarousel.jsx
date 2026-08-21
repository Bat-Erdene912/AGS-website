import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TestimonialCard from '@/components/TestimonialCard';
import { useTestimonials } from '@/hooks/useTestimonials';

const TestimonialCarousel = () => {
  const { testimonials, loading } = useTestimonials();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-muted/30 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default TestimonialCarousel;