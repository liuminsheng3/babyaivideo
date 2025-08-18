import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Latest insights, tips, and updates about Baby AI Video Generator
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">
                <Link href={`./${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={`${post.title} - Baby AI Video Generator ${post.category} article thumbnail`}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={`./${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-primary transition">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`./${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Categories filter */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(blogPosts.map(p => p.category))).map(category => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-100 hover:bg-primary/10 rounded-lg text-gray-700 hover:text-primary transition capitalize"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Popular tags */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap(p => p.tags))).slice(0, 15).map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-50 hover:bg-gray-100 rounded-full text-sm text-gray-600 transition cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}