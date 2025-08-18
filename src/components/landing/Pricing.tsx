'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Pack',
    credits: 50,
    price: 9.99,
    pricePerCredit: 0.20,
    features: [
      '50 credits',
      '~200 seconds of 512p video',
      'Standard processing speed',
      'Email support'
    ]
  },
  {
    id: 'popular',
    name: 'Popular Pack',
    credits: 200,
    price: 29.99,
    pricePerCredit: 0.15,
    features: [
      '200 credits',
      '~800 seconds of 512p video',
      'Priority processing',
      'Priority email support',
      'Batch processing'
    ],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    credits: 1000,
    price: 99.99,
    pricePerCredit: 0.10,
    features: [
      '1000 credits',
      '~4000 seconds of 512p video',
      'Fastest processing',
      'Priority support',
      'Batch processing',
      'API access'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple Credit-Based Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pay only for what you use. 1 credit = 4 seconds at 512p resolution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                'relative bg-white rounded-2xl shadow-lg p-8',
                plan.popular && 'ring-2 ring-primary shadow-xl'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-1">
                  ${plan.price}
                </div>
                <div className="text-sm text-gray-500">
                  {plan.credits} credits
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  ${plan.pricePerCredit.toFixed(2)} per credit
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/signup"
                className={cn(
                  'block w-full text-center py-3 rounded-lg font-medium transition',
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            New users get <span className="font-semibold text-primary">10 free credits</span> to try our baby AI video generator
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Start your free trial
            <Sparkles className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}