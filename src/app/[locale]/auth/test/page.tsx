'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AuthTestPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${msg}`;
    setLogs(prev => [...prev, logMessage]);
    console.log(logMessage);
  };

  const testGoogleLogin = async () => {
    setLoading(true);
    setMessage('');
    setLogs([]);
    
    try {
      addLog('Starting Google OAuth test...');
      
      const supabase = createClient();
      
      // Get the current URL for redirect
      const origin = window.location.origin;
      const redirectTo = `${origin}/auth/callback`;
      
      addLog(`Using redirect URL: ${redirectTo}`);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectTo,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      
      if (error) {
        addLog(`Error: ${error.message}`);
        setMessage(`Error: ${error.message}`);
      } else if (data?.url) {
        addLog(`Success! OAuth URL generated`);
        addLog(`Redirecting to: ${data.url}`);
        setMessage('Redirecting to Google...');
        
        // Add a small delay for user to see the message
        setTimeout(() => {
          window.location.href = data.url;
        }, 500);
      } else {
        addLog('No URL returned from OAuth request');
        setMessage('Failed to generate OAuth URL');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      addLog(`Exception: ${errorMsg}`);
      setMessage(`Exception: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const testDirectAuth = async () => {
    setLoading(true);
    setMessage('');
    setLogs([]);
    
    try {
      addLog('Testing direct Supabase connection...');
      
      const supabase = createClient();
      
      // Test getting session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        addLog(`Session error: ${sessionError.message}`);
      } else if (session) {
        addLog(`Active session found: ${session.user.email}`);
        setMessage(`Logged in as: ${session.user.email}`);
      } else {
        addLog('No active session');
        setMessage('No active session');
      }
      
      // Test getting user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        addLog(`User error: ${userError.message}`);
      } else if (user) {
        addLog(`User found: ${user.email}`);
        addLog(`User ID: ${user.id}`);
        addLog(`Provider: ${user.app_metadata?.provider}`);
      } else {
        addLog('No user found');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      addLog(`Exception: ${errorMsg}`);
      setMessage(`Exception: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const clearSession = async () => {
    setLoading(true);
    try {
      addLog('Clearing session...');
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        addLog(`Sign out error: ${error.message}`);
        setMessage(`Error: ${error.message}`);
      } else {
        addLog('Session cleared successfully');
        setMessage('Signed out successfully');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      addLog(`Exception: ${errorMsg}`);
      setMessage(`Exception: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">OAuth Test Page</h1>
        
        {/* Environment Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Environment</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Current Origin:</strong> {typeof window !== 'undefined' ? window.location.origin : 'N/A'}</p>
            <p><strong>Expected Callback:</strong> {typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : 'N/A'}</p>
            <p><strong>Supabase URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
          </div>
        </div>

        {/* Test Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Actions</h2>
          <div className="space-x-4">
            <button
              onClick={testGoogleLogin}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Test Google OAuth
            </button>
            <button
              onClick={testDirectAuth}
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              Check Auth Status
            </button>
            <button
              onClick={clearSession}
              disabled={loading}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
            >
              Clear Session
            </button>
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div className={`rounded-lg p-4 mb-6 ${
            message.includes('Error') || message.includes('Exception') 
              ? 'bg-red-100 text-red-700' 
              : 'bg-green-100 text-green-700'
          }`}>
            {message}
          </div>
        )}

        {/* Logs */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Debug Logs</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs h-64 overflow-y-auto">
            {logs.length === 0 ? (
              <div className="text-gray-500">No logs yet. Click a test button to start.</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1">{log}</div>
              ))
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-6 mt-6">
          <h3 className="font-semibold text-blue-900 mb-2">Testing Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
            <li>Click "Check Auth Status" to see if you're already logged in</li>
            <li>If logged in, click "Clear Session" to sign out</li>
            <li>Click "Test Google OAuth" to initiate Google login</li>
            <li>Watch the logs for any errors or issues</li>
            <li>After OAuth, you should be redirected back to /auth/callback</li>
          </ol>
        </div>
      </div>
    </div>
  );
}