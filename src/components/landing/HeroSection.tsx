'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t('creditsIncluded')}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:border-primary/20 hover:bg-primary/5 transition-colors"
            >
              {t('viewExamples')}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1M+</div>
              <div className="text-sm text-gray-600">{t('stats.videosProcessed')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">HD</div>
              <div className="text-sm text-gray-600">{t('stats.videoQuality')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2-3min</div>
              <div className="text-sm text-gray-600">{t('stats.averageTime')}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-purple-100/20 p-2">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-gray-400">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">{t('demoPreview')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}