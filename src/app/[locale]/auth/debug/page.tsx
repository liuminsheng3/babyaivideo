'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AuthDebugPage() {
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const router = useRouter();

  const addLog = (message: string) => {
    const timestamp = new Date().toISOString();
    setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    console.log(`[AuthDebug] ${message}`);
  };

  useEffect(() => {
    const checkAuth = async () => {
      addLog('Starting auth check...');
      
      try {
        const supabase = createClient();
        
        // Get current session
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          addLog(`Session error: ${sessionError.message}`);
        } else if (currentSession) {
          addLog(`Session found: ${currentSession.user.email}`);
          setSession(currentSession);
          setUser(currentSession.user);
        } else {
          addLog('No session found');
        }

        // Check for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          addLog(`Auth state changed: ${event}`);
          
          if (session) {
            addLog(`New session: ${session.user.email}`);
            setSession(session);
            setUser(session.user);
            
            if (event === 'SIGNED_IN') {
              addLog('User signed in, redirecting to dashboard in 2 seconds...');
              setTimeout(() => {
                router.push('/en/dashboard');
              }, 2000);
            }
          } else {
            addLog('Session cleared');
            setSession(null);
            setUser(null);
          }
        });

        // Get user details
        const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          addLog(`User error: ${userError.message}`);
        } else if (currentUser) {
          addLog(`User found: ${currentUser.email}`);
          setUser(currentUser);
        }

        setLoading(false);

        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        addLog(`Unexpected error: ${error}`);
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    addLog('Signing out...');
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      addLog(`Sign out error: ${error.message}`);
    } else {
      addLog('Signed out successfully');
      router.push('/en/auth/signin');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Auth Debug Page</h1>
        
        {/* Current Status */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Status</h2>
          <div className="space-y-2">
            <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
            <p><strong>Session:</strong> {session ? 'Active' : 'None'}</p>
            <p><strong>User Email:</strong> {user?.email || 'N/A'}</p>
            <p><strong>User ID:</strong> {user?.id || 'N/A'}</p>
            <p><strong>Email Verified:</strong> {user?.email_confirmed_at ? 'Yes' : 'No'}</p>
            <p><strong>Provider:</strong> {user?.app_metadata?.provider || 'N/A'}</p>
          </div>
        </div>

        {/* Environment Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Environment</h2>
          <div className="space-y-2">
            <p><strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'N/A'}</p>
            <p><strong>Origin:</strong> {typeof window !== 'undefined' ? window.location.origin : 'N/A'}</p>
            <p><strong>Site URL:</strong> {process.env.NEXT_PUBLIC_SITE_URL || 'Not set'}</p>
            <p><strong>Supabase URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not set'}</p>
          </div>
        </div>

        {/* User Details */}
        {user && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        )}

        {/* Session Details */}
        {session && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Session Details</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify({
                ...session,
                access_token: session.access_token ? '***hidden***' : null,
                refresh_token: session.refresh_token ? '***hidden***' : null
              }, null, 2)}
            </pre>
          </div>
        )}

        {/* Logs */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Debug Logs</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="space-x-4">
            {session ? (
              <>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Sign Out
                </button>
                <button
                  onClick={() => router.push('/en/dashboard')}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Go to Dashboard
                </button>
              </>
            ) : (
              <button
                onClick={() => router.push('/en/auth/signin')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Go to Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}