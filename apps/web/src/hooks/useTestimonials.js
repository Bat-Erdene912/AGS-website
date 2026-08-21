import { useState, useEffect } from 'react';

const mockTestimonials = [
  {
    id: '1',
    quote: "Aeronautics LLC provides impeccable flight support. Their 24/7 ground handling team in Ulaanbaatar is highly responsive and professional, ensuring our VIP clients experience seamless operations.",
    name: "Alexander Reed",
    company: "Global Jet Operations",
    logo: "GJ"
  },
  {
    id: '2',
    quote: "Securing flight permits in Mongolia has never been easier. The expertise and local knowledge of Aeronautics LLC is unmatched in the region.",
    name: "Sarah Jenkins",
    company: "EuroCharter Aviation",
    logo: "EC"
  },
  {
    id: '3',
    quote: "We rely on Aeronautics LLC for technical asset management and consulting. Their commitment to international aviation standards is evident in every project.",
    name: "Marcus Chen",
    company: "Pacific Aero Management",
    logo: "PA"
  }
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    setTestimonials(mockTestimonials);
  }, []);

  return { testimonials };
}