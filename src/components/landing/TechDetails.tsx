'use client';

import { motion } from 'framer-motion';
import { Cpu, Clock, Shield, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TechDetails() {
  const t = useTranslations('techDetails');
  return (
    <section className="py-20 px-6 bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto text-center">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">{t('process.title')}</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">{t('process.step1.title')}</h4>
                  <p className="text-zinc-400">
                    {t('process.step1.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">{t('process.step2.title')}</h4>
                  <p className="text-zinc-400">
                    {t('process.step2.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">{t('process.step3.title')}</h4>
                  <p className="text-zinc-400">
                    {t('process.step3.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">{t('process.step4.title')}</h4>
                  <p className="text-zinc-400">
                    {t('process.step4.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">{t('specs.title')}</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl text-center">
                <Cpu className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h4 className="font-semibold mb-1 text-white">{t('specs.gpu.title')}</h4>
                <p className="text-sm text-zinc-400">
                  {t('specs.gpu.description')}
                </p>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h4 className="font-semibold mb-1 text-white">{t('specs.speed.title')}</h4>
                <p className="text-sm text-zinc-400">
                  {t('specs.speed.description')}
                </p>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl text-center">
                <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h4 className="font-semibold mb-1 text-white">{t('specs.security.title')}</h4>
                <p className="text-sm text-zinc-400">
                  {t('specs.security.description')}
                </p>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl text-center">
                <Layers className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h4 className="font-semibold mb-1 text-white">{t('specs.multimodel.title')}</h4>
                <p className="text-sm text-zinc-400">
                  {t('specs.multimodel.description')}
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-zinc-700 p-6 rounded-xl">
              <h4 className="font-semibold mb-3 text-white">{t('specs.formats.title')}</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• <strong>{t('specs.formats.videoFormats')}</strong> MP4, MOV (H.264/H.265)</li>
                <li>• <strong>{t('specs.formats.resolution')}</strong> {t('specs.formats.resolutionValue')}</li>
                <li>• <strong>{t('specs.formats.frameRate')}</strong> {t('specs.formats.frameRateValue')}</li>
                <li>• <strong>{t('specs.formats.duration')}</strong> {t('specs.formats.durationValue')}</li>
                <li>• <strong>{t('specs.formats.fileSize')}</strong> {t('specs.formats.fileSizeValue')}</li>
                <li>• <strong>{t('specs.formats.outputQuality')}</strong> {t('specs.formats.outputQualityValue')}</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black border border-zinc-800 text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t('infrastructure.title')}
          </h3>
          <p className="text-zinc-400 mb-6 text-center max-w-4xl mx-auto">
            {t('infrastructure.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{t('infrastructure.stats.videos')}</div>
              <div className="text-zinc-400">{t('infrastructure.stats.videosLabel')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{t('infrastructure.stats.uptime')}</div>
              <div className="text-zinc-400">{t('infrastructure.stats.uptimeLabel')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{t('infrastructure.stats.latency')}</div>
              <div className="text-zinc-400">{t('infrastructure.stats.latencyLabel')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}