'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Youtube, ExternalLink } from 'lucide-react';
import { bio } from '@/data/bio';
import { cn } from '@/lib/utils';

const socialLinks = [
  { href: bio.github, icon: Github, label: 'GitHub' },
  { href: bio.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${bio.email}`, icon: Mail, label: 'Email' },
  { href: bio.youtube, icon: Youtube, label: 'YouTube' },
  { href: bio.bluesky, icon: ExternalLink, label: 'Bluesky' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blueprint-bg-secondary border-t border-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-blueprint-text font-display text-lg mb-4">
              {bio.name}
            </h3>
            <p className="text-blueprint-text-secondary text-sm mb-4">
              {bio.title}
            </p>
            <p className="text-blueprint-text-muted text-xs leading-relaxed">
              {bio.philosophy}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blueprint-line font-mono text-sm mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="text-blueprint-text-secondary hover:text-blueprint-line text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-blueprint-text-secondary hover:text-blueprint-line text-sm transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-blueprint-text-secondary hover:text-blueprint-line text-sm transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blueprint-text-secondary hover:text-blueprint-line text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-blueprint-line font-mono text-sm mb-4">
              CONNECT
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blueprint-text-secondary hover:text-blueprint-line transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blueprint-grid">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blueprint-text-muted text-xs">
              © {currentYear} {bio.name}. All rights reserved.
            </p>
            <p className="text-blueprint-text-muted text-xs font-mono">
              Built with Next.js · Blueprint Theme
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
