'use client';

import { motion } from 'framer-motion';
import { Upload, Wand2, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  
  const steps = [
    {
      icon: Upload,
      title: t('step1.title'),
      description: t('step1.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wand2,
      title: t('step2.title'),
      description: t('step2.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Download,
      title: t('step3.title'),
      description: t('step3.description'),
      color: 'from-green-500 to-emerald-500'
    }
  ];
  return (
    <section id="how-it-works" className="py-20 px-6 bg-zinc-900">
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
            Transform your videos into baby-style content in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6 mx-auto">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} p-0.5`}>
                    <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-zinc-300" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-center">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%]">
                  <svg className="w-full" height="2" viewBox="0 0 100 2">
                    <line
                      x1="0"
                      y1="1"
                      x2="100"
                      y2="1"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}