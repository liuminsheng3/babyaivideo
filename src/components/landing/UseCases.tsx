'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Briefcase, Film, Gift, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function UseCases() {
  const t = useTranslations('useCases');

  const useCases = [
    {
      icon: Users,
      titleKey: 'social.title',
      descriptionKey: 'social.description',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      titleKey: 'family.title',
      descriptionKey: 'family.description',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Briefcase,
      titleKey: 'marketing.title',
      descriptionKey: 'marketing.description',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Film,
      titleKey: 'entertainment.title',
      descriptionKey: 'entertainment.description',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Gift,
      titleKey: 'gift.title',
      descriptionKey: 'gift.description',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      titleKey: 'event.title',
      descriptionKey: 'event.description',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-800 border border-zinc-700 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 text-center"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} p-2.5 mb-4 mx-auto`}>
                <useCase.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{t(useCase.titleKey)}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t(useCase.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 border border-zinc-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            {t('cta.title')}
          </h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href="/auth/signup"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
          >
            {t('cta.button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}