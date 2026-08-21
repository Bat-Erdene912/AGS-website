import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Plane, FileCheck, BarChart3, GraduationCap, ShieldCheck, Wrench, PlaneTakeoff, Car } from 'lucide-react';

const iconMap = {
  Plane,
  PlaneTakeoff,
  FileCheck,
  BarChart3,
  GraduationCap,
  ShieldCheck,
  Wrench,
  Car
};

const colorMap = {
  purple: { border: 'border-l-[hsl(var(--audit-purple))]', bg: 'bg-[hsl(var(--audit-purple))]/5', icon: 'text-[hsl(var(--audit-purple))]', iconBg: 'bg-[hsl(var(--audit-purple))]/10' },
  blue: { border: 'border-l-[hsl(var(--audit-blue))]', bg: 'bg-[hsl(var(--audit-blue))]/5', icon: 'text-[hsl(var(--audit-blue))]', iconBg: 'bg-[hsl(var(--audit-blue))]/10' },
  teal: { border: 'border-l-[hsl(var(--audit-teal))]', bg: 'bg-[hsl(var(--audit-teal))]/5', icon: 'text-[hsl(var(--audit-teal))]', iconBg: 'bg-[hsl(var(--audit-teal))]/10' },
  navy: { border: 'border-l-[hsl(var(--audit-navy))]', bg: 'bg-[hsl(var(--audit-navy))]/5', icon: 'text-[hsl(var(--audit-navy))]', iconBg: 'bg-[hsl(var(--audit-navy))]/10' },
  green: { border: 'border-l-[hsl(var(--audit-green))]', bg: 'bg-[hsl(var(--audit-green))]/5', icon: 'text-[hsl(var(--audit-green))]', iconBg: 'bg-[hsl(var(--audit-green))]/10' },
  accent: { border: 'border-l-secondary', bg: 'bg-secondary/5', icon: 'text-primary', iconBg: 'bg-secondary/20' },
  default: { border: 'border-l-primary', bg: 'bg-card', icon: 'text-primary', iconBg: 'bg-primary/10' }
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || Plane;
  const theme = colorMap[service.colorTheme] || colorMap.default;

  return (
    <Card className={`group transition-all duration-300 flex flex-col h-full border-y-0 border-r-0 border-l-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${theme.border} ${theme.bg}`}>
      <CardHeader className="p-8 pb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${theme.iconBg}`}>
          <Icon className={`w-7 h-7 ${theme.icon}`} />
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-3">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      {service.features && service.features.length > 0 && (
        <CardContent className="px-8 pb-8 pt-0 flex-grow">
          <ul className="space-y-3 mt-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-foreground font-medium">
                <div className={`w-2 h-2 rounded-full mt-1.5 mr-3 shrink-0 ${theme.iconBg.replace('/10', '').replace('/20', '')} border border-current`} />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default ServiceCard;