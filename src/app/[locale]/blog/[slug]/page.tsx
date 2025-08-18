import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

function formatBlogContent(content: string): string {
  // Split content into lines
  const lines = content.split('\n');
  const formattedLines = [];
  let inParagraph = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === '') {
      if (inParagraph) {
        formattedLines.push('</p>');
        inParagraph = false;
      }
      continue;
    }
    
    // Convert markdown headers to HTML
    if (line.startsWith('### ')) {
      if (inParagraph) {
        formattedLines.push('</p>');
        inParagraph = false;
      }
      formattedLines.push(`<h3>${line.slice(4)}</h3>`);
    } else if (line.startsWith('## ')) {
      if (inParagraph) {
        formattedLines.push('</p>');
        inParagraph = false;
      }
      formattedLines.push(`<h2>${line.slice(3)}</h2>`);
    } else if (line.startsWith('# ')) {
      if (inParagraph) {
        formattedLines.push('</p>');
        inParagraph = false;
      }
      formattedLines.push(`<h1>${line.slice(2)}</h1>`);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      // Convert bold markdown to strong tag
      if (inParagraph) {
        formattedLines.push('</p>');
        inParagraph = false;
      }
      formattedLines.push(`<h4>${line.slice(2, -2)}</h4>`);
    } else if (line.startsWith('- ')) {
      // Handle list items
      if (inParagraph) {
        formattedLines.push('</p>');
        inParagraph = false;
      }
      if (i === 0 || !lines[i-1].trim().startsWith('- ')) {
        formattedLines.push('<ul>');
      }
      formattedLines.push(`<li>${line.slice(2)}</li>`);
      if (i === lines.length - 1 || !lines[i+1].trim().startsWith('- ')) {
        formattedLines.push('</ul>');
      }
    } else {
      // Regular paragraph text
      if (!inParagraph) {
        formattedLines.push('<p>');
        inParagraph = true;
      }
      // Convert inline bold
      const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formattedLines.push(processedLine);
    }
  }
  
  if (inParagraph) {
    formattedLines.push('</p>');
  }
  
  return formattedLines.join(' ');
}

export async function generateStaticParams() {
  const slugs = blogPosts.map(post => post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  
  return slugs.map(slug => ({
    slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  
  if (!post) return {};
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  
  return (
    <>
      <Navbar />
      <article className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Back button */}
          <Link 
            href="../" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          {/* Article header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="capitalize">{post.category}</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>
          
          {/* Featured image */}
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={`${post.title} - Baby AI Video Generator blog article`}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
              className="[&>p]:mb-6 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mt-6 [&>h4]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:text-gray-700"
            />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Author info */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <div className="font-semibold text-gray-900 mb-2">About the Author</div>
            <div className="text-gray-600">
              Written by <span className="font-medium">{post.author}</span>, 
              an AI technology expert specializing in video generation and machine learning applications.
            </div>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`../${relatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="group"
                  >
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={`Related article: ${relatedPost.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{relatedPost.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}