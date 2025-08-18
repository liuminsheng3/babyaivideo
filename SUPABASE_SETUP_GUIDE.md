# Supabase Setup Guide for Baby AI Video

## 📋 Prerequisites
- Supabase account (free tier is sufficient to start)
- Project created on Supabase

## 🚀 Quick Setup

### Step 1: Create Supabase Project
1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New project"
3. Fill in:
   - Project name: `babyaivideo`
   - Database Password: (save this securely)
   - Region: Choose closest to your users
4. Click "Create new project"

### Step 2: Get Your API Keys
1. Go to Settings → API
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

### Step 3: Configure Environment Variables
1. Create `.env.local` file in project root:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Set Up Database Schema
1. Go to SQL Editor in Supabase Dashboard
2. Copy entire content from `supabase/schema.sql`
3. Paste and run in SQL Editor
4. This creates:
   - User profiles table
   - Videos table
   - Credit system
   - Subscription management
   - Row Level Security policies

### Step 5: Configure Authentication
1. Go to Authentication → Providers
2. Enable Email provider (already enabled by default)
3. Optional: Enable social providers:
   - Google
   - GitHub
   - Twitter/X

For Google OAuth:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URI: 
   - `https://your-project.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret to Supabase

### Step 6: Configure Email Templates
1. Go to Authentication → Email Templates
2. Customize templates for:
   - Confirmation email
   - Password reset
   - Magic link

Example confirmation template:
```html
<h2>Welcome to Baby AI Video!</h2>
<p>Please confirm your email address by clicking the link below:</p>
<p><a href="{{ .ConfirmationURL }}">Confirm Email</a></p>
<p>You'll receive 10 free credits to start creating amazing baby videos!</p>
```

### Step 7: Set Up Storage Buckets
1. Go to Storage in Supabase Dashboard
2. Create new bucket: `videos`
   - Public: No (keep videos private)
   - File size limit: 300MB
   - Allowed MIME types: `video/mp4, video/quicktime`
3. Create bucket: `thumbnails`
   - Public: Yes
   - File size limit: 5MB
   - Allowed MIME types: `image/*`

### Step 8: Configure Row Level Security (RLS)
Already configured in schema.sql, but verify:
1. Go to Authentication → Policies
2. Check that all tables have RLS enabled
3. Policies should be:
   - Users can only see/edit their own data
   - Videos are private to the user who created them

## 🔧 Development Setup

### Install Dependencies
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/ssr
```

### Test Database Connection
```javascript
// Test in your browser console
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()
const { data, error } = await supabase.from('profiles').select('*')
console.log(data, error)
```

## 🔐 Authentication Flow

### Sign Up Flow
1. User enters email/password
2. Supabase sends confirmation email
3. User clicks confirmation link
4. Profile automatically created with 10 free credits
5. User redirected to dashboard

### Sign In Flow
1. User enters email/password
2. Supabase validates credentials
3. Session cookie set
4. User redirected to dashboard

### Protected Routes
Routes that require authentication:
- `/dashboard` - User dashboard
- `/dashboard/videos` - Video management
- `/dashboard/credits` - Credit management
- `/dashboard/settings` - User settings

## 📊 Database Structure

### Tables Overview
- `profiles` - User profiles and credits
- `videos` - Video processing records
- `credit_transactions` - Credit history
- `subscription_history` - Subscription records
- `api_usage` - API usage tracking

### Credit System
- New users: 10 free credits
- 1 credit = 4 seconds of video at 512p
- Higher resolutions use more credits:
  - 720p: 2x credits
  - 1080p: 4x credits

## 🚨 Important Security Notes

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **Keep service role key secret** - Only use server-side
3. **Enable RLS on all tables** - Prevents data leaks
4. **Use server-side validation** - Don't trust client
5. **Rate limit API endpoints** - Prevent abuse

## 🎯 Next Steps

1. **Set up Stripe** for payments:
   - Create Stripe account
   - Add products and prices
   - Configure webhooks

2. **Configure email service**:
   - Set up custom SMTP (optional)
   - Or use Supabase's built-in email

3. **Add monitoring**:
   - Set up error tracking (Sentry)
   - Add analytics (Google Analytics)
   - Monitor database performance

## 📝 Testing Checklist

- [ ] User can sign up with email
- [ ] Confirmation email received
- [ ] User can sign in
- [ ] Profile created with 10 credits
- [ ] Protected routes redirect to login
- [ ] User can sign out
- [ ] Password reset works
- [ ] Credits deducted on video processing
- [ ] Videos saved to database

## 🔗 Useful Links

- [Supabase Docs](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage Guide](https://supabase.com/docs/guides/storage)

## 🆘 Troubleshooting

### "Invalid API key"
- Check `.env.local` file exists
- Verify keys are copied correctly
- Restart development server

### "Permission denied"
- Check RLS policies
- Verify user is authenticated
- Check table permissions

### "CORS error"
- Add site URL to Supabase allowed URLs
- Check Authentication → URL Configuration

### Email not sending
- Check email templates
- Verify SMTP settings
- Check spam folder

---

**Need help?** Check Supabase Discord or GitHub discussions.