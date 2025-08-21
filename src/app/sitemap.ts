import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.babyaivideo.com'; // Use www version
  
  const locales = ['en', 'zh'];
  
  // Define all public pages with their properties
  const pages = [
    { path: '', changeFrequency: 'daily' as const, priority: 1 },
    { path: '/pricing', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/careers', changeFrequency: 'weekly' as const, priority: 0.6 },
    { path: '/status', changeFrequency: 'hourly' as const, priority: 0.5 },
    { path: '/api-docs', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/docs', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/tutorials', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
    { path: '/help', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/privacy', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/terms', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/notes', changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const urls: MetadataRoute.Sitemap = [];
  
  // Add root URL (redirects to /en)
  urls.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  });

  // Add all pages for each locale
  locales.forEach(locale => {
    pages.forEach(page => {
      urls.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });
  });

  return urls;
}