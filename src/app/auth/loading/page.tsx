'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AuthLoadingPage() {
  const router = useRouter();

  useEffect(() => {
    // Small delay to ensure session is set, then redirect
    const timer = setTimeout(() => {
      router.push('/en/dashboard');
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto" />
        <h2 className="text-2xl font-semibold text-gray-900">Welcome back!</h2>
        <p className="text-gray-600">Setting up your dashboard...</p>
      </div>
    </div>
  );
}