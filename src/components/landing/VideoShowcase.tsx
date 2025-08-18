'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

const videoExamples = [
  {
    id: 1,
    title: 'Family Portrait',
    description: 'Transform family moments into adorable memories',
    thumbnail: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 2,
    title: 'Dance Performance',
    description: 'Turn dance videos into cute baby performances',
    thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 3,
    title: 'Birthday Celebration',
    description: 'Make birthday videos extra special',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 4,
    title: 'Selfie Videos',
    description: 'Transform selfies into baby-style cuteness',
    thumbnail: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 5,
    title: 'Wedding Moments',
    description: 'Create unique wedding memories',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 6,
    title: 'Travel Adventures',
    description: 'Turn travel videos into baby adventures',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 7,
    title: 'Sports Activities',
    description: 'Baby-style sports highlights',
    thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=450',
    videoUrl: '#'
  },
  {
    id: 8,
    title: 'Music Performance',
    description: 'Musical moments in baby style',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450',
    videoUrl: '#'
  }
];

export default function VideoShowcase() {
  const t = useTranslations('videoShowcase');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="showcase" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videoExamples.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden">
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-white font-medium text-sm mb-1">{video.title}</h3>
                    <p className="text-zinc-400 text-xs">{video.description}</p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-5 h-5 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">👍</div>
              <div className="text-xl font-bold text-white mb-2">{t('features.moe.title')}</div>
            </div>
            <p className="text-zinc-400 text-sm">
              {t('features.moe.description')}
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">💪</div>
              <div className="text-xl font-bold text-white mb-2">{t('features.dataScaling.title')}</div>
            </div>
            <p className="text-zinc-400 text-sm">
              {t('features.dataScaling.description')}
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">🎬</div>
              <div className="text-xl font-bold text-white mb-2">{t('features.aesthetics.title')}</div>
            </div>
            <p className="text-zinc-400 text-sm">
              {t('features.aesthetics.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}