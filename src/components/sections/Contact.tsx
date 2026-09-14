'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BlueprintGrid } from '@/components/blueprint/BlueprintGrid';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube } from 'lucide-react';
import { bio } from '@/data/bio';

const contactMethods = [
  { icon: Mail, label: 'Email', value: bio.email, href: `mailto:${bio.email}`, accent: true },
  { icon: Phone, label: 'Phone', value: bio.phone, href: `tel:${bio.phone}`, accent: false },
  { icon: MapPin, label: 'Location', value: bio.location, href: null, accent: false },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: bio.github },
  { icon: Linkedin, label: 'LinkedIn', href: bio.linkedin },
  { icon: Youtube, label: 'YouTube', href: bio.youtube },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <BlueprintGrid className="absolute inset-0" size="md" brightness="dim" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-blueprint-line/10 border border-blueprint-line rounded-full mb-4">
            <span className="text-blueprint-text-secondary text-xs font-mono">
              CONTACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-blueprint-text mb-4">
            Get In <span className="text-blueprint-line">Touch</span>
          </h2>
          <p className="text-blueprint-text-muted max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-6 h-full">
              <h3 className="text-blueprint-text font-mono text-lg mb-6">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded border transition-colors',
                      method.href
                        ? 'bg-blueprint-bg border-blueprint-grid hover:border-blueprint-line cursor-pointer'
                        : 'bg-blueprint-bg border-blueprint-grid'
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => method.href && window.open(method.href, '_blank')}
                  >
                    <div className={cn(
                      'w-12 h-12 rounded flex items-center justify-center flex-shrink-0',
                      method.accent
                        ? 'bg-blueprint-line/10 border border-blueprint-line'
                        : 'bg-blueprint-accent/10 border border-blueprint-accent'
                    )}>
                      <method.icon className={cn(
                        'w-5 h-5',
                        method.accent ? 'text-blueprint-line' : 'text-blueprint-accent'
                      )} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-blueprint-text-muted text-xs font-mono mb-0.5">
                        {method.label}
                      </div>
                      <div className={cn(
                        'text-sm truncate',
                        method.accent ? 'text-blueprint-line font-mono' : 'text-blueprint-text'
                      )}>
                        {method.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-blueprint-text-muted text-xs font-mono mb-4">
                  SOCIAL PROFILES
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded bg-blueprint-bg border border-blueprint-grid hover:border-blueprint-line flex items-center justify-center text-blueprint-text-secondary hover:text-blueprint-line transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 pt-6 border-t border-blueprint-grid">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-blueprint-success rounded-full animate-pulse" />
                  <span className="text-blueprint-text font-mono text-sm">
                    AVAILABLE FOR HIRE
                  </span>
                </div>
                <p className="text-blueprint-text-muted text-xs">
                  Open to freelance projects and full-time opportunities
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-6">
              <h3 className="text-blueprint-text font-mono text-lg mb-6">
                SEND MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-blueprint-text-secondary text-sm font-mono mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-blueprint-bg border border-blueprint-grid focus:border-blueprint-line text-blueprint-text rounded outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-blueprint-text-secondary text-sm font-mono mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-blueprint-bg border border-blueprint-grid focus:border-blueprint-line text-blueprint-text rounded outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-blueprint-text-secondary text-sm font-mono mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-blueprint-bg border border-blueprint-grid focus:border-blueprint-line text-blueprint-text rounded outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  leftIcon={isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
