'use client';

import { motion } from 'framer-motion';
import { Cpu, Clock, Shield, Layers } from 'lucide-react';

export default function TechDetails() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            How Our Baby AI Video Technology Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Behind the magic of our <strong>baby AI video generator</strong> lies sophisticated technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">The AI Process Explained</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Face Detection & Analysis</h4>
                  <p className="text-gray-600">
                    Our AI baby face video generator begins by detecting all faces in your video using 
                    advanced computer vision. It analyzes facial landmarks, expressions, and movements 
                    frame by frame, creating a detailed map of facial features that need transformation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Age Regression Modeling</h4>
                  <p className="text-gray-600">
                    Using deep learning models trained on millions of baby faces, the system applies 
                    age regression algorithms. This baby video AI tool understands how facial proportions 
                    change with age, adjusting features like eye size, nose shape, and cheek fullness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Neural Rendering</h4>
                  <p className="text-gray-600">
                    Our proprietary neural rendering engine generates photorealistic baby features while 
                    preserving the subject's identity. The AI baby video maker ensures natural skin 
                    textures, authentic expressions, and realistic lighting that matches the original video.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Temporal Consistency</h4>
                  <p className="text-gray-600">
                    To prevent flickering and ensure smooth results, our baby face AI video generator 
                    maintains consistency across frames. Advanced algorithms track changes and ensure 
                    that transformations flow naturally throughout the entire video sequence.
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
            <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">GPU-Powered</h4>
                <p className="text-sm text-gray-600">
                  NVIDIA RTX 4090 GPUs for lightning-fast processing
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Quick Results</h4>
                <p className="text-sm text-gray-600">
                  2-3 minutes average processing time
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Secure Pipeline</h4>
                <p className="text-sm text-gray-600">
                  End-to-end encryption for all video uploads
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Layers className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Multi-Model</h4>
                <p className="text-sm text-gray-600">
                  Ensemble of AI models for best results
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Supported Formats & Specifications</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Video Formats:</strong> MP4, MOV (H.264/H.265 codec)</li>
                <li>• <strong>Resolution:</strong> Up to 1920x1080 (Full HD)</li>
                <li>• <strong>Frame Rate:</strong> 24-60 fps supported</li>
                <li>• <strong>Duration:</strong> Up to 60 seconds (longer videos can be processed in segments)</li>
                <li>• <strong>File Size:</strong> Maximum 300MB per upload</li>
                <li>• <strong>Output Quality:</strong> Maintains source quality with optional compression</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Enterprise-Grade Infrastructure
          </h3>
          <p className="text-gray-300 mb-6">
            Our <strong className="text-white">baby AI video generator</strong> runs on enterprise-grade 
            infrastructure designed for reliability and scale. With redundant systems, automatic failover, 
            and 99.9% uptime guarantee, you can trust our service for both personal and professional use. 
            The platform processes thousands of videos daily, serving users worldwide with consistent, 
            high-quality results.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">1M+</div>
              <div className="text-gray-400">Videos Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50ms</div>
              <div className="text-gray-400">Average Latency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}