# Vercel Analytics Setup Guide

## ✅ What's Already Installed

I've already installed and configured:
1. **Vercel Analytics** - For tracking page views and user interactions
2. **Vercel Speed Insights** - For monitoring Core Web Vitals and performance metrics

## 📊 How to Enable Analytics in Vercel Dashboard

### Step 1: Enable Web Analytics
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `babyaivideo` project
3. Navigate to the **Analytics** tab
4. Click **Enable** for Web Analytics
5. Select your pricing plan (Free tier includes 2,500 events/month)

### Step 2: Enable Speed Insights
1. In the same project dashboard
2. Navigate to the **Speed Insights** tab
3. Click **Enable** for Speed Insights
4. Select your pricing plan (Free tier includes basic metrics)

## 🚀 Deployment

After enabling in the dashboard, deploy your application:

```bash
# Using Vercel CLI
vercel

# Or push to GitHub (if connected)
git push origin main
```

## 📈 Viewing Analytics

### Web Analytics
- **Page Views**: Track how many people visit your pages
- **Unique Visitors**: See unique visitor count
- **Top Pages**: Identify your most popular pages
- **Top Referrers**: See where your traffic comes from
- **Devices & Browsers**: Understand your audience's tech stack
- **Countries**: See geographic distribution

Access at: `https://vercel.com/[your-team]/babyaivideo/analytics`

### Speed Insights
- **Core Web Vitals**: LCP, FID, CLS metrics
- **Performance Score**: Overall performance rating
- **Real User Metrics**: Actual user experience data
- **Performance Trends**: Track improvements over time

Access at: `https://vercel.com/[your-team]/babyaivideo/speed-insights`

## 🎯 Custom Events (Optional)

You can track custom events using the `track` function:

```typescript
import { track } from '@vercel/analytics';

// Track a custom event
track('signup', {
  method: 'email',
  plan: 'free'
});

// Track video creation
track('video_created', {
  style: 'baby',
  duration: 30
});
```

## 🔍 Testing Analytics Locally

Analytics only work in production, but you can verify the setup:

1. Build and run production build locally:
   ```bash
   npm run build
   npm start
   ```

2. Open browser DevTools → Network tab

3. Look for requests to:
   - `/_vercel/insights/view` (Analytics)
   - `/_vercel/speed-insights/vitals` (Speed Insights)

## 📊 Free Tier Limits

### Web Analytics (Free)
- 2,500 events per month
- 30-day data retention
- Basic metrics only

### Speed Insights (Free)
- 1,000 data points per month
- Core Web Vitals only
- 30-day data retention

## 🎨 Analytics Dashboard Features

### Available Metrics:
- **Traffic Sources**: Direct, search, social, referral
- **User Engagement**: Bounce rate, session duration
- **Technology**: Browser, OS, device type
- **Geography**: Country, city-level data (Pro plan)
- **Real-time**: Live visitor count (Pro plan)

### Performance Metrics:
- **LCP** (Largest Contentful Paint): Loading performance
- **FID** (First Input Delay): Interactivity
- **CLS** (Cumulative Layout Shift): Visual stability
- **TTFB** (Time to First Byte): Server response time
- **FCP** (First Contentful Paint): Initial render time

## 🛠️ Troubleshooting

### Analytics Not Showing?
1. Ensure you've enabled Analytics in Vercel Dashboard
2. Deploy your application after enabling
3. Wait 5-10 minutes for data to appear
4. Check that you're on a valid Vercel deployment (not localhost)

### Speed Insights Not Working?
1. Ensure Speed Insights is enabled in dashboard
2. Check that your site has traffic (needs real users)
3. Verify deployment is on Vercel platform

## 📝 Best Practices

1. **Privacy Compliance**: Analytics is GDPR compliant by default
2. **No Cookies**: Uses edge functions, no client-side cookies
3. **Performance**: Zero impact on site performance
4. **Custom Events**: Use sparingly to stay within limits
5. **Regular Monitoring**: Check weekly for insights

## 🔗 Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Analytics API](https://vercel.com/docs/rest-api/analytics)

---

✨ Your analytics are now set up! Deploy to Vercel and enable in the dashboard to start tracking.