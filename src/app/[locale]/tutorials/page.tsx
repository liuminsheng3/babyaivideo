'use client';

import { useState } from 'react';
import { 
  PlayCircle, Clock, User, Calendar, ThumbsUp,
  Filter, Search, ChevronRight, Star, BookOpen,
  Download, Share2, Eye, Heart, MessageCircle,
  TrendingUp, Award, Zap, Sparkles, Video,
  Layers, Settings, Code, Palette, Globe
} from 'lucide-react';
import Link from 'next/link';

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Tutorials', count: 48 },
    { id: 'getting-started', name: 'Getting Started', count: 8, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'prompting', name: 'Prompting Techniques', count: 12, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'styles', name: 'Video Styles', count: 10, icon: <Palette className="w-4 h-4" /> },
    { id: 'advanced', name: 'Advanced Features', count: 8, icon: <Settings className="w-4 h-4" /> },
    { id: 'api', name: 'API & Integration', count: 6, icon: <Code className="w-4 h-4" /> },
    { id: 'business', name: 'Business Use Cases', count: 4, icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const tutorials = [
    {
      id: '1',
      title: 'Getting Started with BabyAI Video',
      description: 'Learn the basics of creating your first AI-generated baby video',
      category: 'getting-started',
      level: 'beginner',
      duration: '5:32',
      views: '45.2k',
      likes: '2.1k',
      instructor: 'Sarah Chen',
      thumbnail: '/api/placeholder/640/360',
      featured: true,
      new: true
    },
    {
      id: '2',
      title: 'Mastering Prompt Engineering',
      description: 'Advanced techniques for writing prompts that generate amazing videos',
      category: 'prompting',
      level: 'intermediate',
      duration: '12:45',
      views: '32.8k',
      likes: '1.8k',
      instructor: 'Michael Park',
      thumbnail: '/api/placeholder/640/360',
      featured: true
    },
    {
      id: '3',
      title: 'Exploring Video Styles: Realistic vs Cartoon',
      description: 'Compare different video styles and learn when to use each',
      category: 'styles',
      level: 'beginner',
      duration: '8:20',
      views: '28.5k',
      likes: '1.5k',
      instructor: 'Emily Watson',
      thumbnail: '/api/placeholder/640/360'
    },
    {
      id: '4',
      title: 'API Integration: Building Your First App',
      description: 'Step-by-step guide to integrating BabyAI API into your application',
      category: 'api',
      level: 'advanced',
      duration: '18:30',
      views: '15.3k',
      likes: '980',
      instructor: 'David Kim',
      thumbnail: '/api/placeholder/640/360'
    },
    {
      id: '5',
      title: 'Creating Consistent Characters',
      description: 'Tips for maintaining character consistency across multiple videos',
      category: 'advanced',
      level: 'intermediate',
      duration: '10:15',
      views: '22.7k',
      likes: '1.3k',
      instructor: 'Sarah Chen',
      thumbnail: '/api/placeholder/640/360',
      new: true
    },
    {
      id: '6',
      title: 'Business Case: Social Media Content',
      description: 'How to create engaging social media videos with BabyAI',
      category: 'business',
      level: 'intermediate',
      duration: '14:22',
      views: '18.9k',
      likes: '1.1k',
      instructor: 'Michael Park',
      thumbnail: '/api/placeholder/640/360'
    },
    {
      id: '7',
      title: 'Understanding Credit Optimization',
      description: 'Maximize your credits with smart generation strategies',
      category: 'getting-started',
      level: 'beginner',
      duration: '6:45',
      views: '25.4k',
      likes: '1.4k',
      instructor: 'Emily Watson',
      thumbnail: '/api/placeholder/640/360'
    },
    {
      id: '8',
      title: 'Advanced Lighting and Composition',
      description: 'Professional tips for better visual quality in your videos',
      category: 'advanced',
      level: 'advanced',
      duration: '15:50',
      views: '12.8k',
      likes: '890',
      instructor: 'David Kim',
      thumbnail: '/api/placeholder/640/360'
    }
  ];

  const playlists = [
    {
      title: 'Complete Beginner Course',
      videos: 12,
      duration: '2h 15m',
      thumbnail: '/api/placeholder/320/180',
      progress: 65
    },
    {
      title: 'Prompt Mastery Series',
      videos: 8,
      duration: '1h 45m',
      thumbnail: '/api/placeholder/320/180',
      progress: 30
    },
    {
      title: 'API Developer Guide',
      videos: 6,
      duration: '2h 30m',
      thumbnail: '/api/placeholder/320/180',
      progress: 0
    }
  ];

  const instructors = [
    { name: 'Sarah Chen', role: 'Product Expert', videos: 15, rating: 4.9 },
    { name: 'Michael Park', role: 'Creative Director', videos: 12, rating: 4.8 },
    { name: 'Emily Watson', role: 'AI Specialist', videos: 10, rating: 4.9 },
    { name: 'David Kim', role: 'Lead Developer', videos: 8, rating: 4.7 }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-6">Video Tutorials</h1>
          <p className="text-xl mb-8 opacity-90">
            Learn how to create amazing AI videos with our comprehensive tutorial library
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold">48</div>
              <div className="text-purple-200">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12h</div>
              <div className="text-purple-200">Total Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold">250k+</div>
              <div className="text-purple-200">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-purple-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>

              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Layers className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Tutorials */}
            {filteredTutorials.some(t => t.featured) && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Featured Tutorials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTutorials.filter(t => t.featured).map((tutorial) => (
                    <div key={tutorial.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition">
                      <div className="relative aspect-video bg-gray-200">
                        <img
                          src={tutorial.thumbnail}
                          alt={tutorial.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <PlayCircle className="w-8 h-8 text-purple-600 ml-1" />
                          </button>
                        </div>
                        <span className="absolute top-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                          Featured
                        </span>
                        {tutorial.new && (
                          <span className="absolute top-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            New
                          </span>
                        )}
                        <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                          {tutorial.duration}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tutorial.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {tutorial.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {tutorial.likes}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Tutorials */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTutorials.map((tutorial) => (
                    <div key={tutorial.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
                      <div className="relative aspect-video bg-gray-200">
                        <img
                          src={tutorial.thumbnail}
                          alt={tutorial.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <PlayCircle className="w-6 h-6 text-purple-600 ml-0.5" />
                          </button>
                        </div>
                        {tutorial.new && (
                          <span className="absolute top-2 left-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            New
                          </span>
                        )}
                        <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                          {tutorial.duration}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{tutorial.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{tutorial.instructor}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {tutorial.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {tutorial.likes}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredTutorials.map((tutorial) => (
                    <div key={tutorial.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition">
                      <div className="flex gap-4">
                        <div className="relative w-48 h-27 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={tutorial.thumbnail}
                            alt={tutorial.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                            {tutorial.duration}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{tutorial.title}</h3>
                              <p className="text-sm text-gray-600 mb-2">{tutorial.description}</p>
                              <p className="text-sm text-gray-500 mb-3">By {tutorial.instructor}</p>
                            </div>
                            {tutorial.new && (
                              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                                New
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                              {tutorial.level}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <Eye className="w-3 h-3" />
                              {tutorial.views}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <ThumbsUp className="w-3 h-3" />
                              {tutorial.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Learning Paths */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Learning Paths</h3>
              <div className="space-y-4">
                {playlists.map((playlist, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-20 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={playlist.thumbnail}
                          alt={playlist.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition">
                          {playlist.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {playlist.videos} videos • {playlist.duration}
                        </p>
                        {playlist.progress > 0 && (
                          <div className="mt-2">
                            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-600 rounded-full"
                                style={{ width: `${playlist.progress}%` }}
                              />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{playlist.progress}% complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructors */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Top Instructors</h3>
              <div className="space-y-4">
                {instructors.map((instructor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{instructor.name}</h4>
                      <p className="text-xs text-gray-500">{instructor.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-gray-700">{instructor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{instructor.videos} videos</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Tips */}
            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Pro Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Start with beginner tutorials to understand the basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Practice with the examples shown in each video</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Join our community to share your creations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Save tutorials to watch later</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Creating?</h2>
          <p className="text-xl mb-8 opacity-90">
            Put your new skills to work and create amazing AI videos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard/create"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Start Creating
            </Link>
            <Link
              href="/docs"
              className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}