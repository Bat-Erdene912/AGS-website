import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { useNewsArticles } from '@/hooks/useNewsArticles';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

const NewsDetailPage = () => {
  const { id } = useParams();
  const { getArticleById, getRelatedArticles, loading } = useNewsArticles();
  
  const article = getArticleById(id);
  const relatedArticles = getRelatedArticles(id, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard');
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const formattedDate = format(new Date(article.date), 'MMMM dd, yyyy');

  return (
    <>
      <Helmet>
        <title>{`${article.title} - Aeronautics LLC Mongolia`}</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Article Header */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button asChild variant="ghost" size="sm" className="mb-6">
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to News
                </Link>
              </Button>

              <div className="mb-6">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {article.author}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Share:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare('copy')}
                  aria-label="Copy link"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Author Info */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-lg">{article.author}</div>
                  <div className="text-sm text-muted-foreground">Contributing Author</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Related articles
                </h2>
                <p className="text-lg text-muted-foreground">
                  More news from {article.category}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <NewsCard article={relatedArticle} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default NewsDetailPage;