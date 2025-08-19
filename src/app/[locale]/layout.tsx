import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

const locales = ['en', 'zh'];

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  
  const title = t('title');
  const description = t('description');
  const url = locale === 'zh' ? 'https://www.babyaivideo.com/zh' : 'https://www.babyaivideo.com/en';
  
  return {
    title,
    description,
    keywords: locale === 'zh' 
      ? 'AI视频生成器, 宝宝风格视频, 视频转换, 人工智能, 萌娃视频, 视频处理, AI技术'
      : 'AI video generator, baby style video, video transformation, artificial intelligence, cute baby video, video processing, AI technology',
    authors: [{ name: 'Baby AI Video' }],
    creator: 'Baby AI Video',
    publisher: 'Baby AI Video',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.babyaivideo.com'),
    alternates: {
      canonical: url,
      languages: {
        'en-US': 'https://www.babyaivideo.com/en',
        'zh-CN': 'https://www.babyaivideo.com/zh',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Baby AI Video',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Baby AI Video Generator',
        },
      ],
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-image.png'],
      creator: '@babyaivideo',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={`https://www.babyaivideo.com/${locale}`} />
        <link rel="alternate" hrefLang="en" href="https://www.babyaivideo.com/en" />
        <link rel="alternate" hrefLang="zh" href="https://www.babyaivideo.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://www.babyaivideo.com/en" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}