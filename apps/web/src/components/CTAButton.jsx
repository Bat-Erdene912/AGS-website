import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const CTAButton = ({ type = 'whatsapp', size = 'default', variant = 'default', className = '' }) => {
  const configs = {
    whatsapp: {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/97699123456',
      ariaLabel: 'Contact us on WhatsApp'
    },
    phone: {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+97699123456',
      ariaLabel: 'Call us now'
    },
    inquiry: {
      icon: Mail,
      label: 'Send Inquiry',
      href: '/contact',
      ariaLabel: 'Send us an inquiry'
    }
  };

  const config = configs[type] || configs.whatsapp;
  const Icon = config.icon;

  const handleClick = (e) => {
    if (type === 'inquiry') {
      // Let React Router handle navigation
      return;
    }
    // For external links (WhatsApp, phone), open in new tab/trigger action
    e.preventDefault();
    window.open(config.href, type === 'whatsapp' ? '_blank' : '_self');
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`transition-all duration-200 active:scale-[0.98] ${className}`}
      onClick={handleClick}
      aria-label={config.ariaLabel}
    >
      <Icon className="w-4 h-4 mr-2" />
      {config.label}
    </Button>
  );
};

export default CTAButton;