'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Upload, Download, Settings } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section 1: Upload Process */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Upload className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-white">
                Simple Upload Process
              </h2>
            </div>
            <p className="text-lg text-zinc-400 mb-6">
              Get started with your <strong>baby AI video generator</strong> transformation in seconds. 
              Our intuitive interface makes it easy for anyone to create amazing baby-style videos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                <div>
                  <strong className="text-white">Choose Your Video:</strong>
                  <p className="text-zinc-400">Upload any MP4 or MOV file up to 300MB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                <div>
                  <strong className="text-white">Set Preferences:</strong>
                  <p className="text-zinc-400">Adjust transformation strength and quality settings</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                <div>
                  <strong className="text-white">Start Processing:</strong>
                  <p className="text-zinc-400">Click generate and watch the magic happen</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop"
                alt="Baby AI Video Generator upload interface demonstration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm mb-2">Upload Interface</p>
                  <p className="text-2xl font-bold">Drag & Drop Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: AI Processing */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop"
                alt="AI processing baby face transformation neural network visualization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm mb-2">AI Technology</p>
                  <p className="text-2xl font-bold">Neural Network Processing</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-white">
                Advanced AI Processing
              </h2>
            </div>
            <p className="text-lg text-zinc-400 mb-6">
              Our <strong>baby face AI video generator</strong> uses cutting-edge deep learning 
              to analyze and transform facial features with incredible precision.
            </p>
            <div className="space-y-4">
              <div className="bg-zinc-800 p-4 rounded-lg shadow-sm border border-zinc-700">
                <h4 className="font-semibold text-white mb-2">Face Detection & Tracking</h4>
                <p className="text-zinc-400 text-sm">
                  Automatically detects and tracks multiple faces throughout your video
                </p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg shadow-sm border border-zinc-700">
                <h4 className="font-semibold text-white mb-2">Age Regression Modeling</h4>
                <p className="text-zinc-400 text-sm">
                  Applies scientifically-based age regression to create authentic baby features
                </p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg shadow-sm border border-zinc-700">
                <h4 className="font-semibold text-white mb-2">Temporal Consistency</h4>
                <p className="text-zinc-400 text-sm">
                  Maintains smooth transitions between frames for natural-looking results
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Results & Download */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Download className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-white">
                Professional Results
              </h2>
            </div>
            <p className="text-lg text-zinc-400 mb-6">
              Download your transformed video in high quality, ready for sharing on any platform. 
              Our <strong>AI baby video maker</strong> ensures professional-grade output every time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-green-700 mb-1">1080p</p>
                <p className="text-sm text-gray-700">HD Resolution</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-700 mb-1">60fps</p>
                <p className="text-sm text-gray-700">Smooth Playback</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-700 mb-1">MP4</p>
                <p className="text-sm text-gray-700">Universal Format</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-orange-700 mb-1">Fast</p>
                <p className="text-sm text-gray-700">Quick Download</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop"
                alt="Baby AI video generator results preview showing transformed video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}