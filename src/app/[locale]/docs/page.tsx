'use client';

import { useState } from 'react';
import { 
  Book, Search, ChevronRight, Home, PlayCircle, 
  Settings, CreditCard, Shield, Zap, HelpCircle,
  FileText, Video, Image, Download, Upload,
  Users, Globe, Cpu, BarChart, AlertCircle,
  CheckCircle, Clock, Star, ArrowRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Home className="w-5 h-5" />,
      articles: [
        { title: 'Welcome to BabyAI Video', slug: 'welcome', readTime: '2 min' },
        { title: 'Quick Start Guide', slug: 'quick-start', readTime: '5 min' },
        { title: 'Creating Your First Video', slug: 'first-video', readTime: '3 min' },
        { title: 'Understanding Credits', slug: 'credits', readTime: '4 min' }
      ]
    },
    {
      id: 'video-generation',
      title: 'Video Generation',
      icon: <Video className="w-5 h-5" />,
      articles: [
        { title: 'Writing Effective Prompts', slug: 'prompts', readTime: '6 min' },
        { title: 'Choosing Video Styles', slug: 'styles', readTime: '4 min' },
        { title: 'Video Quality Settings', slug: 'quality', readTime: '3 min' },
        { title: 'Advanced Generation Options', slug: 'advanced', readTime: '7 min' }
      ]
    },
    {
      id: 'account-billing',
      title: 'Account & Billing',
      icon: <CreditCard className="w-5 h-5" />,
      articles: [
        { title: 'Managing Your Account', slug: 'account', readTime: '4 min' },
        { title: 'Subscription Plans', slug: 'plans', readTime: '5 min' },
        { title: 'Billing & Payments', slug: 'billing', readTime: '3 min' },
        { title: 'Referral Program', slug: 'referrals', readTime: '2 min' }
      ]
    },
    {
      id: 'api-integration',
      title: 'API & Integration',
      icon: <Cpu className="w-5 h-5" />,
      articles: [
        { title: 'API Overview', slug: 'api-overview', readTime: '5 min' },
        { title: 'Authentication', slug: 'auth', readTime: '4 min' },
        { title: 'Webhooks Setup', slug: 'webhooks', readTime: '6 min' },
        { title: 'SDK Installation', slug: 'sdk', readTime: '3 min' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <HelpCircle className="w-5 h-5" />,
      articles: [
        { title: 'Common Issues', slug: 'common-issues', readTime: '5 min' },
        { title: 'Video Generation Errors', slug: 'errors', readTime: '4 min' },
        { title: 'Account Recovery', slug: 'recovery', readTime: '3 min' },
        { title: 'Contact Support', slug: 'support', readTime: '2 min' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to Write Perfect Prompts', category: 'Video Generation', views: '12.3k' },
    { title: 'Understanding Credit System', category: 'Getting Started', views: '9.8k' },
    { title: 'Choosing the Right Style', category: 'Video Generation', views: '8.2k' },
    { title: 'API Quick Start Guide', category: 'API & Integration', views: '7.5k' },
    { title: 'Troubleshooting Failed Videos', category: 'Troubleshooting', views: '6.9k' }
  ];

  const videoTutorials = [
    { title: 'Getting Started with BabyAI', duration: '3:45', thumbnail: '/api/placeholder/320/180' },
    { title: 'Advanced Prompt Techniques', duration: '5:20', thumbnail: '/api/placeholder/320/180' },
    { title: 'API Integration Tutorial', duration: '8:15', thumbnail: '/api/placeholder/320/180' }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  type ArticleWithCategory = {
    title: string;
    slug: string;
    readTime: string;
    category?: string;
  };

  const filteredArticles: ArticleWithCategory[] = searchQuery
    ? categories.flatMap(cat => 
        cat.articles
          .filter(article => 
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(article => ({ ...article, category: cat.title }))
      )
    : currentCategory?.articles || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl mb-8 opacity-90">
            Everything you need to know about using BabyAI Video
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tutorials"
              className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition"
            >
              <PlayCircle className="w-4 h-4" />
              Video Tutorials
            </Link>
            <Link
              href="/api-docs"
              className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition"
            >
              <Cpu className="w-4 h-4" />
              API Reference
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition"
            >
              <HelpCircle className="w-4 h-4" />
              Get Help
            </Link>
            <a
              href="https://github.com/babyai/examples"
              className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Code Examples
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-4 space-y-2">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    selectedCategory === category.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span className="text-sm font-medium">{category.title}</span>
                  <span className="ml-auto text-xs text-gray-400">
                    {category.articles.length}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {searchQuery ? (
              // Search Results
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Search Results for "{searchQuery}"
                </h2>
                {filteredArticles.length > 0 ? (
                  <div className="space-y-4">
                    {filteredArticles.map((article, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {article.title}
                            </h3>
                            {article.category && (
                              <p className="text-sm text-gray-500 mb-2">{article.category}</p>
                            )}
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No results found. Try a different search term.</p>
                  </div>
                )}
              </section>
            ) : (
              <>
                {/* Category Articles */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentCategory?.title}
                  </h2>
                  <div className="space-y-4">
                    {currentCategory?.articles.map((article, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {article.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                Article
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Popular Articles */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
                  <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
                    {popularArticles.map((article, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50 transition">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{article.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">{article.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{article.views} views</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Video Tutorials */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Video Tutorials</h2>
                    <Link
                      href="/tutorials"
                      className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
                    >
                      View All
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {videoTutorials.map((video, index) => (
                      <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition">
                        <div className="relative aspect-video bg-gray-200">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                              <PlayCircle className="w-6 h-6 text-purple-600" />
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                            {video.duration}
                          </span>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-900">{video.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Help Section */}
            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Still Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
                    >
                      Contact Support
                    </Link>
                    <a
                      href="https://community.babyaivideo.com"
                      className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition font-medium border border-purple-600"
                    >
                      Join Community
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Feedback */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Was this helpful?</h3>
              <div className="flex items-center gap-3 mb-4">
                <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Yes
                </button>
                <button className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  No
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Your feedback helps us improve our documentation
              </p>
            </section>
          </main>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Videos?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start generating AI-powered baby videos in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Get Started Free
            </Link>
            <Link
              href="/tutorials"
              className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Watch Tutorials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}