'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function signInWithGoogleDebug() {
  const debugInfo: any = {
    timestamp: new Date().toISOString(),
    steps: [],
    error: null,
    success: false
  };

  try {
    debugInfo.steps.push('Starting signInWithGoogleDebug');
    
    // Step 1: Create Supabase client
    debugInfo.steps.push('Creating Supabase client...');
    const supabase = await createClient();
    debugInfo.steps.push('Supabase client created');
    
    // Step 2: Get headers
    debugInfo.steps.push('Getting headers...');
    const headersList = await headers();
    
    // Log all headers for debugging
    const headersObj: any = {};
    headersList.forEach((value, key) => {
      headersObj[key] = value;
    });
    debugInfo.headers = headersObj;
    debugInfo.steps.push(`Headers retrieved: ${JSON.stringify(Object.keys(headersObj))}`);
    
    // Step 3: Determine origin
    let origin = headersList.get('origin');
    debugInfo.originFromHeader = origin;
    
    if (!origin) {
      const host = headersList.get('x-forwarded-host') || headersList.get('host');
      const proto = headersList.get('x-forwarded-proto') || 'https';
      origin = host ? `${proto}://${host}` : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      debugInfo.constructedOrigin = origin;
      debugInfo.host = host;
      debugInfo.proto = proto;
      debugInfo.envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    }
    
    debugInfo.finalOrigin = origin;
    debugInfo.steps.push(`Final origin: ${origin}`);
    
    // Step 4: Check environment variables
    debugInfo.env = {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'NOT SET',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'NOT SET',
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'NOT SET',
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET'
    };
    debugInfo.steps.push('Environment variables checked');
    
    // Step 5: Call Supabase OAuth
    debugInfo.steps.push('Calling supabase.auth.signInWithOAuth...');
    const redirectTo = `${origin}/auth/callback`;
    debugInfo.redirectTo = redirectTo;
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
      },
    });
    
    if (error) {
      debugInfo.steps.push(`OAuth error: ${error.message}`);
      debugInfo.error = {
        message: error.message,
        details: error
      };
      console.error('🔴 Debug OAuth error:', error);
      return { 
        error: error.message,
        debugInfo 
      };
    }
    
    debugInfo.steps.push('OAuth call successful');
    debugInfo.oauthData = data;
    
    if (data.url) {
      debugInfo.steps.push(`Redirect URL received: ${data.url}`);
      debugInfo.success = true;
      
      // Don't actually redirect in debug mode, return the URL
      return {
        success: true,
        redirectUrl: data.url,
        debugInfo
      };
    } else {
      debugInfo.steps.push('No redirect URL received');
      return {
        error: 'No redirect URL received from Supabase',
        debugInfo
      };
    }
  } catch (err: any) {
    debugInfo.steps.push(`Caught exception: ${err.message}`);
    debugInfo.error = {
      message: err.message,
      stack: err.stack,
      name: err.name
    };
    console.error('🔴 Unexpected error in signInWithGoogleDebug:', err);
    return { 
      error: `Exception: ${err.message}`,
      debugInfo 
    };
  }
}