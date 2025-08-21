import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // Changed from 'always' to reduce redirects
  // Disable automatic locale detection based on browser settings
  localeDetection: false
});

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();
  
  // Add canonical URL header for SEO
  const canonicalUrl = `https://www.babyaivideo.com${pathname}`;
  response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`);
  
  // Skip middleware for auth callback route - CRITICAL
  if (pathname.startsWith('/auth/callback')) {
    console.log('[Middleware] Skipping for auth callback:', pathname);
    return NextResponse.next();
  }
  
  // Skip middleware for API routes
  if (pathname.startsWith('/api/')) {
    console.log('[Middleware] Skipping for api route:', pathname);
    return NextResponse.next();
  }
  
  // Skip middleware for static files
  if (pathname.startsWith('/_next/') || pathname.startsWith('/favicon.ico')) {
    return NextResponse.next();
  }
  
  // Check authentication for dashboard routes
  if (pathname.includes('/dashboard')) {
    console.log('[Middleware] Checking auth for dashboard route:', pathname);
    
    try {
      const supabase = await createClient();
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        console.log('[Middleware] No session, redirecting to signin');
        const locale = pathname.split('/')[1];
        const isValidLocale = ['en', 'zh'].includes(locale);
        const redirectLocale = isValidLocale ? locale : 'en';
        return NextResponse.redirect(new URL(`/${redirectLocale}/auth/signin`, request.url));
      }
      
      console.log('[Middleware] Session found for user:', session.user.email);
    } catch (error) {
      console.error('[Middleware] Error checking auth:', error);
    }
  }
  
  // Handle root path - redirect to /en for better SEO
  if (pathname === '/') {
    const response = NextResponse.redirect(new URL('/en', request.url), 301); // 301 permanent redirect
    response.headers.set('Cache-Control', 'public, max-age=3600');
    return response;
  }
  
  // Redirect /auth/signup and /auth/signin to localized versions with 301
  if (pathname === '/auth/signup') {
    return NextResponse.redirect(new URL('/en/auth/signup', request.url), 301);
  }
  if (pathname === '/auth/signin') {
    return NextResponse.redirect(new URL('/en/auth/signin', request.url), 301);
  }
  
  // Apply intl middleware for other routes
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes (/api/*)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public files (public/*)
    '/((?!api|_next/static|_next/image|favicon.ico|public|auth/callback).*)',
  ]
};