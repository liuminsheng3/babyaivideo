import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.babyaivideo.com'),
  title: {
    default: 'Baby AI Video Generator - Transform Videos into Adorable Baby Style',
    template: '%s | Baby AI Video Generator'
  },
  description: 'The Baby AI Video Generator transforms your videos into adorable baby-style moments using advanced AI. Upload any video and watch it turn into cute baby content in minutes.',
  keywords: ['baby ai video generator', 'ai baby face video', 'baby face filter video', 'ai baby video editor', 'baby video transformation', 'AI video editor'],
  authors: [{ name: 'Baby AI Video' }],
  creator: 'Baby AI Video',
  publisher: 'Baby AI Video',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: 'https://www.babyaivideo.com',
    siteName: 'Baby AI Video Generator',
    title: 'Baby AI Video Generator - Transform Videos into Adorable Baby Style',
    description: 'Transform your videos into adorable baby-style moments using advanced AI technology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Baby AI Video Generator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby AI Video Generator',
    description: 'Transform your videos into adorable baby-style moments using advanced AI.',
    images: ['/og-image.jpg'],
    creator: '@babyaivideo'
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
  alternates: {
    canonical: 'https://www.babyaivideo.com',
    languages: {
      'en': 'https://www.babyaivideo.com',
      'zh': 'https://www.babyaivideo.com/zh'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
