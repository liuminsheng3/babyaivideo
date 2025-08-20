'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function OAuthDebugPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [authUrl, setAuthUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const addLog = (message: string, type: 'info' | 'error' | 'success' = 'info') => {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    const log = `[${timestamp}] ${prefix} ${message}`;
    setLogs(prev => [...prev, log]);
    console.log(log);
  };

  useEffect(() => {
    checkCurrentSession();
    checkEnvironment();
  }, []);

  const checkEnvironment = () => {
    addLog('=== Environment Check ===', 'info');
    addLog(`Current Origin: ${window.location.origin}`, 'info');
    addLog(`Expected Callback: ${window.location.origin}/auth/callback`, 'info');
    addLog(`Supabase URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL}`, 'info');
    
    // Check if we're on production
    if (window.location.hostname === 'babyaivideo.com' || window.location.hostname === 'www.babyaivideo.com') {
      addLog('Running in PRODUCTION', 'success');
    } else {
      addLog(`Running on: ${window.location.hostname}`, 'info');
    }
  };

  const checkCurrentSession = async () => {
    try {
      const supabase = createClient();
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        addLog(`Session check error: ${error.message}`, 'error');
      } else if (session) {
        addLog(`Active session found: ${session.user.email}`, 'success');
        addLog(`Provider: ${session.user.app_metadata?.provider}`, 'info');
      } else {
        addLog('No active session', 'info');
      }
    } catch (err) {
      addLog(`Exception checking session: ${err}`, 'error');
    }
  };

  const testGoogleOAuth = async () => {
    setLoading(true);
    setAuthUrl('');
    addLog('=== Starting Google OAuth Test ===', 'info');
    
    try {
      const supabase = createClient();
      
      // Build the redirect URL
      const redirectTo = `${window.location.origin}/auth/callback`;
      addLog(`Using redirect URL: ${redirectTo}`, 'info');
      
      // Attempt to generate OAuth URL
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
        addLog(`OAuth Error: ${error.message}`, 'error');
        addLog(`Error details: ${JSON.stringify(error)}`, 'error');
      } else if (data?.url) {
        addLog('OAuth URL generated successfully!', 'success');
        addLog(`URL: ${data.url}`, 'info');
        setAuthUrl(data.url);
        
        // Parse the URL to check parameters
        try {
          const url = new URL(data.url);
          addLog(`OAuth Provider: ${url.hostname}`, 'info');
          addLog(`Client ID present: ${url.searchParams.has('client_id') ? 'Yes' : 'No'}`, 'info');
          addLog(`Redirect URI: ${url.searchParams.get('redirect_uri')}`, 'info');
          addLog(`Response Type: ${url.searchParams.get('response_type')}`, 'info');
          addLog(`Scope: ${url.searchParams.get('scope')}`, 'info');
        } catch (parseErr) {
          addLog(`Could not parse OAuth URL: ${parseErr}`, 'error');
        }
      } else {
        addLog('No URL returned from OAuth request', 'error');
        addLog(`Response data: ${JSON.stringify(data)}`, 'info');
      }
    } catch (err) {
      addLog(`Exception: ${err}`, 'error');
      if (err instanceof Error) {
        addLog(`Error stack: ${err.stack}`, 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  const performRedirect = () => {
    if (authUrl) {
      addLog('Redirecting to OAuth provider...', 'info');
      window.location.href = authUrl;
    }
  };

  const clearSession = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        addLog(`Sign out error: ${error.message}`, 'error');
      } else {
        addLog('Session cleared', 'success');
      }
    } catch (err) {
      addLog(`Exception clearing session: ${err}`, 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">OAuth Debug Tool</h1>
        
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">Debugging Steps:</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Check the environment information below</li>
            <li>Click "Test Google OAuth" to generate an OAuth URL</li>
            <li>Check the logs for any errors</li>
            <li>If URL is generated, click "Perform Redirect" to test the flow</li>
            <li>After OAuth, check if you're redirected back properly</li>
          </ol>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={testGoogleOAuth}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
            >
              {loading ? 'Testing...' : 'Test Google OAuth'}
            </button>
            
            {authUrl && (
              <button
                onClick={performRedirect}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
              >
                Perform Redirect
              </button>
            )}
            
            <button
              onClick={checkCurrentSession}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
            >
              Check Session
            </button>
            
            <button
              onClick={clearSession}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
            >
              Clear Session
            </button>
            
            <button
              onClick={() => setLogs([])}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
            >
              Clear Logs
            </button>
          </div>
        </div>

        {/* OAuth URL Display */}
        {authUrl && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-green-900 mb-3">Generated OAuth URL:</h3>
            <div className="bg-white p-4 rounded border border-green-300 break-all text-sm font-mono">
              {authUrl}
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(authUrl)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Copy URL
            </button>
          </div>
        )}

        {/* Logs */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Debug Logs</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs h-96 overflow-y-auto">
            {logs.length === 0 ? (
              <div className="text-gray-500">No logs yet. Click "Test Google OAuth" to start.</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1 whitespace-pre-wrap">{log}</div>
              ))
            )}
          </div>
        </div>

        {/* Supabase Configuration Reminder */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Supabase Configuration Checklist:</h3>
          <ul className="space-y-2 text-yellow-800">
            <li className="flex items-start gap-2">
              <span>1.</span>
              <div>
                <strong>Authorized redirect URLs in Supabase:</strong>
                <ul className="mt-1 ml-4 list-disc">
                  <li><code>https://babyaivideo.com/auth/callback</code></li>
                  <li><code>https://www.babyaivideo.com/auth/callback</code></li>
                  <li><code>http://localhost:3000/auth/callback</code> (for local testing)</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span>2.</span>
              <div>
                <strong>Google OAuth Console:</strong>
                <ul className="mt-1 ml-4 list-disc">
                  <li>Authorized JavaScript origins: <code>https://babyaivideo.com</code></li>
                  <li>Authorized redirect URIs: Your Supabase project URL + <code>/auth/v1/callback</code></li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span>3.</span>
              <div>
                <strong>Environment Variables in Vercel:</strong>
                <ul className="mt-1 ml-4 list-disc">
                  <li><code>NEXT_PUBLIC_SITE_URL=https://babyaivideo.com</code></li>
                  <li><code>NEXT_PUBLIC_SUPABASE_URL</code> (your Supabase project URL)</li>
                  <li><code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> (your anon key)</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}