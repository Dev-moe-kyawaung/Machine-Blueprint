'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { bio } from '@/data/bio';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isScrolled ? 'bg-blueprint-bg/95 backdrop-blur-md shadow-blueprint' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 border-2 border-blueprint-line rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-6 h-6 border border-blueprint-accent rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-blueprint-accent rounded-full animate-pulse-glow" />
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-blueprint-text font-display text-lg tracking-wider">
                {bio.name.toUpperCase()}
              </h1>
              <p className="text-blueprint-text-secondary text-xs font-mono">
                {bio.title}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-blueprint-text-secondary hover:text-blueprint-line font-mono text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint-text-secondary hover:text-blueprint-line transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blueprint-text-secondary hover:text-blueprint-line transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${bio.email}`}
              className="text-blueprint-text-secondary hover:text-blueprint-line transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <Button size="sm" variant="outline">
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blueprint-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-blueprint-bg border-t border-blueprint-grid"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-blueprint-text font-mono text-sm border-b border-blueprint-grid/50"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-4 mt-4 pt-4">
              <a href={bio.github} target="_blank" rel="noopener noreferrer" className="text-blueprint-text-secondary">
                <Github className="w-6 h-6" />
              </a>
              <a href={bio.linkedin} target="_blank" rel="noopener noreferrer" className="text-blueprint-text-secondary">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${bio.email}`} className="text-blueprint-text-secondary">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
