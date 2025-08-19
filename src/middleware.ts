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
  
  // Skip middleware for auth routes that shouldn't have locale prefix
  if (pathname.startsWith('/auth/') || pathname.startsWith('/api/')) {
    console.log('[Middleware] Skipping for auth/api route:', pathname);
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