# Vercel Environment Variables Setup

## 🔐 Required Environment Variables for Production

Add these to your Vercel project settings:

### 1. Go to Vercel Dashboard
- Navigate to your project
- Go to Settings → Environment Variables

### 2. Add the following variables:

```bash
# Supabase (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=https://gwwvqayyzdxmckyphwge.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3d3ZxYXl5emR4bWNreXBod2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NDI3MDMsImV4cCI6MjA3MTExODcwM30.IxY_8UWcT-rgOMsL29gLCfXmcPp7PgJ9dComkQAxyGs
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3d3ZxYXl5emR4bWNreXBod2dlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTU0MjcwMywiZXhwIjoyMDcxMTE4NzAzfQ.IGdX-pMAhQUfU3vlP5u-E9ROw8hnv5U3FEn8nEmluFw

# Site URL (REQUIRED - Update with your domain)
NEXT_PUBLIC_SITE_URL=https://babyaivideo.com

# Google Search Console (Optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Stripe (When ready for payments)
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
# STRIPE_SECRET_KEY=sk_live_...
# STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Environment Variable Settings:
- ✅ Production
- ✅ Preview  
- ✅ Development

### 4. Click "Save"

### 5. Redeploy
After adding environment variables, you need to redeploy:
- Go to Deployments tab
- Click "..." on the latest deployment
- Select "Redeploy"

## ⚠️ Important Security Notes

1. **NEVER commit these to Git**
   - `.env.local` is already in `.gitignore`
   - Don't share SERVICE_ROLE_KEY publicly

2. **Different URLs for different environments**
   ```
   Development: http://localhost:3000
   Production: https://babyaivideo.com
   ```

3. **Supabase Auth Settings**
   - Go to Supabase Dashboard → Authentication → URL Configuration
   - Add these URLs to "Redirect URLs":
     - `http://localhost:3000/auth/callback`
     - `https://babyaivideo.com/auth/callback`
     - `https://*.vercel.app/auth/callback` (for preview deployments)

## 🔄 Update Supabase Allowed URLs

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Authentication → URL Configuration
4. Add to "Site URL": `https://babyaivideo.com`
5. Add to "Redirect URLs":
   - `https://babyaivideo.com/auth/callback`
   - `http://localhost:3000/auth/callback`

## ✅ Verification Checklist

After deployment, verify:
- [ ] Sign up works
- [ ] Email confirmation sent
- [ ] Sign in works
- [ ] Google OAuth works (if configured)
- [ ] Protected routes redirect to login
- [ ] User profile created in database

## 🚀 Quick Copy for Vercel

Copy this entire block and paste into Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=https://gwwvqayyzdxmckyphwge.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3d3ZxYXl5emR4bWNreXBod2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NDI3MDMsImV4cCI6MjA3MTExODcwM30.IxY_8UWcT-rgOMsL29gLCfXmcPp7PgJ9dComkQAxyGs
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3d3ZxYXl5emR4bWNreXBod2dlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTU0MjcwMywiZXhwIjoyMDcxMTE4NzAzfQ.IGdX-pMAhQUfU3vlP5u-E9ROw8hnv5U3FEn8nEmluFw
NEXT_PUBLIC_SITE_URL=https://babyaivideo.com
```

## 📱 Test Links

After deployment:
- Homepage: https://babyaivideo.com
- Sign Up: https://babyaivideo.com/en/auth/signup
- Sign In: https://babyaivideo.com/en/auth/signin
- Dashboard: https://babyaivideo.com/dashboard (requires login)