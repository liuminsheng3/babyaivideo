'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Briefcase, Film, Gift, Star } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'Social Media Content',
    description: 'Create viral-worthy content for TikTok, Instagram, and YouTube. Our baby AI video generator helps you stand out with unique, engaging videos that capture attention and drive engagement. Perfect for influencers and content creators looking to add a fun twist to their videos.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Family Memories',
    description: 'Transform family videos into precious keepsakes. Imagine seeing what your parents looked like as babies, or creating adorable baby versions of wedding videos. This AI baby face video tool preserves memories in a unique, heartwarming way that families will treasure forever.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Briefcase,
    title: 'Marketing & Advertising',
    description: 'Businesses use our baby video AI generator for creative marketing campaigns. From baby product advertisements to nostalgic brand storytelling, the tool opens new creative possibilities. Create emotional connections with audiences through adorable, attention-grabbing content.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Film,
    title: 'Entertainment Industry',
    description: 'Film and TV producers utilize our AI baby video maker for special effects, flashback scenes, and creative storytelling. Save thousands on CGI costs while achieving realistic baby transformations. Perfect for music videos, commercials, and film production.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Gift,
    title: 'Personalized Gifts',
    description: 'Create unique personalized gifts for baby showers, birthdays, and special occasions. Transform videos of parents-to-be into baby versions, creating memorable and emotional gifts that stand out. The perfect way to celebrate new life and create lasting memories.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Star,
    title: 'Event Entertainment',
    description: 'Event planners and party organizers use our baby face video AI for entertainment at weddings, reunions, and corporate events. Create fun, interactive experiences where guests can see themselves as babies. Perfect for photo booths and event activations.',
    color: 'from-yellow-500 to-amber-500'
  }
];

export default function UseCases() {
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
            Use Cases for Baby AI Video Generator
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Discover the endless possibilities of our AI-powered baby video transformation technology
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
              <h3 className="text-xl font-semibold mb-4 text-white">{useCase.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {useCase.description}
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
            Ready to Transform Your Videos?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Join thousands of users who are already creating amazing baby-style videos with our 
            <strong> baby AI video generator</strong>. Whether for personal use or professional projects, 
            our tool delivers consistent, high-quality results every time.
          </p>
          <a
            href="/auth/signup"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Start Creating Now - Get 10 Free Credits
          </a>
        </motion.div>
      </div>
    </section>
  );
}