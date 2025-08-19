import { Metadata } from 'next';
import { 
  Briefcase, MapPin, Clock, DollarSign, Users, Heart,
  Rocket, Target, Award, Coffee, Laptop, Home,
  TrendingUp, Globe, Sparkles, ChevronRight, Search,
  Filter, Building, GraduationCap, Code, Palette,
  BarChart, Megaphone, Shield, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at BabyAI Video - Join Our Team',
  description: 'Join the BabyAI Video team and help us revolutionize how families create and share memories. Explore open positions in AI, engineering, design, and more.',
  keywords: 'BabyAI careers, AI jobs, tech jobs, video technology careers, remote work, job opportunities',
};

export default function CareersPage() {
  const openPositions = [
    {
      id: '1',
      title: 'Senior Machine Learning Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      level: 'Senior',
      salary: '$180k - $250k',
      description: 'Lead the development of our next-generation AI models for video synthesis and generation.',
      requirements: ['5+ years ML experience', 'Computer Vision expertise', 'PyTorch/TensorFlow', 'Video processing'],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid-Senior',
      salary: '$120k - $160k',
      description: 'Design intuitive interfaces that make AI-powered video creation accessible to everyone.',
      requirements: ['3+ years product design', 'Figma expert', 'User research', 'Design systems'],
      posted: '5 days ago'
    },
    {
      id: '3',
      title: 'Full Stack Engineer',
      department: 'Engineering',
      location: 'London, UK / Remote',
      type: 'Full-time',
      level: 'Mid',
      salary: '$100k - $140k',
      description: 'Build scalable web applications using Next.js, React, and modern cloud technologies.',
      requirements: ['React/Next.js', 'Node.js', 'Cloud platforms', 'API design'],
      posted: '1 week ago'
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Singapore / Remote',
      type: 'Full-time',
      level: 'Senior',
      salary: '$130k - $170k',
      description: 'Architect and maintain our cloud infrastructure supporting millions of video generations.',
      requirements: ['Kubernetes', 'AWS/GCP', 'CI/CD pipelines', 'Infrastructure as Code'],
      posted: '1 week ago'
    },
    {
      id: '5',
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid-Senior',
      salary: '$90k - $120k',
      description: 'Create compelling content that tells the BabyAI story and engages our community.',
      requirements: ['Content strategy', 'SEO expertise', 'Social media', 'Analytics'],
      posted: '2 weeks ago'
    },
    {
      id: '6',
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      level: 'Mid',
      salary: '$80k - $110k',
      description: 'Help our customers succeed with BabyAI and build lasting relationships.',
      requirements: ['Customer service', 'SaaS experience', 'Problem solving', 'Communication'],
      posted: '3 days ago'
    }
  ];

  const departments = [
    { name: 'Engineering', count: 12, icon: <Code className="w-5 h-5" /> },
    { name: 'Design', count: 4, icon: <Palette className="w-5 h-5" /> },
    { name: 'Marketing', count: 3, icon: <Megaphone className="w-5 h-5" /> },
    { name: 'Sales', count: 5, icon: <BarChart className="w-5 h-5" /> },
    { name: 'Support', count: 2, icon: <Users className="w-5 h-5" /> },
    { name: 'Operations', count: 3, icon: <Shield className="w-5 h-5" /> }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'Top-tier compensation with equity options for all employees'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, vision, and mental health coverage'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours and async collaboration'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning Budget',
      description: '$2,500 annual budget for courses, conferences, and books'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge and stay productive'
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Equipment',
      description: 'Top-of-the-line equipment and $1,000 home office stipend'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and challenge the status quo to create magical experiences.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'User Obsessed',
      description: 'Every decision starts with understanding and solving real user problems.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Move Fast',
      description: 'We ship quickly, learn from feedback, and iterate to perfection.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Own It',
      description: 'We take ownership of our work and are accountable for outcomes.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const hiringProcess = [
    {
      step: '1',
      title: 'Application Review',
      description: 'We review every application carefully and respond within 3-5 days',
      duration: '3-5 days'
    },
    {
      step: '2',
      title: 'Phone Screen',
      description: '30-min call with our recruiting team to discuss your background and interests',
      duration: '30 mins'
    },
    {
      step: '3',
      title: 'Technical Interview',
      description: 'Role-specific assessment with the hiring manager and team members',
      duration: '1-2 hours'
    },
    {
      step: '4',
      title: 'Team Interview',
      description: 'Meet potential teammates and learn about our culture and projects',
      duration: '2-3 hours'
    },
    {
      step: '5',
      title: 'Offer',
      description: 'We make competitive offers quickly to candidates who are a great fit',
      duration: '1-2 days'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Engineer',
      image: '/api/placeholder/80/80',
      quote: 'The engineering challenges here are unlike anything I\'ve worked on. We\'re literally creating magic with AI.'
    },
    {
      name: 'Michael Park',
      role: 'Product Designer',
      image: '/api/placeholder/80/80',
      quote: 'I love that my work directly impacts millions of families. The user feedback is incredibly rewarding.'
    },
    {
      name: 'Lisa Johnson',
      role: 'Marketing Lead',
      image: '/api/placeholder/80/80',
      quote: 'The culture here is amazing. Everyone is passionate about the mission and supportive of each other.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Us in Creating
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Magic</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Help us build the future of AI-powered video creation. We're looking for passionate 
            individuals who want to make a real impact on how families capture memories.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#positions"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition"
            >
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">85+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$50M</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Open Positions</h2>
          <p className="text-center text-gray-600 mb-12">
            Join our team and help shape the future of AI video generation
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search positions..."
                className="outline-none text-sm"
              />
            </div>
            <select className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm">
              <option>All Departments</option>
              {departments.map(dept => (
                <option key={dept.name}>{dept.name}</option>
              ))}
            </select>
            <select className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm">
              <option>All Locations</option>
              <option>Remote</option>
              <option>San Francisco</option>
              <option>London</option>
              <option>Singapore</option>
            </select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        {position.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {position.requirements.map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Link
                      href={`/careers/${position.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Don't see the right role? We're always looking for talented people.</p>
            <Link
              href="/contact"
              className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2"
            >
              Send us your resume
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section id="culture" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Culture & Values</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We're building a company where the best people want to work, where everyone feels valued, 
            and where we all share a common mission to bring joy to families worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.color} p-0.5`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center group-hover:bg-transparent transition">
                    <Sparkles className="w-8 h-8 text-gray-700 group-hover:text-white transition" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Benefits & Perks</h2>
          <p className="text-center text-gray-600 mb-12">
            We take care of our team so they can focus on doing their best work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Hiring Process</h2>
          <p className="text-center text-gray-600 mb-12">
            We've designed our interview process to be thorough yet respectful of your time
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="space-y-8">
                {hiringProcess.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-gray-500">{step.duration}</span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Team Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at BabyAI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Life at BabyAI</h2>
          <p className="text-center text-gray-600 mb-12">
            Get a glimpse of what it's like to work with us
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`/api/placeholder/300/300`}
                  alt={`Office life ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us create magical moments for millions of families around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#positions"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              View Open Positions
            </a>
            <Link
              href="/about"
              className="px-8 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Globe className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Equal Opportunity Employer</h3>
          <p className="text-sm text-gray-600">
            BabyAI Video is an equal opportunity employer committed to building a diverse and inclusive team. 
            We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, 
            age, marital status, veteran status, or disability status. We celebrate our differences and believe 
            that a diverse team builds better products.
          </p>
        </div>
      </section>
    </div>
  );
}