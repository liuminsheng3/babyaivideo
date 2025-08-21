import SignInForm from '@/components/auth/SignInForm';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function SignInPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  // If already logged in, redirect to dashboard
  if (session) {
    redirect(`/${locale}/dashboard`);
  }
  
  return <SignInForm />;
}