import { useTranslations } from 'next-intl';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Mail, MessageCircle, FileText, Video } from 'lucide-react';

export default function HelpPage() {
  const t = useTranslations('footer');
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-center">{t('help')}</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Email Support</h2>
              <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
              <a href="mailto:support@babyaivideo.com" className="text-primary hover:underline">
                support@babyaivideo.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Live Chat</h2>
              <p className="text-gray-600 mb-4">Chat with our support team</p>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Documentation</h2>
              <p className="text-gray-600 mb-4">Browse our comprehensive guides</p>
              <a href="/docs" className="text-primary hover:underline">
                View Documentation
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Video className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-3">Video Tutorials</h2>
              <p className="text-gray-600 mb-4">Learn with step-by-step videos</p>
              <a href="/tutorials" className="text-primary hover:underline">
                Watch Tutorials
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Common Questions</h2>
            <ul className="space-y-3">
              <li>
                <a href="/#faq" className="text-primary hover:underline">
                  How long does processing take?
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-primary hover:underline">
                  What video formats are supported?
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-primary hover:underline">
                  How do credits work?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}