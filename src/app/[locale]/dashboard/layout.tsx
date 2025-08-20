import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import DashboardNav from '@/components/dashboard/DashboardNav';

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const supabase = await createClient();
  
  // Get session instead of just user for better reliability
  const { data: { session }, error } = await supabase.auth.getSession();

  if (!session || !session.user) {
    console.log('[Dashboard Layout] No session found, redirecting to signin');
    redirect(`/${locale}/auth/signin`);
  }
  
  console.log('[Dashboard Layout] User authenticated:', session.user.email);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav user={session.user} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}