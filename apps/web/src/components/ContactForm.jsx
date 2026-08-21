import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API
      
      const existing = JSON.parse(localStorage.getItem('aero_contacts') || '[]');
      localStorage.setItem('aero_contacts', JSON.stringify([...existing, { ...data, date: new Date().toISOString() }]));
      
      toast.success('Inquiry submitted successfully', {
        description: 'Our 24/7 operations team will contact you shortly.'
      });
      reset();
    } catch (err) {
      toast.error('Submission failed', { description: 'Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-navy-900 border border-white/5 p-8 md:p-10 rounded-2xl">
      <h3 className="font-serif text-3xl font-semibold text-white mb-2">Request Support</h3>
      <p className="text-gray-400 mb-8">Our operations center is active 24/7/365.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input 
              {...register('name')}
              className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-600"
              placeholder="Captain John Doe"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input 
              {...register('email')}
              type="email"
              className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-600"
              placeholder="ops@airline.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Phone / WhatsApp</label>
            <input 
              {...register('phone')}
              className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-600"
              placeholder="+1 234 567 8900"
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Required Service</label>
            <select 
              {...register('service')}
              className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
            >
              <option value="">Select a service...</option>
              <option value="ground">Ground Handling</option>
              <option value="permits">Flight Permits</option>
              <option value="consulting">Aviation Consulting</option>
              <option value="other">Other Inquiry</option>
            </select>
            {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Message / Flight Details</label>
          <textarea 
            {...register('message')}
            rows={4}
            className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-600 resize-none"
            placeholder="Please provide flight details, dates, or specific requirements..."
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Request'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;