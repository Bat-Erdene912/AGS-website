import { useState, useEffect } from 'react';

const mockServices = [
  {
    id: 'ground-handling',
    title: 'Ground Handling',
    slug: 'ground-handling',
    excerpt: 'Premium 24/7 ground handling for business jets and commercial airlines.',
    description: 'Comprehensive ramp and passenger services ensuring rapid turnaround times and adherence to global safety standards.',
    image: 'https://images.unsplash.com/photo-1676186318068-df5df0b35130'
  },
  {
    id: 'flight-permits',
    title: 'Flight Permits',
    slug: 'flight-permits',
    excerpt: 'Expedited overflight and landing clearances across Mongolia.',
    description: 'Our deep local expertise guarantees rapid acquisition of flight permits, saving critical time for global operators.',
    image: 'https://images.unsplash.com/photo-1686778278295-e119e84e2e59'
  },
  {
    id: 'aviation-consulting',
    title: 'Aviation Consulting',
    slug: 'aviation-consulting',
    excerpt: 'Strategic guidance for airport development and operational efficiency.',
    description: 'Tailored consulting services leveraging international expertise to optimize aviation infrastructure and processes.',
    image: 'https://images.unsplash.com/photo-1692081822085-6f6e154087cd'
  },
  {
    id: 'technical-asset-management',
    title: 'Aircraft Technical Asset Management',
    slug: 'technical-asset-management',
    excerpt: 'Rigorous oversight and maintenance coordination for aircraft assets.',
    description: 'Protecting your valuable aviation assets with comprehensive technical records management and maintenance planning.',
    image: 'https://images.unsplash.com/photo-1703277312811-f10d96bca2f6'
  }
];

export function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(mockServices);
  }, []);

  return { services };
}