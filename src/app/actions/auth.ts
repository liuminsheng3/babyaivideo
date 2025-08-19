'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { 
    success: true, 
    message: 'Check your email to confirm your account!' 
  };
}

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Provide more specific error messages based on error code
    let errorMessage = error.message;
    
    // Common Supabase auth error codes
    if (error.message === 'Invalid login credentials') {
      errorMessage = 'Invalid email or password. Please check your credentials and try again.';
    } else if (error.message === 'Email not confirmed') {
      errorMessage = 'Please verify your email address before signing in. Check your inbox for the verification email.';
    } else if (error.message.includes('Email link is invalid or has expired')) {
      errorMessage = 'Your verification link has expired. Please request a new verification email.';
    } else if (error.message.includes('User not found')) {
      errorMessage = 'No account found with this email. Please sign up first.';
    }
    
    // Check if user exists but email is unverified
    if (data?.user && !data.user.email_confirmed_at) {
      errorMessage = 'Please verify your email address. Check your inbox for the verification email.';
    }
    
    return { error: errorMessage };
  }

  redirect('/en/dashboard');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}

export async function signInWithGoogle() {
  try {
    const supabase = await createClient();
    const headersList = await headers();
    
    // Get the origin from various possible sources
    let origin = headersList.get('origin');
    
    if (!origin) {
      const host = headersList.get('x-forwarded-host') || headersList.get('host');
      const proto = headersList.get('x-forwarded-proto') || 'https';
      origin = host ? `${proto}://${host}` : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    }

    console.log('OAuth redirect origin:', origin);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Google OAuth error:', error);
      return { error: error.message };
    }

    if (data.url) {
      redirect(data.url);
    }
  } catch (err) {
    console.error('Unexpected error in signInWithGoogle:', err);
    return { error: 'Failed to initiate Google sign-in' };
  }
}

export async function signInWithGitHub() {
  try {
    const supabase = await createClient();
    const headersList = await headers();
    
    // Get the origin from various possible sources
    let origin = headersList.get('origin');
    
    if (!origin) {
      const host = headersList.get('x-forwarded-host') || headersList.get('host');
      const proto = headersList.get('x-forwarded-proto') || 'https';
      origin = host ? `${proto}://${host}` : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    }

    console.log('GitHub OAuth redirect origin:', origin);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('GitHub OAuth error:', error);
      return { error: error.message };
    }

    if (data.url) {
      redirect(data.url);
    }
  } catch (err) {
    console.error('Unexpected error in signInWithGitHub:', err);
    return { error: 'Failed to initiate GitHub sign-in' };
  }
}

export async function resetPassword(formData: FormData) {
  const email = formData.get('email') as string;
  const supabase = await createClient();
  
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
  });

  if (error) {
    return { error: error.message };
  }

  return { 
    success: true, 
    message: 'Check your email for password reset instructions' 
  };
}

export async function updatePassword(password: string) {
  const supabase = await createClient();
  
  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function getUser() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  return user;
}

export async function getSession() {
  const supabase = await createClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  return session;
}

export async function resendVerificationEmail(email: string) {
  const supabase = await createClient();
  
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email: email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    }
  });

  if (error) {
    return { error: error.message };
  }

  return { 
    success: true, 
    message: 'Verification email sent! Please check your inbox.' 
  };
}