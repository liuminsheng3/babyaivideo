'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState('en');

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    setLocale(newLocale);
    if (newLocale === 'zh') {
      window.location.href = '/zh';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Baby AI Video
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#how-it-works" className="text-gray-700 hover:text-primary transition">
              How It Works
            </Link>
            <Link href="/#gallery" className="text-gray-700 hover:text-primary transition">
              Gallery
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-primary transition">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition">
              Blog
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-primary transition">
              Help
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-primary transition"
            >
              <Globe className="w-4 h-4" />
              {locale === 'en' ? '中文' : 'English'}
            </button>
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-2">
              <Link
                href="/#how-it-works"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                How It Works
              </Link>
              <Link
                href="/#gallery"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Gallery
              </Link>
              <Link
                href="/#pricing"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Blog
              </Link>
              <Link
                href="/help"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Help
              </Link>
              <div className="border-t mt-2 pt-2">
                <button
                  onClick={toggleLocale}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full"
                >
                  <Globe className="w-4 h-4" />
                  {locale === 'en' ? '中文' : 'English'}
                </button>
                <Link
                  href="/auth/signin"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="block px-4 py-2 text-white bg-primary rounded-lg mx-4 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}