/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ['gwwvqayyzdxmckyphwge.supabase.co'],
  },
  
  // Handle redirects properly for SEO
  async redirects() {
    return [
      // Specific page redirects only - no domain redirects here
      {
        source: '/signin',
        destination: '/en/auth/signin',
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/en/auth/signup',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/en/auth/signin',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/en/auth/signup',
        permanent: true,
      },
    ];
  },
  
  // Add canonical headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/dashboard/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/auth/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);