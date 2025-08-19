# Google OAuth 500 Error Troubleshooting Guide

## 🔴 Error Details
- **Error**: 500 Internal Server Error
- **Endpoint**: `/en/auth/signup`
- **Trigger**: Clicking Google Sign-in button
- **URL**: `https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app`

## 📋 Troubleshooting Checklist

### 1. ✅ Vercel Environment Variables
Check in Vercel Dashboard → Settings → Environment Variables:

```bash
# Required variables (must be set for all environments):
NEXT_PUBLIC_SUPABASE_URL=https://gwwvqayyzdxmckyphwge.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=https://babyaivideo.com  # Or your Vercel URL
```

**Action Steps:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Verify ALL variables are set for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

### 2. ✅ Supabase OAuth Configuration

#### A. Check Redirect URLs
Go to [Supabase Dashboard](https://app.supabase.com) → Authentication → URL Configuration

**Site URL** should be:
```
https://babyaivideo.com
```

**Redirect URLs** (add ALL of these):
```
https://babyaivideo.com/auth/callback
https://babyaivideo.com/en/auth/callback
https://babyaivideo.com/zh/auth/callback
https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app/auth/callback
https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app/en/auth/callback
https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app/zh/auth/callback
https://*.vercel.app/auth/callback
https://*.vercel.app/en/auth/callback
https://*.vercel.app/zh/auth/callback
http://localhost:3000/auth/callback
http://localhost:3000/en/auth/callback
http://localhost:3000/zh/auth/callback
```

#### B. Enable Google Provider
1. Go to Authentication → Providers → Google
2. Ensure it's **Enabled**
3. Check Google OAuth credentials are set:
   - Client ID (from Google Cloud Console)
   - Client Secret (from Google Cloud Console)

### 3. ✅ Google Cloud Console Setup

Go to [Google Cloud Console](https://console.cloud.google.com):

1. **OAuth 2.0 Client IDs**:
   - Go to APIs & Services → Credentials
   - Click on your OAuth 2.0 Client ID

2. **Authorized JavaScript origins** (add ALL):
   ```
   https://babyaivideo.com
   https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app
   https://*.vercel.app
   http://localhost:3000
   ```

3. **Authorized redirect URIs** (add ALL):
   ```
   https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback
   https://babyaivideo.com/auth/callback
   https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app/auth/callback
   ```

4. **Copy credentials to Supabase**:
   - Copy Client ID → Paste in Supabase Google Provider
   - Copy Client Secret → Paste in Supabase Google Provider

### 4. ✅ Code Review Issues

Check these potential code issues:

#### A. Server Action Headers
The error might be due to headers in server action. Check `/src/app/actions/auth.ts`:

```typescript
// Make sure headers are awaited properly:
const headersList = await headers();  // ✅ Correct
// NOT: const headersList = headers(); // ❌ Wrong
```

#### B. Redirect URL Construction
```typescript
// Should use the correct origin:
const origin = headersList.get('origin') || process.env.NEXT_PUBLIC_SITE_URL;
```

### 5. ✅ Debug Steps

#### A. Check Vercel Function Logs
1. Go to Vercel Dashboard → Functions tab
2. Look for errors in the logs
3. Common issues:
   - Missing environment variables
   - Headers not properly awaited
   - Supabase connection issues

#### B. Test Locally
```bash
# 1. Set up .env.local with production values
NEXT_PUBLIC_SUPABASE_URL=https://gwwvqayyzdxmckyphwge.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 2. Run locally
npm run dev

# 3. Test Google OAuth
# Check browser console for specific errors
```

#### C. Add Debug Logging
Temporarily add logging to identify the exact error:

```typescript
// In /src/app/actions/auth.ts
export async function signInWithGoogle() {
  try {
    console.log('Starting Google OAuth...');
    const supabase = await createClient();
    const headersList = await headers();
    const origin = headersList.get('origin');
    console.log('Origin:', origin);
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });
    
    if (error) {
      console.error('Supabase OAuth error:', error);
      return { error: error.message };
    }
    
    console.log('OAuth URL:', data.url);
    if (data.url) {
      redirect(data.url);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    throw err;
  }
}
```

### 6. ✅ Common Fixes

#### Fix 1: Update NEXT_PUBLIC_SITE_URL
In Vercel Environment Variables, ensure `NEXT_PUBLIC_SITE_URL` matches your deployment:
```
# For production:
NEXT_PUBLIC_SITE_URL=https://babyaivideo.com

# For preview/branch deployments:
NEXT_PUBLIC_SITE_URL=https://babyaivideo-pi9n3hub0-brains-projects-d590ef64.vercel.app
```

#### Fix 2: Ensure Callback Route Exists
Verify `/src/app/[locale]/auth/callback/route.ts` exists and handles the callback properly.

#### Fix 3: Check Supabase Project Status
1. Go to Supabase Dashboard
2. Ensure project is not paused
3. Check if you've exceeded rate limits

### 7. 📊 Testing Procedure

After making changes:

1. **Clear browser cache and cookies**
2. **Redeploy on Vercel**:
   ```bash
   vercel --prod
   ```
3. **Test in incognito mode**
4. **Check Network tab** for specific error details
5. **Check Vercel Function logs** for server-side errors

### 8. 🆘 If Still Not Working

1. **Check Supabase Auth Logs**:
   - Supabase Dashboard → Authentication → Logs
   - Look for failed authentication attempts

2. **Verify Database Schema**:
   - Ensure `profiles` table exists
   - Check RLS policies are not blocking

3. **Test with Email/Password**:
   - If email/password works but Google doesn't, it's OAuth-specific
   - If both fail, it's a broader auth issue

### 9. 🔧 Quick Fix Script

Run this to verify your setup:

```javascript
// test-google-oauth.js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwwvqayyzdxmckyphwge.supabase.co',
  'your_anon_key'
);

async function testGoogleOAuth() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://babyaivideo.com/auth/callback',
    },
  });
  
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success! OAuth URL:', data.url);
  }
}

testGoogleOAuth();
```

### 10. 📝 Resolution Tracking

Once you identify the issue, document it here:

**Issue Found**: [Describe the specific issue]
**Solution Applied**: [Describe the fix]
**Date Resolved**: [Date]

---

## 🚀 Most Likely Causes (Priority Order)

1. **Environment variables not set in Vercel** (60% probability)
2. **Redirect URLs mismatch in Supabase** (25% probability)
3. **Google OAuth credentials not properly configured** (10% probability)
4. **Code issue with headers() not being awaited** (5% probability)

Start with checking #1 and work your way down!