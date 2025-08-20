import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const error = requestUrl.searchParams.get('error');
  const error_description = requestUrl.searchParams.get('error_description');
  const next = requestUrl.searchParams.get('next') ?? '/en/dashboard';

  console.log('🔐 Auth callback received:', {
    code: code ? 'present' : 'missing',
    error,
    error_description,
    url: request.url,
    host: requestUrl.host,
    origin: requestUrl.origin,
    searchParams: Object.fromEntries(requestUrl.searchParams.entries())
  });

  // Handle OAuth errors
  if (error) {
    console.error('❌ OAuth error:', error, error_description);
    // For access_denied, user cancelled the OAuth flow
    if (error === 'access_denied') {
      return NextResponse.redirect(
        new URL('/en/auth/signin', requestUrl.origin)
      );
    }
    return NextResponse.redirect(
      new URL(`/en/auth/signin?error=${encodeURIComponent(error_description || error)}`, requestUrl.origin)
    );
  }

  if (code) {
    try {
      const supabase = await createClient();
      
      console.log('🔄 Exchanging code for session...');
      const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (sessionError) {
        console.error('❌ Session exchange error:', sessionError);
        return NextResponse.redirect(
          new URL(`/en/auth/signin?error=${encodeURIComponent(sessionError.message || 'Failed to authenticate')}`, requestUrl.origin)
        );
      }
      
      if (!data?.session) {
        console.error('❌ No session data received');
        return NextResponse.redirect(
          new URL('/en/auth/signin?error=No%20session%20created', requestUrl.origin)
        );
      }
      
      console.log('✅ Auth successful!');
      console.log('👤 User:', data.session.user.email);
      console.log('📍 Redirecting to:', next);
      
      // Verify session is active
      const { data: { session: verifySession } } = await supabase.auth.getSession();
      console.log('🔍 Session verification:', verifySession ? 'Active' : 'Not found');
      
      // Force redirect with a fresh response
      const redirectUrl = new URL(next, requestUrl.origin);
      console.log('🚀 Final redirect URL:', redirectUrl.toString());
      
      const response = NextResponse.redirect(redirectUrl);
      
      // Set multiple cookies to ensure session persistence
      response.cookies.set('auth-success', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 10,
        path: '/'
      });
      
      // Add cache control headers to prevent browser caching issues
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.headers.set('Pragma', 'no-cache');
      response.headers.set('Expires', '0');
      
      return response;
    } catch (err) {
      console.error('💥 Unexpected error in auth callback:', err);
      // Log more details about the error
      if (err instanceof Error) {
        console.error('Error details:', {
          message: err.message,
          stack: err.stack
        });
      }
      
      return NextResponse.redirect(
        new URL('/en/auth/signin?error=Authentication%20failed', requestUrl.origin)
      );
    }
  }

  // No code present, redirect to sign in
  console.log('⚠️ No code in callback, redirecting to signin');
  return NextResponse.redirect(new URL('/en/auth/signin', requestUrl.origin));
}