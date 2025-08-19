import { Metadata } from 'next';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, Send,
  Globe, Headphones, FileQuestion, BookOpen, AlertCircle,
  CheckCircle, ArrowRight, Users, Building, Twitter,
  Facebook, Linkedin, Youtube, Instagram, Github
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - BabyAI Video | Get in Touch',
  description: 'Have questions about BabyAI Video? Contact our support team for help with video generation, technical issues, or business inquiries.',
  keywords: 'contact BabyAI, customer support, help center, business inquiries, technical support',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Get help via email',
      info: 'support@babyaivideo.com',
      action: 'Send Email',
      responseTime: 'Response within 24 hours'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our team',
      info: 'Available 9AM-6PM EST',
      action: 'Start Chat',
      responseTime: 'Instant response'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Talk to a specialist',
      info: '+1 (555) 123-4567',
      action: 'Call Now',
      responseTime: 'Mon-Fri, 9AM-6PM EST'
    }
  ];

  const offices = [
    {
      location: 'San Francisco (HQ)',
      address: '100 Market Street, Suite 300',
      city: 'San Francisco, CA 94111',
      country: 'United States',
      email: 'sf@babyaivideo.com'
    },
    {
      location: 'London',
      address: '25 Old Broad Street',
      city: 'London EC2N 1HN',
      country: 'United Kingdom',
      email: 'london@babyaivideo.com'
    },
    {
      location: 'Singapore',
      address: '1 Raffles Place, Tower One',
      city: 'Singapore 048616',
      country: 'Singapore',
      email: 'singapore@babyaivideo.com'
    }
  ];

  const departments = [
    {
      name: 'Sales & Partnerships',
      email: 'sales@babyaivideo.com',
      description: 'Enterprise solutions and partnerships'
    },
    {
      name: 'Media Inquiries',
      email: 'press@babyaivideo.com',
      description: 'Press releases and media kit'
    },
    {
      name: 'Careers',
      email: 'careers@babyaivideo.com',
      description: 'Job opportunities and internships'
    },
    {
      name: 'Legal & Compliance',
      email: 'legal@babyaivideo.com',
      description: 'Terms, privacy, and legal matters'
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.'
    },
    {
      question: 'What video formats are supported?',
      answer: 'We support MP4, MOV, and WebM formats. Videos can be exported in various resolutions up to 4K.'
    },
    {
      question: 'How long does video generation take?',
      answer: 'Most videos are generated within 1-3 minutes. Complex or longer videos may take up to 5 minutes.'
    },
    {
      question: 'Can I get a refund for unused credits?',
      answer: 'Credits are non-refundable, but you can cancel your subscription anytime to prevent future charges.'
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're here to help! Whether you have questions about our platform, need technical support, 
            or want to explore partnership opportunities, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="font-medium text-purple-600 mb-2">{method.info}</p>
                <p className="text-xs text-gray-500 mb-4">{method.responseTime}</p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
              />
              <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                I'd like to receive updates about BabyAI Video products and services
              </label>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">Before submitting:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Check our FAQ section below for quick answers</li>
                    <li>For account issues, please include your username</li>
                    <li>For technical issues, include your browser and OS details</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
              <button
                type="reset"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Offices</h2>
          <p className="text-center text-gray-600 mb-12">
            Visit us at any of our global locations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Building className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{office.location}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.city}</p>
                  <p>{office.country}</p>
                  <a href={`mailto:${office.email}`} className="text-purple-600 hover:text-purple-700 flex items-center gap-1 mt-3">
                    <Mail className="w-4 h-4" />
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact by Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-purple-200 transition">
                <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                <a href={`mailto:${dept.email}`} className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">
            Find quick answers to common questions
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg border border-gray-200 p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/docs" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              View Complete Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-xl mb-8 opacity-90">
            Follow us on social media for updates, tips, and community highlights
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Our Support Promise</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Email responses within 24 hours (usually much faster)</li>
                  <li>• Live chat available during business hours</li>
                  <li>• Priority support for Pro and Enterprise customers</li>
                  <li>• 99.9% uptime guarantee with real-time status updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component to avoid repetition
function ChevronRight({ className }: { className?: string }) {
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}