import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Disable automatic locale detection based on browser settings
  localeDetection: false
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for auth callback route
  if (pathname.startsWith('/auth/callback')) {
    console.log('[Middleware] Skipping for auth callback:', pathname);
    return NextResponse.next();
  }
  
  // Redirect /auth/signup and /auth/signin to localized versions
  if (pathname === '/auth/signup') {
    return NextResponse.redirect(new URL('/en/auth/signup', request.url));
  }
  if (pathname === '/auth/signin') {
    return NextResponse.redirect(new URL('/en/auth/signin', request.url));
  }
  
  // Skip middleware for API routes
  if (pathname.startsWith('/api/')) {
    console.log('[Middleware] Skipping for api route:', pathname);
    return NextResponse.next();
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