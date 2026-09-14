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
      <
