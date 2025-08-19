'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { 
  CheckCircle, AlertCircle, XCircle, Activity, 
  Server, Database, Cloud, Shield, Cpu, HardDrive,
  Globe, Clock, TrendingUp, RefreshCw, Info,
  WifiOff, Zap, BarChart, Calendar
} from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'System Status - BabyAI Video',
//   description: 'Real-time system status and uptime monitoring for BabyAI Video services. Check current operational status and incident history.',
//   keywords: 'system status, uptime, service health, incident reports, maintenance',
// };

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const overallStatus = 'operational'; // operational, degraded, partial, major

  const services = [
    {
      name: 'Video Generation API',
      status: 'operational',
      uptime: 99.99,
      responseTime: '245ms',
      description: 'Core AI video generation service',
      lastChecked: '30 seconds ago'
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: 99.98,
      responseTime: '89ms',
      description: 'Main website and dashboard',
      lastChecked: '30 seconds ago'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: 100,
      responseTime: '112ms',
      description: 'User authentication and authorization',
      lastChecked: '30 seconds ago'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: 100,
      responseTime: '334ms',
      description: 'Credit purchases and subscriptions',
      lastChecked: '30 seconds ago'
    },
    {
      name: 'CDN & Media Storage',
      status: 'operational',
      uptime: 99.99,
      responseTime: '45ms',
      description: 'Video delivery and storage',
      lastChecked: '30 seconds ago'
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: 100,
      responseTime: '12ms',
      description: 'Primary data storage',
      lastChecked: '30 seconds ago'
    }
  ];

  const incidents = [
    {
      id: '1',
      title: 'Scheduled Maintenance Complete',
      status: 'resolved',
      severity: 'info',
      date: '2024-01-14',
      duration: '2 hours',
      description: 'Successfully completed scheduled maintenance for infrastructure upgrades.',
      updates: [
        { time: '02:00 UTC', message: 'Maintenance completed successfully' },
        { time: '00:00 UTC', message: 'Starting scheduled maintenance' }
      ]
    },
    {
      id: '2',
      title: 'Slow Video Generation',
      status: 'resolved',
      severity: 'minor',
      date: '2024-01-10',
      duration: '45 minutes',
      description: 'Some users experienced slower than normal video generation times.',
      updates: [
        { time: '15:45 UTC', message: 'Issue resolved, performance back to normal' },
        { time: '15:00 UTC', message: 'Investigating reports of slow generation' }
      ]
    }
  ];

  const metrics = [
    { label: 'Current Load', value: '42%', trend: 'stable' },
    { label: 'Active Users', value: '3,247', trend: 'up' },
    { label: 'Videos/Hour', value: '1,892', trend: 'up' },
    { label: 'Avg Response', value: '142ms', trend: 'down' }
  ];

  const uptimeHistory = [
    { date: 'Today', uptime: 100 },
    { date: 'Yesterday', uptime: 100 },
    { date: 'Jan 13', uptime: 100 },
    { date: 'Jan 12', uptime: 99.95 },
    { date: 'Jan 11', uptime: 100 },
    { date: 'Jan 10', uptime: 99.8 },
    { date: 'Jan 9', uptime: 100 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'partial':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case 'major':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'partial':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'major':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getOverallStatusMessage = () => {
    switch (overallStatus) {
      case 'operational':
        return 'All Systems Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'partial':
        return 'Partial Outage';
      case 'major':
        return 'Major Outage';
      default:
        return 'Unknown Status';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">System Status</h1>
              <p className="text-gray-600">Real-time monitoring of BabyAI Video services</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated</p>
              <p className="text-lg font-medium text-gray-900">
                {currentTime.toLocaleTimeString()}
              </p>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className="mt-2 text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1"
              >
                <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
                {autoRefresh ? 'Auto-refreshing' : 'Auto-refresh off'}
              </button>
            </div>
          </div>

          {/* Overall Status */}
          <div className={`p-6 rounded-lg border-2 ${getStatusColor(overallStatus)}`}>
            <div className="flex items-center gap-3">
              {getStatusIcon(overallStatus)}
              <h2 className="text-2xl font-bold">{getOverallStatusMessage()}</h2>
            </div>
            <p className="mt-2 opacity-90">
              {overallStatus === 'operational' 
                ? 'All systems are functioning normally with no reported issues.'
                : 'We are currently experiencing some issues. Our team is working to resolve them.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Metrics */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{metric.label}</span>
                  {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                  {metric.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />}
                  {metric.trend === 'stable' && <Activity className="w-4 h-4 text-gray-500" />}
                </div>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-sm text-gray-500">Uptime</p>
                        <p className="font-semibold text-gray-900">{service.uptime}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Response</p>
                        <p className="font-semibold text-gray-900">{service.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Checked</p>
                        <p className="text-sm text-gray-600">{service.lastChecked}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7-Day Uptime History</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-7 gap-2">
              {uptimeHistory.map((day, index) => (
                <div key={index} className="text-center">
                  <p className="text-xs text-gray-500 mb-2">{day.date}</p>
                  <div className={`h-20 rounded flex items-end justify-center ${
                    day.uptime === 100 ? 'bg-green-100' : 
                    day.uptime >= 99.9 ? 'bg-yellow-100' : 
                    'bg-orange-100'
                  }`}>
                    <div className={`w-full rounded ${
                      day.uptime === 100 ? 'bg-green-500' : 
                      day.uptime >= 99.9 ? 'bg-yellow-500' : 
                      'bg-orange-500'
                    }`} style={{ height: `${day.uptime}%` }}></div>
                  </div>
                  <p className="text-xs font-medium text-gray-700 mt-2">{day.uptime}%</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">30-Day Average Uptime</p>
                <p className="text-lg font-bold text-green-600">99.97%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    {incident.severity === 'info' && <Info className="w-5 h-5 text-blue-500 mt-0.5" />}
                    {incident.severity === 'minor' && <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />}
                    {incident.severity === 'major' && <XCircle className="w-5 h-5 text-red-500 mt-0.5" />}
                    <div>
                      <h3 className="font-semibold text-gray-900">{incident.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{incident.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      incident.status === 'resolved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {incident.status}
                    </span>
                    <p className="text-sm text-gray-500 mt-2">{incident.date}</p>
                    <p className="text-xs text-gray-500">Duration: {incident.duration}</p>
                  </div>
                </div>
                <details className="mt-4">
                  <summary className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">
                    View incident updates
                  </summary>
                  <div className="mt-3 space-y-2 pl-4 border-l-2 border-gray-200">
                    {incident.updates.map((update, index) => (
                      <div key={index} className="text-sm">
                        <p className="text-gray-500">{update.time}</p>
                        <p className="text-gray-700">{update.message}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
              View all incident history →
            </a>
          </div>
        </div>
      </section>

      {/* Scheduled Maintenance */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scheduled Maintenance</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900">No Scheduled Maintenance</h3>
                <p className="text-blue-700 mt-1">
                  There is no maintenance currently scheduled. We'll notify you in advance of any planned downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive real-time status updates and maintenance notifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            You can also follow <a href="#" className="underline">@BabyAIStatus</a> on Twitter for updates
          </p>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Global CDN</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Content delivered from 200+ edge locations worldwide
              </p>
              <div className="text-2xl font-bold text-green-600">Active</div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">DDoS Protection</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Enterprise-grade protection against attacks
              </p>
              <div className="text-2xl font-bold text-green-600">Protected</div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Data Redundancy</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Multi-region backups with automatic failover
              </p>
              <div className="text-2xl font-bold text-green-600">3 Regions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}