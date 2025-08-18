'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = pathname.startsWith('/zh') ? 'zh' : 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { href: string; label: string }[] = [];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale === 'zh' ? 'zh' : 'en'}`} className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Baby AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={locale === 'en' ? '/zh' : '/en'}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 px-3"
            >
              {locale === 'en' ? '中文' : 'English'}
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-1 px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
            >
              TRY NOW
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-zinc-800">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-zinc-800 mt-4 pt-4 px-4 space-y-3">
                  <Link
                    href={locale === 'en' ? '/zh' : '/en'}
                    className="block text-zinc-400 hover:text-white transition-colors"
                  >
                    {locale === 'en' ? '中文' : 'English'}
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="inline-flex items-center justify-center gap-1 w-full px-5 py-3 text-sm font-medium text-black bg-white rounded-full"
                  >
                    TRY NOW
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}