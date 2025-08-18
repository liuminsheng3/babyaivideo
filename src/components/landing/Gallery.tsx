'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('gallery');
  
  const examples = [
    {
      id: 1,
      before: '/examples/before1.jpg',
      after: '/examples/after1.mp4',
      thumbnail: '/examples/thumb1.jpg',
      title: t('examples.familyPortrait')
    },
    {
      id: 2,
      before: '/examples/before2.jpg',
      after: '/examples/after2.mp4',
      thumbnail: '/examples/thumb2.jpg',
      title: t('examples.danceVideo')
    },
    {
      id: 3,
      before: '/examples/before3.jpg',
      after: '/examples/after3.mp4',
      thumbnail: '/examples/thumb3.jpg',
      title: t('examples.birthdayParty')
    },
    {
      id: 4,
      before: '/examples/before4.jpg',
      after: '/examples/after4.mp4',
      thumbnail: '/examples/thumb4.jpg',
      title: t('examples.selfieVideo')
    },
    {
      id: 5,
      before: '/examples/before5.jpg',
      after: '/examples/after5.mp4',
      thumbnail: '/examples/thumb5.jpg',
      title: t('examples.groupPhoto')
    },
    {
      id: 6,
      before: '/examples/before6.jpg',
      after: '/examples/after6.mp4',
      thumbnail: '/examples/thumb6.jpg',
      title: t('examples.weddingMoments')
    }
  ];
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

  const togglePlay = (id: number) => {
    setIsPlaying(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedExample(example.id)}
            >
              <div className="relative aspect-video bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{example.title}</p>
                  </div>
                </div>
                
                <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                  Before
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-primary/90 text-white text-xs rounded">
                  After
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium">
            View More Examples
          </button>
        </motion.div>
      </div>
    </section>
  );
}