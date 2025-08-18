'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Baby AI
            </h2>
          </motion.div>

          {/* Main tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="https://github.com/babyai"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-black bg-white rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105 min-w-[160px]"
            >
              <Github className="w-5 h-5 flex-shrink-0" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://huggingface.co/babyai"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white bg-zinc-800 rounded-full font-medium hover:bg-zinc-700 transition-all duration-300 hover:scale-105 border border-zinc-700 min-w-[160px]"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.486 10.577l-1.194 5.955c-.136.677-.545 1.535-1.223 1.535-.678 0-1.086-.858-1.223-1.535l-1.194-5.955c-.091-.455-.364-.682-.819-.682s-.728.227-.819.682l-1.194 5.955c-.136.677-.545 1.535-1.223 1.535-.678 0-1.086-.858-1.223-1.535l-1.194-5.955c-.091-.455-.364-.682-.819-.682s-.728.227-.819.682l-1.194 5.955c-.136.677-.545 1.535-1.223 1.535-.678 0-1.086-.858-1.223-1.535L6.514 10.577c-.182-.909.273-1.839 1.136-2.321.864-.482 1.932-.428 2.741.137l2.609 1.827 2.609-1.827c.809-.565 1.877-.619 2.741-.137.863.482 1.318 1.412 1.136 2.321z"/>
              </svg>
              <span>Hugging Face</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.videosProcessed')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">HD</div>
              <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.videoQuality')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2-3min</div>
              <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">{t('stats.averageTime')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-zinc-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}