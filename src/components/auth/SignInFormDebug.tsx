'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowLeft, Eye, EyeOff, Github } from 'lucide-react';
import { signIn, signInWithGoogle, signInWithGitHub } from '@/app/actions/auth';
import { signInWithGoogleDebug } from '@/app/actions/auth-debug';
import { useRouter } from 'next/navigation';

export default function SignInFormDebug() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [debugLog, setDebugLog] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log('🔍 DEBUG:', logMessage);
    setDebugLog(prev => [...prev, logMessage]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addLog('Form submit started');
    
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      addLog(`Calling signIn with email: ${email}`);
      const result = await signIn(formData);
      
      if (result?.error) {
        addLog(`Sign in error: ${result.error}`);
        setMessage({ type: 'error', text: result.error });
        setLoading(false);
      } else {
        addLog('Sign in successful, redirecting...');
      }
    } catch (error) {
      addLog(`Unexpected error: ${error}`);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    addLog('Google sign-in button clicked');
    addLog(`Current loading state: ${loading}`);
    
    if (loading) {
      addLog('Already loading, aborting');
      return;
    }
    
    setLoading(true);
    addLog('Loading state set to true');
    
    try {
      addLog('Calling signInWithGoogleDebug server action...');
      const result = await signInWithGoogleDebug();
      addLog(`Server action result: ${JSON.stringify(result, null, 2)}`);
      
      // Log debug info to console with formatting
      if (result.debugInfo) {
        console.group('🔍 OAuth Debug Info');
        console.log('Steps:', result.debugInfo.steps);
        console.log('Headers:', result.debugInfo.headers);
        console.log('Environment:', result.debugInfo.env);
        console.log('Final Origin:', result.debugInfo.finalOrigin);
        console.log('Redirect To:', result.debugInfo.redirectTo);
        if (result.debugInfo.error) {
          console.error('Error Details:', result.debugInfo.error);
        }
        console.groupEnd();
      }
      
      if (result?.error) {
        addLog(`Google OAuth error from server: ${result.error}`);
        setMessage({ type: 'error', text: `Google sign-in failed: ${result.error}` });
        setLoading(false);
      } else if (result?.redirectUrl) {
        addLog(`Got redirect URL: ${result.redirectUrl}`);
        setMessage({ type: 'success', text: 'Redirecting to Google...' });
        // Actually redirect
        window.location.href = result.redirectUrl;
      } else {
        addLog('No error but also no redirect URL');
        setMessage({ type: 'error', text: 'Unexpected response from server' });
        setLoading(false);
      }
    } catch (error) {
      addLog(`Caught error in handleGoogleSignIn: ${error}`);
      addLog(`Error type: ${typeof error}`);
      addLog(`Error message: ${error instanceof Error ? error.message : String(error)}`);
      addLog(`Error stack: ${error instanceof Error ? error.stack : 'No stack'}`);
      
      setMessage({ type: 'error', text: 'Failed to sign in with Google - check console' });
      setLoading(false);
    }
  };

  const handleGitHubSignIn = async () => {
    addLog('GitHub sign-in button clicked');
    
    if (loading) {
      addLog('Already loading, aborting');
      return;
    }
    
    setLoading(true);
    addLog('Loading state set to true');
    
    try {
      addLog('Calling signInWithGitHub server action...');
      const result = await signInWithGitHub();
      addLog(`Server action result: ${JSON.stringify(result)}`);
      
      if (result?.error) {
        addLog(`GitHub OAuth error from server: ${result.error}`);
        setMessage({ type: 'error', text: `GitHub sign-in failed: ${result.error}` });
        setLoading(false);
      } else {
        addLog('GitHub OAuth initiated successfully, should redirect...');
      }
    } catch (error) {
      addLog(`Caught error in handleGitHubSignIn: ${error}`);
      setMessage({ type: 'error', text: 'Failed to sign in with GitHub - check console' });
      setLoading(false);
    }
  };

  const testDirectGoogleOAuth = async () => {
    addLog('Testing direct Google OAuth...');
    try {
      const { createClient } = await import('@/lib/supabase/client');
      const supabase = createClient();
      
      addLog('Supabase client created');
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) {
        addLog(`Direct OAuth error: ${JSON.stringify(error)}`);
      } else {
        addLog(`Direct OAuth success: ${JSON.stringify(data)}`);
        if (data.url) {
          addLog(`Redirecting to: ${data.url}`);
          window.location.href = data.url;
        }
      }
    } catch (error) {
      addLog(`Direct OAuth exception: ${error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">Sign In (Debug Mode)</h1>
          <p className="text-gray-600 mb-6">Debug version with console logging</p>
          
          {/* Debug Log Display */}
          {debugLog.length > 0 && (
            <div className="mb-6 p-3 bg-gray-100 rounded-lg max-h-40 overflow-y-auto">
              <h3 className="font-semibold text-sm mb-2">Debug Log:</h3>
              {debugLog.map((log, i) => (
                <div key={i} className="text-xs font-mono text-gray-700">{log}</div>
              ))}
            </div>
          )}
          
          {message && (
            <div className={`p-3 rounded-lg mb-6 ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-700' 
                : 'bg-red-50 text-red-700'
            }`}>
              {message.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="you@example.com"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="••••••••"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addLog('Google button onClick fired');
                  handleGoogleSignIn();
                }}
                disabled={loading}
                className="py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Google</span>
              </button>
              
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addLog('GitHub button onClick fired');
                  handleGitHubSignIn();
                }}
                disabled={loading}
                className="py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </button>
            </div>
            
            {/* Test Direct OAuth Button */}
            <button
              type="button"
              onClick={testDirectGoogleOAuth}
              className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm"
            >
              Test Direct Google OAuth (Client-Side)
            </button>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}