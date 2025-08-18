'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Shield, Cpu } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('features');
  
  const features = [
    {
      icon: Users,
      title: t('batch.title'),
      description: t('batch.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: t('transformation.title'),
      description: t('transformation.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: t('quality.title'),
      description: t('quality.description'),
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: t('privacy.title'),
      description: t('privacy.description'),
      gradient: 'from-green-500 to-emerald-500'
    }
  ];
  return (
    <section className="py-20 px-6 bg-zinc-900">
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
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-6 bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-zinc-700"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}