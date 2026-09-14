'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BlueprintGrid } from '@/components/blueprint/BlueprintGrid';
import { GearSystem } from '@/components/blueprint/GearSystem';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { bio } from '@/data/bio';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <BlueprintGrid
        className="absolute inset-0"
        size="md"
        brightness="dim"
        showScanLine={true}
      />

      {/* Animated gears background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <GearSystem speed={30000} />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blueprint-line/10 border border-blueprint-line rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-blueprint-success rounded-full animate-pulse" />
              <span className="text-blueprint-text-secondary text-xs font-mono">
                AVAILABLE FOR HIRE
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display text-blueprint-text mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {bio.name.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-xl sm:text-2xl text-blueprint-line font-mono mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {bio.title}
            </motion.p>

            {/* Location */}
            <motion.p
              className="text-blueprint-text-secondary text-sm mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              📍 {bio.location}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-blueprint-text-muted text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {bio.summary}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-3xl font-display text-blueprint-accent mb-1">
                  {bio.stats.certificates}
                </div>
                <div className="text-blueprint-text-muted text-xs font-mono">
                  CERTIFICATES
                </div>
              </div>
              <div className="w-px bg-blueprint-grid" />
              <div className="text-center">
                <div className="text-3xl font-display text-blueprint-accent mb-1">
                  {bio.stats.categories}
                </div>
                <div className="text-blueprint-text-muted text-xs font-mono">
                  DOMAINS
                </div>
              </div>
              <div className="w-px bg-blueprint-grid" />
              <div className="text-center">
                <div className="text-3xl font-display text-blueprint-accent mb-1">
                  {bio.stats.years}+
                </div>
                <div className="text-blueprint-text-muted text-xs font-mono">
                  YEARS EXP
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                rightIcon={<ArrowDown className="w-4 h-4" />}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(bio.github, '_blank')}
                leftIcon={<Github className="w-4 h-4" />}
              >
                GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(`mailto:${bio.email}`, '_blank')}
                leftIcon={<Mail className="w-4 h-4" />}
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Rotating gear rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[400px] h-[400px] border-2 border-blueprint-line-dim rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="w-[350px] h-[350px] border border-blueprint-grid rounded-full absolute"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Image container */}
            <Card variant="elevated" className="relative p-2">
              <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] overflow-hidden rounded-lg">
                <Image
                  src={bio.profileImage}
                  alt={bio.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blueprint-accent" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blueprint-accent" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-blueprint-accent" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-blueprint-accent" />
              </div>

              {/* Technical info overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-blueprint-bg/90 backdrop-blur border border-blueprint-line p-3 rounded">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blueprint-text-muted font-mono">STATUS</span>
                  <span className="text-blueprint-success font-mono">● ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-blueprint-text-muted font-mono">LEVEL</span>
                  <span className="text-blueprint-line font-mono">SENIOR</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blueprint-line rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-blueprint-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
