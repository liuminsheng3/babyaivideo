import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') ?? '/en/dashboard';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Successfully authenticated, redirect to dashboard or next page
      return NextResponse.redirect(new URL(next, requestUrl.origin));
    } else {
      console.error('Auth callback error:', error);
      // Authentication failed, redirect to sign in with error
      return NextResponse.redirect(new URL('/en/auth/signin?error=auth_failed', requestUrl.origin));
    }
  }

  // No code present, redirect to sign in
  return NextResponse.redirect(new URL('/en/auth/signin', requestUrl.origin));
}