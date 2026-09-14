'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { BlueprintGrid } from '@/components/blueprint/BlueprintGrid';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background */}
      <BlueprintGrid className="absolute inset-0" size="lg" brightness="dim" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-blueprint-accent/10 border border-blueprint-accent rounded-full mb-4">
            <span className="text-blueprint-text-secondary text-xs font-mono">
              EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-blueprint-text mb-4">
            Professional <span className="text-blueprint-accent">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blueprint-line via-blueprint-accent to-transparent" />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              className={cn(
                'relative mb-12',
                'md:flex',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-blueprint-accent rounded-full border-4 border-blueprint-bg shadow-glow-accent z-10" />

              {/* Content */}
              <div className={cn(
                'ml-20 md:ml-0 md:w-1/2',
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              )}>
                <Card variant="elevated" className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blueprint-accent/10 border border-blueprint-accent flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-blueprint-accent" />
                    </div>
                    <div>
                      <h3 className="text-blueprint-text font-display text-lg mb-1">
                        {job.role}
                      </h3>
                      <p className="text-blueprint-line font-mono text-sm">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-blueprint-text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-blueprint-text-secondary text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blueprint-success flex-shrink-0 mt-0.5" />
                        <span className="text-blueprint-text-secondary">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
