'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { BlueprintGrid } from '@/components/blueprint/BlueprintGrid';
import { Code, Database, Cloud, Shield, Cpu, Globe } from 'lucide-react';
import { skills } from '@/data/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  'Android / Mobile': <Code className="w-5 h-5" />,
  'Architecture & Patterns': <Cpu className="w-5 h-5" />,
  'Backend & Cloud': <Cloud className="w-5 h-5" />,
  'AI / ML': <Database className="w-5 h-5" />,
  'Cybersecurity': <Shield className="w-5 h-5" />,
  'Dev Tools': <Globe className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-blueprint-text mb-4">
            Skills & <span className="text-blueprint-line">Technologies</span>
          </h2>
          <p className="text-blueprint-text-muted max-w-2xl mx-auto">
            Comprehensive expertise across mobile, web, backend, and emerging technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card variant="elevated" className="p-6 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blueprint-line/10 border border-blueprint-line flex items-center justify-center text-blueprint-line">
                    {categoryIcons[category.name]}
                  </div>
                  <div>
                    <h3 className="text-blueprint-text font-mono text-sm">
                      {category.name}
                    </h3>
                    <div className="text-blueprint-text-muted text-xs">
                      {category.icon}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blueprint-text-secondary text-sm">
                          {skill.name}
                        </span>
                        <span className="text-blueprint-line font-mono text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-blueprint-bg rounded-full overflow-hidden border border-blueprint-grid">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blueprint-line to-blueprint-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="outlined" className="p-6">
            <h3 className="text-blueprint-line font-mono text-sm mb-6 text-center">
              PROGRAMMING LANGUAGES
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="flex items-center gap-3 px-4 py-3 bg-blueprint-bg rounded border border-blueprint-grid hover:border-blueprint-line transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <div className="text-blueprint-text text-sm font-mono">
                      {lang.name}
                    </div>
                    <div className="text-blueprint-text-muted text-xs">
                      {lang.level}%
                    </div>
                  </div>
                  <div className="w-24 h-1.5 bg-blueprint-bg rounded-full overflow-hidden border border-blueprint-grid">
                    <motion.div
                      className="h-full bg-blueprint-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Certifications Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-blueprint-bg rounded border border-blueprint-grid">
            <div className="text-4xl font-display text-blueprint-accent mb-2">
              {skills.certifications.total}
            </div>
            <div className="text-blueprint-text-muted text-sm font-mono">
              CERTIFICATES
            </div>
          </div>
          <div className="text-center p-6 bg-blueprint-bg rounded border border-blueprint-grid">
            <div className="text-4xl font-display text-blueprint-line mb-2">
              {skills.certifications.categories}
            </div>
            <div className="text-blueprint-text-muted text-sm font-mono">
              DOMAINS
            </div>
          </div>
          <div className="text-center p-6 bg-blueprint-bg rounded border border-blueprint-grid">
            <div className="text-4xl font-display text-blueprint-success mb-2">
              {skills.certifications.years}+
            </div>
            <div className="text-blueprint-text-muted text-sm font-mono">
              YEARS LEARNING
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
