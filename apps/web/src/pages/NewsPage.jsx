import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    date: 'October 12, 2026',
    title: 'Aeronautics LLC Expands Ground Handling Operations',
    excerpt: 'To accommodate increased international cargo traffic, operations have been expanded at regional domestic airports with new GSE deployments.',
  },
  {
    id: 2,
    date: 'September 28, 2026',
    title: 'Winter Operations Readiness 2026/2027 Complete',
    excerpt: 'Ground teams have successfully completed advanced de-icing logistics training ensuring uninterrupted service through the winter season.',
  },
  {
    id: 3,
    date: 'August 15, 2026',
    title: 'Optimized Diplomatic Clearance Protocols',
    excerpt: 'Aeronautics LLC has formalized new regulatory relationships to reduce flight permit lead times for short-notice ambulance flights by 40%.',
  },
  {
    id: 4,
    date: 'July 05, 2026',
    title: 'Annual IS-BAH Compliance Audit Successful',
    excerpt: 'Internal quality management systems have passed the annual compliance review, reinforcing commitment to international safety standards.',
  },
  {
    id: 5,
    date: 'June 20, 2026',
    title: 'New Aviation Training Curriculum Launched',
    excerpt: 'The consulting division has rolled out an updated regulatory compliance training module for local ground support personnel.',
  },
  {
    id: 6,
    date: 'May 10, 2026',
    title: 'Strategic Partnership with Pacific Aero Charter',
    excerpt: 'Aeronautics LLC is proud to be selected as the exclusive ground handling partner for Pacific Aero Charter operations in Mongolia.',
  }
];

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>News & Updates | Aeronautics LLC</title>
        <meta name="description" content="Latest corporate news, operational updates, and aviation industry insights from Aeronautics LLC." />
      </Helmet>

      <main className="bg-background min-h-screen">
        
        {/* Page Header */}
        <section className="bg-section-bg py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">News & Updates</h1>
              <p className="text-lg text-secondary-text">
                Corporate announcements, operational readiness updates, and aviation regulatory news for Mongolian airspace.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, idx) => (
                <article key={article.id} className={`p-8 rounded-lg border border-border flex flex-col ${idx % 2 === 1 ? 'bg-section-bg' : 'bg-white'}`}>
                  <time className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
                    {article.date}
                  </time>
                  <h2 className="text-xl font-bold text-foreground mb-4 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-secondary-text mb-8 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-primary font-semibold text-sm hover:underline mt-auto">
                    Read Full Update <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default NewsPage;