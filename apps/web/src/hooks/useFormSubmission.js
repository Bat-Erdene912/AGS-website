import { useState } from 'react';
import { toast } from 'sonner';

export function useFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactForm = async (formData) => {
    setIsSubmitting(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Store submission in localStorage
      const submissions = JSON.parse(localStorage.getItem('aeronautics_contact_submissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      submissions.push(newSubmission);
      localStorage.setItem('aeronautics_contact_submissions', JSON.stringify(submissions));

      toast.success('Message sent successfully', {
        description: 'We will get back to you within 24 hours.'
      });

      setIsSubmitting(false);
      return { success: true, data: newSubmission };
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.'
      });
      setIsSubmitting(false);
      return { success: false, error };
    }
  };

  const submitInquiryForm = async (formData) => {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const inquiries = JSON.parse(localStorage.getItem('aeronautics_inquiries') || '[]');
      const newInquiry = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'new'
      };
      
      inquiries.push(newInquiry);
      localStorage.setItem('aeronautics_inquiries', JSON.stringify(inquiries));

      toast.success('Inquiry submitted', {
        description: 'Our team will contact you shortly.'
      });

      setIsSubmitting(false);
      return { success: true, data: newInquiry };
    } catch (error) {
      console.error('Inquiry submission error:', error);
      toast.error('Submission failed', {
        description: 'Please try again later.'
      });
      setIsSubmitting(false);
      return { success: false, error };
    }
  };

  return {
    isSubmitting,
    submitContactForm,
    submitInquiryForm
  };
}