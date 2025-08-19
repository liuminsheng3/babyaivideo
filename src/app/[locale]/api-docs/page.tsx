'use client';

import { useState } from 'react';
import { 
  Code, Book, Key, Shield, Zap, Globe, 
  Terminal, Copy, Check, ChevronRight, ExternalLink,
  Play, AlertCircle, FileJson, Lock, Cpu,
  ArrowRight, Download, Github
} from 'lucide-react';

export default function ApiDocsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/videos/generate',
      description: 'Generate a new AI video',
      auth: true
    },
    {
      method: 'GET',
      path: '/api/v1/videos/{id}',
      description: 'Get video details and status',
      auth: true
    },
    {
      method: 'GET',
      path: '/api/v1/videos',
      description: 'List all videos',
      auth: true
    },
    {
      method: 'DELETE',
      path: '/api/v1/videos/{id}',
      description: 'Delete a video',
      auth: true
    },
    {
      method: 'GET',
      path: '/api/v1/user/credits',
      description: 'Get credit balance',
      auth: true
    },
    {
      method: 'GET',
      path: '/api/v1/styles',
      description: 'List available styles',
      auth: false
    }
  ];

  const codeExamples = {
    javascript: `// Install: npm install @babyai/sdk
import { BabyAI } from '@babyai/sdk';

const client = new BabyAI({
  apiKey: 'your_api_key_here'
});

// Generate a video
const video = await client.videos.generate({
  prompt: 'A happy baby playing with colorful toys',
  style: 'realistic',
  duration: 10,
  resolution: '1080p'
});

console.log('Video ID:', video.id);
console.log('Status:', video.status);`,
    
    python: `# Install: pip install babyai-sdk
from babyai import BabyAI

client = BabyAI(api_key="your_api_key_here")

# Generate a video
video = client.videos.generate(
    prompt="A happy baby playing with colorful toys",
    style="realistic",
    duration=10,
    resolution="1080p"
)

print(f"Video ID: {video.id}")
print(f"Status: {video.status}")`,
    
    curl: `curl -X POST https://api.babyaivideo.com/v1/videos/generate \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A happy baby playing with colorful toys",
    "style": "realistic",
    "duration": 10,
    "resolution": "1080p"
  }'`
  };

  const responseExample = `{
  "id": "vid_abc123xyz",
  "status": "processing",
  "prompt": "A happy baby playing with colorful toys",
  "style": "realistic",
  "duration": 10,
  "resolution": "1080p",
  "created_at": "2024-01-15T10:30:00Z",
  "estimated_completion": "2024-01-15T10:32:00Z",
  "credits_used": 10,
  "urls": {
    "video": null,
    "thumbnail": null
  }
}`;

  const webhookExample = `{
  "event": "video.completed",
  "timestamp": "2024-01-15T10:32:15Z",
  "data": {
    "id": "vid_abc123xyz",
    "status": "completed",
    "urls": {
      "video": "https://cdn.babyaivideo.com/videos/vid_abc123xyz.mp4",
      "thumbnail": "https://cdn.babyaivideo.com/thumbs/vid_abc123xyz.jpg"
    }
  }
}`;

  const errorCodes = [
    { code: 400, message: 'Bad Request', description: 'Invalid request parameters' },
    { code: 401, message: 'Unauthorized', description: 'Invalid or missing API key' },
    { code: 402, message: 'Payment Required', description: 'Insufficient credits' },
    { code: 403, message: 'Forbidden', description: 'Access denied to resource' },
    { code: 404, message: 'Not Found', description: 'Resource not found' },
    { code: 429, message: 'Too Many Requests', description: 'Rate limit exceeded' },
    { code: 500, message: 'Internal Server Error', description: 'Server error, try again later' }
  ];

  const rateLimits = [
    { tier: 'Free', requests: '10/hour', concurrent: '1', burst: '2' },
    { tier: 'Pro', requests: '100/hour', concurrent: '3', burst: '10' },
    { tier: 'Enterprise', requests: '1000/hour', concurrent: '10', burst: '50' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-6">API Documentation</h1>
          <p className="text-xl mb-8 opacity-90">
            Integrate BabyAI Video generation into your applications with our powerful REST API
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#quick-start"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Quick Start Guide
            </a>
            <a
              href="https://github.com/babyai/sdk"
              className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <button className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download SDK
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'authentication', 'endpoints', 'webhooks', 'errors', 'rate-limits', 'sdks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition ${
                  activeTab === tab
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <p className="text-gray-600 mb-6">
                  The BabyAI Video API allows you to programmatically generate AI-powered baby videos. 
                  Our RESTful API is designed to be simple yet powerful, enabling you to integrate 
                  video generation capabilities into your applications with just a few lines of code.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 mb-3">Base URL</h3>
                  <code className="block bg-white px-4 py-2 rounded border border-purple-200">
                    https://api.babyaivideo.com/v1
                  </code>
                </div>
              </section>

              <section id="quick-start">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Get your API key</h3>
                      <p className="text-gray-600">Sign up and get your API key from the dashboard settings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Install the SDK</h3>
                      <p className="text-gray-600">Choose your preferred language and install our official SDK</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Make your first request</h3>
                      <p className="text-gray-600">Generate your first AI video with a simple API call</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Example</h2>
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                    <div className="flex gap-2">
                      {Object.keys(codeExamples).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLanguage(lang)}
                          className={`px-3 py-1 rounded text-sm ${
                            selectedLanguage === lang
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'cURL'}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => copyToClipboard(codeExamples[selectedLanguage as keyof typeof codeExamples], 'example')}
                      className="p-2 text-gray-400 hover:text-white transition"
                    >
                      {copiedCode === 'example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                    <code>{codeExamples[selectedLanguage as keyof typeof codeExamples]}</code>
                  </pre>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <nav className="space-y-2">
                  <a href="#authentication" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                    <Key className="w-4 h-4" />
                    Authentication
                  </a>
                  <a href="#endpoints" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                    <Terminal className="w-4 h-4" />
                    API Endpoints
                  </a>
                  <a href="#webhooks" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                    <Zap className="w-4 h-4" />
                    Webhooks
                  </a>
                  <a href="#rate-limits" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                    <Shield className="w-4 h-4" />
                    Rate Limits
                  </a>
                </nav>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Join our developer community for support and updates
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Authentication */}
        {activeTab === 'authentication' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
              <p className="text-gray-600 mb-6">
                The BabyAI API uses API keys to authenticate requests. You can view and manage your API keys 
                in your dashboard settings. Your API keys carry many privileges, so be sure to keep them secure!
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2">Security Best Practices</h3>
                    <ul className="space-y-1 text-sm text-yellow-800">
                      <li>• Never expose your API key in client-side code</li>
                      <li>• Use environment variables to store API keys</li>
                      <li>• Rotate your keys regularly</li>
                      <li>• Use separate keys for development and production</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-800">
                  <span className="text-gray-300 text-sm">Authorization Header</span>
                </div>
                <pre className="p-4 text-sm text-gray-300">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Key Scopes</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Full Access</h4>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Default</span>
                  </div>
                  <p className="text-sm text-gray-600">Complete access to all API endpoints</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Read Only</h4>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Can only read video data, no generation or deletion</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Generation Only</h4>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Can generate videos but cannot delete or modify</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Endpoints */}
        {activeTab === 'endpoints' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">API Endpoints</h2>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-purple-200 transition">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded text-xs font-semibold ${
                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-gray-900">{endpoint.path}</code>
                      </div>
                      {endpoint.auth && (
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Lock className="w-3 h-3" />
                          Auth Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Example Response</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                  <span className="text-gray-300 text-sm">200 OK</span>
                  <button
                    onClick={() => copyToClipboard(responseExample, 'response')}
                    className="p-2 text-gray-400 hover:text-white transition"
                  >
                    {copiedCode === 'response' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{responseExample}</code>
                </pre>
              </div>
            </section>
          </div>
        )}

        {/* Webhooks */}
        {activeTab === 'webhooks' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Webhooks</h2>
              <p className="text-gray-600 mb-6">
                Webhooks allow you to receive real-time notifications when events happen in your BabyAI account. 
                When an event occurs, we'll send an HTTP POST request to your configured webhook endpoint.
              </p>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Available Events</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <code className="text-sm">video.completed</code>
                    <span className="text-sm text-gray-600">- Video generation completed successfully</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <code className="text-sm">video.failed</code>
                    <span className="text-sm text-gray-600">- Video generation failed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <code className="text-sm">video.processing</code>
                    <span className="text-sm text-gray-600">- Video started processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <code className="text-sm">credits.low</code>
                    <span className="text-sm text-gray-600">- Credit balance below threshold</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                  <span className="text-gray-300 text-sm">Webhook Payload Example</span>
                  <button
                    onClick={() => copyToClipboard(webhookExample, 'webhook')}
                    className="p-2 text-gray-400 hover:text-white transition"
                  >
                    {copiedCode === 'webhook' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{webhookExample}</code>
                </pre>
              </div>
            </section>
          </div>
        )}

        {/* Errors */}
        {activeTab === 'errors' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Error Handling</h2>
              <p className="text-gray-600 mb-6">
                The BabyAI API uses conventional HTTP response codes to indicate the success or failure of an API request. 
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed 
                given the information provided, and codes in the 5xx range indicate an error with our servers.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Code
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {errorCodes.map((error, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            error.code < 400 ? 'bg-green-100 text-green-800' :
                            error.code < 500 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {error.code}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {error.message}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {error.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* Rate Limits */}
        {activeTab === 'rate-limits' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Limits</h2>
              <p className="text-gray-600 mb-6">
                API rate limits are enforced to ensure fair usage and maintain service quality for all users. 
                Rate limits are applied per API key and vary based on your subscription tier.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tier
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Requests
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Concurrent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Burst
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rateLimits.map((limit, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {limit.tier}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {limit.requests}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {limit.concurrent}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {limit.burst}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Rate Limit Headers</h3>
                <p className="text-sm text-blue-800 mb-3">
                  Every API response includes headers with your current rate limit status:
                </p>
                <div className="bg-white rounded border border-blue-200 p-4">
                  <code className="text-sm text-gray-700">
                    X-RateLimit-Limit: 100<br />
                    X-RateLimit-Remaining: 95<br />
                    X-RateLimit-Reset: 1642521600
                  </code>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SDKs */}
        {activeTab === 'sdks' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Official SDKs</h2>
              <p className="text-gray-600 mb-8">
                We provide official SDKs for popular programming languages to make integration easier. 
                All SDKs are open source and actively maintained.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <FileJson className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">JavaScript/TypeScript</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Full TypeScript support with auto-completion and type safety
                  </p>
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <code className="text-sm">npm install @babyai/sdk</code>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Documentation →
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      GitHub →
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Python</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Pythonic API with async support and comprehensive examples
                  </p>
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <code className="text-sm">pip install babyai-sdk</code>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Documentation →
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      GitHub →
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Code className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Ruby</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Idiomatic Ruby with Rails integration support
                  </p>
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <code className="text-sm">gem install babyai</code>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Documentation →
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      GitHub →
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">PHP</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Modern PHP with PSR compliance and Composer support
                  </p>
                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <code className="text-sm">composer require babyai/sdk</code>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Documentation →
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community SDKs</h3>
              <p className="text-gray-600 mb-6">
                The community has created SDKs for additional languages. While not officially supported, 
                these are great options for other platforms:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">Go</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">Rust</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">Java</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">C#/.NET</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">Swift</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm">Kotlin</span>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}