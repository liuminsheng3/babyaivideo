// SEO Configuration
// Update these values with your actual verification codes

export const seoConfig = {
  // Google Search Console verification
  // Get your code from: https://search.google.com/search-console
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'google-site-verification-code',
  
  // Bing Webmaster Tools verification  
  // Get your code from: https://www.bing.com/webmasters
  bingVerification: process.env.NEXT_PUBLIC_BING_VERIFICATION || 'bing-verification-code',
  
  // Yandex Webmaster verification
  // Get your code from: https://webmaster.yandex.com
  yandexVerification: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'yandex-verification-code',
  
  // Baidu Webmaster verification (for Chinese market)
  // Get your code from: https://ziyuan.baidu.com
  baiduVerification: process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || 'baidu-verification-code',
  
  // Google Analytics
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  
  // Default SEO values
  defaultTitle: 'Baby AI Video Generator - Transform Videos into Adorable Baby Style',
  defaultDescription: 'The Baby AI Video Generator transforms your videos into adorable baby-style moments using advanced AI. Upload any video and watch it turn into cute baby content in minutes.',
  defaultKeywords: 'AI video generator, baby style video, video transformation, artificial intelligence, cute baby video, video processing, AI technology, baby ai video, baby face video, ai baby video maker',
  
  // Social Media
  twitterHandle: '@babyaivideo',
  
  // Site configuration
  siteUrl: 'https://www.babyaivideo.com',
  siteName: 'Baby AI Video',
  locale: 'en_US',
  alternateLocale: 'zh_CN'
};

export default seoConfig;