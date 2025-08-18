'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Shield, Zap } from 'lucide-react';

export default function ProductIntro() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is Baby AI Video Generator?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI technology that transforms ordinary videos into adorable baby-style content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Advanced AI Technology at Your Fingertips
            </h3>
            <p className="text-gray-600 mb-4">
              Our <strong>baby AI video generator</strong> leverages cutting-edge deep learning models, 
              specifically trained on millions of baby faces and expressions. The technology understands 
              facial structures, proportions, and movements to create realistic baby transformations that 
              maintain the original person's identity while adding that irresistible baby charm.
            </p>
            <p className="text-gray-600 mb-4">
              Unlike simple filters, our AI baby face video generator performs complete facial reconstruction, 
              adjusting features like eye size, cheek fullness, and facial proportions to achieve authentic 
              baby-like appearances. The system processes each frame individually while maintaining temporal 
              consistency, ensuring smooth, flicker-free results.
            </p>
            <p className="text-gray-600">
              Whether you're creating content for social media, family memories, or professional projects, 
              this baby video AI tool delivers professional-grade results in minutes, not hours. Experience 
              the magic of AI-powered transformation with just a few clicks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Brain className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-semibold mb-2">Smart AI</h4>
              <p className="text-sm text-gray-700">
                Powered by state-of-the-art neural networks
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <Sparkles className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="font-semibold mb-2">High Quality</h4>
              <p className="text-sm text-gray-700">
                Maintains video quality up to 1080p resolution
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <Zap className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">Fast Processing</h4>
              <p className="text-sm text-gray-700">
                Get results in 2-3 minutes for most videos
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <Shield className="w-10 h-10 text-orange-600 mb-3" />
              <h4 className="font-semibold mb-2">Secure & Private</h4>
              <p className="text-sm text-gray-700">
                Your videos are encrypted and auto-deleted
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Why Choose Our Baby AI Video Generator?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Industry-Leading Accuracy</h4>
              <p className="text-gray-600">
                Our AI models are trained on diverse datasets, ensuring accurate transformations 
                across all ethnicities, ages, and facial types. The baby video generator AI maintains 
                personal characteristics while applying baby features naturally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Professional Results</h4>
              <p className="text-gray-600">
                Unlike basic apps, our AI baby video maker produces cinema-quality outputs suitable 
                for professional use. Perfect for content creators, marketers, and filmmakers who 
                need high-quality baby-style videos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Easy to Use</h4>
              <p className="text-gray-600">
                No technical expertise required. Simply upload your video, adjust settings if needed, 
                and let our baby face AI video generator handle the complex processing. Get professional 
                results without the learning curve.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}