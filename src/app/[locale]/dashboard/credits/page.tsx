'use client';

import { useState } from 'react';
import { 
  Coins, TrendingUp, TrendingDown, Calendar, Clock,
  ShoppingCart, Gift, AlertCircle, ChevronRight,
  Plus, ArrowUpRight, ArrowDownRight, Filter,
  Download, CreditCard, Sparkles, Zap, Package
} from 'lucide-react';
import Link from 'next/link';

export default function CreditsPage() {
  const [timeRange, setTimeRange] = useState('30d');
  const [transactionFilter, setTransactionFilter] = useState('all');

  // Mock data
  const creditBalance = {
    current: 33,
    total: 100,
    used: 67,
    expiring: 10,
    expiryDate: '2024-02-01'
  };

  const transactions = [
    { id: '1', type: 'spent', description: 'Video Generation - Baby Playing', amount: -10, date: '2024-01-15 14:30', status: 'completed' },
    { id: '2', type: 'earned', description: 'Monthly Plan Renewal', amount: 100, date: '2024-01-01 00:00', status: 'completed' },
    { id: '3', type: 'spent', description: 'Video Generation - First Steps', amount: -10, date: '2023-12-28 16:45', status: 'completed' },
    { id: '4', type: 'earned', description: 'Referral Bonus', amount: 25, date: '2023-12-25 10:00', status: 'completed' },
    { id: '5', type: 'spent', description: 'Video Generation - Laughing Baby', amount: -15, date: '2023-12-20 09:15', status: 'completed' },
    { id: '6', type: 'refund', description: 'Failed Generation Refund', amount: 10, date: '2023-12-18 13:20', status: 'completed' },
    { id: '7', type: 'spent', description: 'Premium Style - Pixar Animation', amount: -20, date: '2023-12-15 11:30', status: 'completed' },
    { id: '8', type: 'earned', description: 'Purchased Credit Pack', amount: 50, date: '2023-12-10 15:00', status: 'completed' },
  ];

  const creditPacks = [
    { id: 'small', credits: 25, price: 9, savings: 0, popular: false },
    { id: 'medium', credits: 60, price: 19, savings: 15, popular: true },
    { id: 'large', credits: 150, price: 39, savings: 25, popular: false },
    { id: 'mega', credits: 500, price: 99, savings: 40, popular: false },
  ];

  const usageStats = {
    weeklyAverage: 15,
    monthlyTotal: 67,
    mostUsedStyle: 'Realistic',
    averageVideoLength: '12 seconds',
    successRate: '94%'
  };

  const filteredTransactions = transactions.filter(t => {
    if (transactionFilter === 'all') return true;
    return t.type === transactionFilter;
  });

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'spent':
        return <ArrowUpRight className="w-4 h-4 text-red-500" />;
      case 'earned':
        return <ArrowDownRight className="w-4 h-4 text-green-500" />;
      case 'refund':
        return <ArrowDownRight className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'spent':
        return 'text-red-600';
      case 'earned':
        return 'text-green-600';
      case 'refund':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Credits Management</h1>
          <p className="mt-2 text-gray-600">Track your credit usage and purchase additional credits</p>
        </div>

        {/* Credit Balance Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-purple-200 text-sm mb-2">Available Credits</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">{creditBalance.current}</span>
                <span className="text-purple-200">/ {creditBalance.total}</span>
              </div>
              <div className="mt-4">
                <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-white h-full rounded-full transition-all duration-500"
                    style={{ width: `${(creditBalance.current / creditBalance.total) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-purple-200 mt-2">
                  {Math.round((creditBalance.current / creditBalance.total) * 100)}% remaining
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-purple-200">Used this month</span>
                <span className="font-semibold">{creditBalance.used}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200">Plan credits</span>
                <span className="font-semibold">{creditBalance.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200">Bonus credits</span>
                <span className="font-semibold">0</span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                {creditBalance.expiring > 0 && (
                  <div className="bg-white/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <p className="text-sm">
                        {creditBalance.expiring} credits expiring on {new Date(creditBalance.expiryDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <Link
                  href="/dashboard/upgrade"
                  className="flex-1 px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
                >
                  Upgrade Plan
                </Link>
                <button
                  className="flex-1 px-4 py-2 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition"
                >
                  Buy Credits
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Weekly Average</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{usageStats.weeklyAverage}</p>
            <p className="text-xs text-gray-500 mt-1">credits per week</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">This Month</span>
              <Calendar className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{usageStats.monthlyTotal}</p>
            <p className="text-xs text-gray-500 mt-1">credits used</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Most Used</span>
              <Sparkles className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{usageStats.mostUsedStyle}</p>
            <p className="text-xs text-gray-500 mt-1">style preference</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Success Rate</span>
              <Zap className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{usageStats.successRate}</p>
            <p className="text-xs text-gray-500 mt-1">generation success</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transaction History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Transaction History</h2>
                  <div className="flex items-center gap-2">
                    <select
                      value={transactionFilter}
                      onChange={(e) => setTransactionFilter(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="all">All</option>
                      <option value="spent">Spent</option>
                      <option value="earned">Earned</option>
                      <option value="refund">Refunds</option>
                    </select>
                    <button className="p-1 text-gray-600 hover:text-gray-900">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount} credits
                        </p>
                        <p className="text-xs text-gray-500">{transaction.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <button className="w-full text-center text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Load More Transactions
                </button>
              </div>
            </div>
          </div>

          {/* Credit Packs */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Buy Credits</h2>
              <p className="text-sm text-gray-600 mb-4">
                Need more credits? Purchase additional credit packs anytime.
              </p>

              <div className="space-y-3">
                {creditPacks.map((pack) => (
                  <div
                    key={pack.id}
                    className={`relative border rounded-lg p-4 hover:shadow-md transition ${
                      pack.popular ? 'border-purple-600' : 'border-gray-200'
                    }`}
                  >
                    {pack.popular && (
                      <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    )}
                    
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{pack.credits} Credits</p>
                        {pack.savings > 0 && (
                          <p className="text-xs text-green-600">Save {pack.savings}%</p>
                        )}
                      </div>
                      <p className="text-2xl font-bold text-gray-900">${pack.price}</p>
                    </div>
                    
                    <button className={`w-full py-2 rounded-lg font-medium transition ${
                      pack.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      Purchase
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Tips */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Credit Saving Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Use lower resolution for test videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Batch similar videos together</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Refer friends for bonus credits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Use basic styles for drafts</span>
                </li>
              </ul>
            </div>

            {/* Referral Program */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-600" />
                Earn Free Credits
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Invite friends and earn 25 credits for each friend who signs up!
              </p>
              <div className="p-3 bg-gray-50 rounded-lg mb-4">
                <p className="text-xs text-gray-500 mb-1">Your referral code</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 px-2 py-1 bg-white rounded text-sm font-mono">
                    BABY2024
                  </code>
                  <button className="p-1 text-purple-600 hover:text-purple-700">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                Invite Friends
              </button>
            </div>
          </div>
        </div>

        {/* Usage Chart */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Credit Usage Over Time</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  timeRange === '7d' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  timeRange === '30d' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                30 Days
              </button>
              <button
                onClick={() => setTimeRange('90d')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  timeRange === '90d' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                90 Days
              </button>
            </div>
          </div>

          {/* Placeholder for chart */}
          <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-600">Usage chart visualization would go here</p>
              <p className="text-sm text-gray-500 mt-1">Showing {timeRange} of data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Copy({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}