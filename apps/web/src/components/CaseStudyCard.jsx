import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {caseStudy.image && (
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
        <CardDescription className="text-sm">{caseStudy.client}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {caseStudy.description}
        </p>
        
        {caseStudy.results && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <TrendingUp className="w-4 h-4" />
              <span>Key Results</span>
            </div>
            <ul className="space-y-1">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;