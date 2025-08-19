'use client';

import { useState } from 'react';
import { 
  Check, X, Sparkles, Zap, Crown, ArrowRight, 
  CreditCard, Shield, Award, TrendingUp, Users,
  Clock, Download, Video, Palette, Settings2,
  ChevronRight, Info, Gift
} from 'lucide-react';
import Link from 'next/link';

export default function UpgradePage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      icon: <Sparkles className="w-6 h-6" />,
      price: { monthly: 0, yearly: 0 },
      credits: 10,
      description: 'Perfect for trying out our AI video generation',
      features: [
        { text: '10 credits per month', included: true },
        { text: '720p video quality', included: true },
        { text: '5-second videos', included: true },
        { text: 'Basic styles', included: true },
        { text: 'Community support', included: true },
        { text: 'Watermark on videos', included: true },
        { text: 'Priority processing', included: false },
        { text: 'Custom branding', included: false },
        { text: 'API access', included: false },
        { text: 'Advanced analytics', included: false },
      ],
      badge: null,
      current: true
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: <Zap className="w-6 h-6" />,
      price: { monthly: 29, yearly: 290 },
      credits: 100,
      description: 'For content creators and small businesses',
      features: [
        { text: '100 credits per month', included: true },
        { text: '1080p HD video quality', included: true },
        { text: '30-second videos', included: true },
        { text: 'All style options', included: true },
        { text: 'Priority email support', included: true },
        { text: 'No watermark', included: true },
        { text: 'Priority processing', included: true },
        { text: 'Download in multiple formats', included: true },
        { text: 'API access', included: false },
        { text: 'Advanced analytics', included: false },
      ],
      badge: 'Most Popular',
      current: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6" />,
      price: { monthly: 99, yearly: 990 },
      credits: 500,
      description: 'For teams and large-scale production',
      features: [
        { text: '500 credits per month', included: true },
        { text: '4K Ultra HD quality', included: true },
        { text: '60-second videos', included: true },
        { text: 'All style options + custom', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'No watermark', included: true },
        { text: 'Instant processing', included: true },
        { text: 'All export formats', included: true },
        { text: 'Full API access', included: true },
        { text: 'Advanced analytics & insights', included: true },
      ],
      badge: 'Best Value',
      current: false
    }
  ];

  const currentPlan = plans.find(p => p.current);
  const yearlyDiscount = billingCycle === 'yearly' ? 0.17 : 0; // 17% discount

  const comparisons = [
    { feature: 'Monthly Credits', free: '10', pro: '100', enterprise: '500' },
    { feature: 'Video Quality', free: '720p', pro: '1080p', enterprise: '4K' },
    { feature: 'Max Duration', free: '5 sec', pro: '30 sec', enterprise: '60 sec' },
    { feature: 'Styles Available', free: 'Basic', pro: 'All', enterprise: 'All + Custom' },
    { feature: 'Processing Speed', free: 'Standard', pro: 'Priority', enterprise: 'Instant' },
    { feature: 'Support', free: 'Community', pro: 'Email', enterprise: 'Dedicated' },
    { feature: 'API Access', free: '—', pro: '—', enterprise: '✓' },
    { feature: 'Team Collaboration', free: '—', pro: '—', enterprise: '✓' },
    { feature: 'Custom Branding', free: '—', pro: '✓', enterprise: '✓' },
    { feature: 'Analytics', free: 'Basic', pro: 'Standard', enterprise: 'Advanced' },
  ];

  const addons = [
    {
      name: 'Extra Credits Pack',
      description: '50 additional credits',
      price: 15,
      icon: <Sparkles className="w-5 h-5 text-purple-600" />
    },
    {
      name: 'Rush Processing',
      description: 'Jump to the front of the queue',
      price: 10,
      icon: <Zap className="w-5 h-5 text-yellow-600" />
    },
    {
      name: 'Extended Storage',
      description: '100GB additional storage',
      price: 5,
      icon: <Download className="w-5 h-5 text-blue-600" />
    }
  ];

  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upgrade Your Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock more credits and premium features to create amazing videos
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Current Plan Info */}
        {currentPlan && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-blue-600" />
                <span className="text-blue-900">
                  You're currently on the <strong>{currentPlan.name}</strong> plan with{' '}
                  <strong>{currentPlan.credits} credits</strong> per month
                </span>
              </div>
              <Link
                href="/dashboard/credits"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View usage →
              </Link>
            </div>
          </div>
        )}

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const price = billingCycle === 'yearly' 
              ? Math.floor(plan.price.yearly / 12)
              : plan.price.monthly;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all ${
                  plan.id === 'pro'
                    ? 'border-purple-600 shadow-xl scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        plan.id === 'free' ? 'bg-gray-100' :
                        plan.id === 'pro' ? 'bg-purple-100' :
                        'bg-gradient-to-br from-purple-100 to-pink-100'
                      }`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    </div>
                    {plan.current && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${price}
                      </span>
                      <span className="ml-2 text-gray-500">
                        /{billingCycle === 'yearly' ? 'mo' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                      <p className="text-sm text-green-600 mt-1">
                        ${plan.price.yearly} billed annually
                      </p>
                    )}
                  </div>

                  <div className="mb-6 p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-900">
                        Credits included
                      </span>
                      <span className="text-lg font-bold text-purple-900">
                        {plan.credits}/mo
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mt-0.5" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.current ? (
                    <button
                      disabled
                      className="w-full py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
                    >
                      Current Plan
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpgrade(plan.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition ${
                        plan.id === 'pro'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Upgrade to {plan.name}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Detailed Plan Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Free
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center justify-center gap-2">
                      Pro
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisons.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      {row.free}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-900 font-medium">
                      {row.pro}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-900 font-medium">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Power-ups & Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {addon.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">${addon.price}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                <button className="w-full py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition text-sm font-medium">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Upgrade?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Increased Productivity</h3>
              <p className="text-sm text-gray-600">
                Generate more videos faster with priority processing
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">
                Access to 4K resolution and advanced AI models
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-sm text-gray-600">
                Get help when you need it with dedicated support
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg border border-gray-200 p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Can I change plans anytime?
              </summary>
              <p className="mt-3 text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
                and we'll prorate any payments.
              </p>
            </details>
            <details className="bg-white rounded-lg border border-gray-200 p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                What happens to unused credits?
              </summary>
              <p className="mt-3 text-gray-600">
                Credits expire at the end of each billing cycle and don't roll over. We recommend choosing
                a plan that matches your monthly usage.
              </p>
            </details>
            <details className="bg-white rounded-lg border border-gray-200 p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Do you offer refunds?
              </summary>
              <p className="mt-3 text-gray-600">
                We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied,
                contact support for a full refund.
              </p>
            </details>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold mb-4">Complete Your Upgrade</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Selected Plan:</span>
                    <span className="font-semibold capitalize">{selectedPlan}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">Billing Cycle:</span>
                    <span className="font-semibold capitalize">{billingCycle}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Pay with Card
                  </button>
                  <button className="w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                    Pay with PayPal
                  </button>
                </div>

                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200 mt-4"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}