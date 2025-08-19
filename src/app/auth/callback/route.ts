import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const error = requestUrl.searchParams.get('error');
  const error_description = requestUrl.searchParams.get('error_description');
  const next = requestUrl.searchParams.get('next') ?? '/en/dashboard';

  console.log('Auth callback received:', {
    code: code ? 'present' : 'missing',
    error,
    error_description,
    url: request.url
  });

  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error, error_description);
    return NextResponse.redirect(
      new URL(`/en/auth/signin?error=${encodeURIComponent(error_description || error)}`, requestUrl.origin)
    );
  }

  if (code) {
    try {
      const supabase = await createClient();
      const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (!sessionError) {
        console.log('Auth successful, redirecting to:', next);
        // Successfully authenticated, redirect to dashboard or next page
        return NextResponse.redirect(new URL(next, requestUrl.origin));
      } else {
        console.error('Session exchange error:', sessionError);
        // Authentication failed, redirect to sign in with error
        return NextResponse.redirect(
          new URL(`/en/auth/signin?error=${encodeURIComponent(sessionError.message)}`, requestUrl.origin)
        );
      }
    } catch (err) {
      console.error('Unexpected error in auth callback:', err);
      return NextResponse.redirect(
        new URL('/en/auth/signin?error=Authentication%20failed', requestUrl.origin)
      );
    }
  }

  // No code present, redirect to sign in
  console.log('No code in callback, redirecting to signin');
  return NextResponse.redirect(new URL('/en/auth/signin', requestUrl.origin));
}