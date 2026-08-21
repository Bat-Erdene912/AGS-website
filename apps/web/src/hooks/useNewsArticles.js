import { useState, useEffect } from 'react';

const mockNews = [
  {
    id: '1',
    title: 'Aeronautics LLC Expands Ground Handling Operations at Chinggis Khaan International',
    excerpt: 'We are proud to announce the expansion of our 24/7 ground handling services to accommodate increased international traffic.',
    category: 'Operations',
    date: '2026-05-28',
    image: 'https://images.unsplash.com/photo-1686778278295-e119e84e2e59',
    readTime: '4 min read'
  },
  {
    id: '2',
    title: 'Strategic Partnership with Global Aviation Network',
    excerpt: 'Aeronautics LLC solidifies its position by joining forces with leading international flight support providers.',
    category: 'Partnerships',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1703277312811-f10d96bca2f6',
    readTime: '3 min read'
  },
  {
    id: '3',
    title: 'Winter Operations Readiness Program Complete',
    excerpt: 'Our ground teams have successfully completed rigorous winter operations training, ensuring uninterrupted service.',
    category: 'Training',
    date: '2026-04-22',
    image: 'https://images.unsplash.com/photo-1692081822085-6f6e154087cd',
    readTime: '5 min read'
  }
];

export function useNewsArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(mockNews);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { articles, loading };
}