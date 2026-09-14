'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { BlueprintCanvas } from '@/components/blueprint/BlueprintCanvas';
import { User, MapPin, Mail, Phone, Github, Award, Code, Lightbulb } from 'lucide-react';
import { bio } from '@/data/bio';

const infoItems = [
  { icon: User, label: 'Full Name', value: bio.name, accent: false },
  { icon: MapPin, label: 'Location', value: bio.location, accent: true },
  { icon: Mail, label: 'Email', value: bio.email, accent: false },
  { icon: Phone, label: 'Phone', value: bio.phone, accent: false },
  { icon: Github, label: 'GitHub', value: 'Dev-moe-kyawaung', accent: true },
  { icon: Award, label: 'Certificates', value: `${bio.stats.certificates} (Programming Hub)`, accent: true },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <BlueprintGrid className="absolute inset-0" size="lg" brightness="dim" />

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
              ABOUT ME
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-blueprint-text mb-4">
            Developer by passion,<br />
            <span className="text-blueprint-line">learner by nature</span>
          </h2>
          <p className="text-blueprint-text-muted max-w-2xl mx-auto">
            {bio.about}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blueprint-line/10 border border-blueprint-line flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-blueprint-line" />
                </div>
                <h3 className="text-blueprint-text font-mono text-lg">
                  MY JOURNEY
                </h3>
              </div>

              <div className="space-y-4 text-blueprint-text-secondary leading-relaxed">
                <p>
                  I am a passionate and self-motivated developer who believes in continuous learning and growth. From web development to mobile apps, databases to AI — I consistently expand my skill set across the full technology spectrum.
                </p>
                <p>
                  My certification portfolio demonstrates practical, structured learning across 9 major domains and over {bio.stats.certificates} technical subjects — from programming languages and web frameworks to machine learning, blockchain, and cybersecurity.
                </p>
                <p>
                  I build with intention: clean code, modern practices, and a genuine love for problem-solving.
                </p>
              </div>

              {/* Focus areas */}
              <div className="mt-8 pt-6 border-t border-blueprint-grid">
                <h4 className="text-blueprint-text font-mono text-sm mb-4">
                  FOCUS AREAS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-blueprint-bg rounded border border-blueprint-grid">
                    <div className="text-blueprint-line text-xs font-mono mb-1">MOBILE</div>
                    <div className="text-blueprint-text-secondary text-xs">{bio.focus.mobile}</div>
                  </div>
                  <div className="p-3 bg-blueprint-bg rounded border border-blueprint-grid">
                    <div className="text-blueprint-accent text-xs font-mono mb-1">BACKEND</div>
                    <div className="text-blueprint-text-secondary text-xs">{bio.focus.backend}</div>
                  </div>
                  <div className="p-3 bg-blueprint-bg rounded border border-blueprint-grid">
                    <div className="text-blueprint-warning text-xs font-mono mb-1">SECURITY</div>
                    <div className="text-blueprint-text-secondary text-xs">{bio.focus.security}</div>
                  </div>
                  <div className="p-3 bg-blueprint-bg rounded border border-blueprint-grid">
                    <div className="text-blueprint-success text-xs font-mono mb-1">AI / ML</div>
                    <div className="text-blueprint-text-secondary text-xs">{bio.focus.ai}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Info List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blueprint-accent/10 border border-blueprint-accent flex items-center justify-center">
                  <Code className="w-5 h-5 text-blueprint-accent" />
                </div>
                <h3 className="text-blueprint-text font-mono text-lg">
                  INFORMATION
                </h3>
              </div>

              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-blueprint-bg rounded border border-blueprint-grid hover:border-blueprint-line transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={cn(
                      'w-10 h-10 rounded flex items-center justify-center flex-shrink-0',
                      item.accent
                        ? 'bg-blueprint-accent/10 border border-blueprint-accent'
                        : 'bg-blueprint-line/10 border border-blueprint-line'
                    )}>
                      <item.icon className={cn(
                        'w-5 h-5',
                        item.accent ? 'text-blueprint-accent' : 'text-blueprint-line'
                      )} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-blueprint-text-muted text-xs font-mono mb-0.5">
                        {item.label}
                      </div>
                      <div className={cn(
                        'text-sm truncate',
                        item.accent ? 'text-blueprint-accent font-mono' : 'text-blueprint-text'
                      )}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Currently Building */}
              <div className="mt-6 pt-6 border-t border-blueprint-grid">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-blueprint-success rounded-full animate-pulse" />
                  <span className="text-blueprint-text-muted text-xs font-mono">
                    CURRENTLY BUILDING
                  </span>
                </div>
                <div className="text-blueprint-line font-mono text-sm">
                  {bio.currentlyBuilding}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
