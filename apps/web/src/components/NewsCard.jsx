import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const NewsCard = ({ article }) => {
  return (
    <Link to={`/news`} className="group flex flex-col bg-navy-900 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-colors h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-navy-950/80 backdrop-blur-sm text-gold-500 text-xs font-semibold tracking-wider uppercase rounded">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-gray-400 mb-3">
          {format(new Date(article.date), 'MMM dd, yyyy')} • {article.readTime}
        </div>
        <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center text-gold-500 text-sm font-medium uppercase tracking-wider">
          Read Article
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;