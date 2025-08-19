# GitHub OAuth Setup Guide

## 📋 Prerequisites
- GitHub account
- Supabase project
- Vercel deployment

## 🚀 Step 1: Create GitHub OAuth App

1. Go to [GitHub Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in the details:

```
Application name: Baby AI Video
Homepage URL: https://babyaivideo.com
Application description: Transform videos into adorable baby style with AI
Authorization callback URL: https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback
```

4. Click **Register application**
5. Copy your **Client ID**
6. Click **Generate a new client secret**
7. Copy your **Client Secret** (save it securely!)

## 🔧 Step 2: Configure Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Navigate to **Authentication** → **Providers**
3. Find **GitHub** and click **Enable**
4. Enter your GitHub OAuth credentials:
   - **Client ID**: [Your GitHub Client ID]
   - **Client Secret**: [Your GitHub Client Secret]
5. Click **Save**

## 🔗 Step 3: Update Redirect URLs in Supabase

Go to **Authentication** → **URL Configuration** and ensure these URLs are added:

### Redirect URLs:
```
https://babyaivideo.com/auth/callback
https://babyaivideo.com/en/auth/callback
https://babyaivideo.com/zh/auth/callback
https://*.vercel.app/auth/callback
https://*.vercel.app/en/auth/callback
https://*.vercel.app/zh/auth/callback
http://localhost:3000/auth/callback
http://localhost:3000/en/auth/callback
http://localhost:3000/zh/auth/callback
```

## ✅ Step 4: Test GitHub OAuth

1. **Deploy to Vercel**:
   ```bash
   git push origin main
   ```

2. **Clear browser cache and cookies**

3. **Test sign in**:
   - Go to https://babyaivideo.com/en/auth/signin
   - Click "GitHub" button
   - Authorize the app
   - Should redirect to dashboard

## 🐛 Troubleshooting

### Error: "Redirect URI mismatch"
- Ensure the callback URL in GitHub matches exactly:
  ```
  https://gwwvqayyzdxmckyphwge.supabase.co/auth/v1/callback
  ```

### Error: "Provider not enabled"
- Check that GitHub provider is enabled in Supabase
- Verify Client ID and Secret are correctly entered

### Error: "Invalid client"
- Double-check your Client ID and Secret
- Regenerate the secret if needed
- Make sure there are no extra spaces

### Error: 500 Internal Server Error
1. Check Vercel Function logs
2. Verify environment variables are set
3. Test locally with:
   ```bash
   npm run dev
   ```

## 🔒 Security Notes

1. **Never commit** your Client Secret to Git
2. **Rotate secrets** regularly
3. **Limit OAuth scopes** to minimum required
4. **Monitor** unauthorized access attempts

## 📝 OAuth Flow

1. User clicks "Sign in with GitHub"
2. Redirects to GitHub authorization page
3. User authorizes the app
4. GitHub redirects to Supabase callback URL
5. Supabase creates/updates user account
6. Redirects to your app's `/auth/callback`
7. App redirects to dashboard

## 🎯 Best Practices

1. **Use state parameter** for CSRF protection (handled by Supabase)
2. **Validate user email** from GitHub profile
3. **Handle existing accounts** with same email
4. **Log OAuth events** for security audit
5. **Implement rate limiting** on auth endpoints

## 📊 Testing Checklist

- [ ] GitHub OAuth button appears on signin/signup pages
- [ ] Clicking GitHub button redirects to GitHub
- [ ] Authorization completes successfully
- [ ] User is created in Supabase Auth
- [ ] Profile is created in database
- [ ] User is redirected to dashboard
- [ ] Subsequent logins work correctly
- [ ] Logout works properly

## 🔄 Update GitHub App (if needed)

If you need to update your GitHub OAuth app:

1. Go to [GitHub OAuth Apps](https://github.com/settings/developers)
2. Click on your app
3. Update any settings
4. If you change the callback URL, update it in Supabase too

---

✨ Your GitHub OAuth is now configured! Users can sign in with their GitHub accounts.