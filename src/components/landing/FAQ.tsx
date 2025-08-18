'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: t('q1.question'),
      answer: t('q1.answer')
    },
    {
      question: t('q2.question'),
      answer: t('q2.answer')
    },
    {
      question: t('q3.question'),
      answer: t('q3.answer')
    },
    {
      question: t('q4.question'),
      answer: t('q4.answer')
    },
    {
      question: t('q5.question'),
      answer: t('q5.answer')
    },
    {
      question: t('q6.question'),
      answer: t('q6.answer')
    },
    {
      question: t('q7.question'),
      answer: t('q7.answer')
    },
    {
      question: t('q8.question'),
      answer: t('q8.answer')
    },
    {
      question: t('q9.question'),
      answer: t('q9.answer')
    },
    {
      question: t('q10.question'),
      answer: t('q10.answer')
    },
    {
      question: t('q11.question'),
      answer: t('q11.answer')
    },
    {
      question: t('q12.question'),
      answer: t('q12.answer')
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
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

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-500 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}