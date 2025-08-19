import { Metadata } from 'next';
import { 
  Users, Target, Award, Globe, Heart, Rocket,
  CheckCircle, Star, TrendingUp, Shield, Zap, Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - BabyAI Video | AI-Powered Baby Video Generation',
  description: 'Learn about BabyAI Video\'s mission to bring joy to families worldwide through innovative AI technology for creating magical baby videos.',
  keywords: 'about BabyAI, AI video company, baby video technology, team, mission, values',
};

export default function AboutPage() {
  const stats = [
    { number: '1M+', label: 'Videos Created', icon: <Sparkles className="w-6 h-6" /> },
    { number: '150K+', label: 'Happy Families', icon: <Heart className="w-6 h-6" /> },
    { number: '50+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Family First',
      description: 'We believe in creating technology that brings families closer together and preserves precious moments.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy & Safety',
      description: 'Your family\'s privacy is our top priority. We use industry-leading security to protect your data.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI to create magical experiences that delight children and parents alike.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Making professional-quality video creation accessible to every family, regardless of technical skills.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quality',
      description: 'Committed to delivering the highest quality AI-generated videos that capture authentic emotions.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Every feature we build starts with understanding and solving real problems for real families.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: '/api/placeholder/200/200',
      bio: 'Former Google AI researcher with a passion for family technology'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: '/api/placeholder/200/200',
      bio: 'Machine learning expert with 15 years in computer vision'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      image: '/api/placeholder/200/200',
      bio: 'Award-winning designer focused on delightful user experiences'
    },
    {
      name: 'David Kim',
      role: 'Head of AI',
      image: '/api/placeholder/200/200',
      bio: 'PhD in AI, specializing in generative models and video synthesis'
    }
  ];

  const milestones = [
    { year: '2023', event: 'BabyAI Video founded with a vision to democratize video creation' },
    { year: '2023', event: 'Launch of beta platform with 1,000 early adopters' },
    { year: '2024', event: 'Reached 100,000 users and 500,000 videos created' },
    { year: '2024', event: 'Series A funding and international expansion' },
    { year: '2025', event: 'Launch of mobile app and API for developers' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Creating Magic for
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Every Family</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to help families capture and create beautiful memories through the power of AI, 
            making professional video creation accessible to everyone.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Start Creating
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              BabyAI Video was born from a simple observation: every parent wants to capture their child's precious moments, 
              but not everyone has the time, skills, or resources to create beautiful videos.
            </p>
            <p className="mb-6">
              Founded in 2023 by a team of AI researchers and parents, we set out to bridge this gap. We combined 
              cutting-edge artificial intelligence with an intuitive interface to create a platform where anyone can 
              generate stunning, personalized baby videos in minutes.
            </p>
            <p className="mb-6">
              Our breakthrough came when we developed our proprietary AI model specifically trained on understanding 
              the nuances of children's expressions, movements, and the emotions that make baby videos so special. 
              This technology, combined with our commitment to privacy and safety, has made us the trusted choice 
              for families worldwide.
            </p>
            <p>
              Today, we're proud to have helped over 150,000 families create more than 1 million videos, 
              preserving memories that will be cherished for generations. But we're just getting started. 
              Our vision is to make BabyAI Video the go-to platform for every family's video creation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Everything we do is guided by our core values and commitment to families
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:bg-purple-50 rounded-xl p-6 transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4 group-hover:scale-110 transition">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Passionate experts dedicated to bringing joy to families through technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-purple-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <span className="text-purple-600 font-bold">{milestone.year}</span>
                    <p className="text-gray-700 mt-1">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us bring joy to millions of families around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              View Open Positions
            </Link>
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Try BabyAI Video
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}