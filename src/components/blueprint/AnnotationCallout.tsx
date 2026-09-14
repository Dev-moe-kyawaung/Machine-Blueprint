'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnnotationCalloutProps {
  position: { x: number; y: number };
  target: { x: number; y: number };
  title: string;
  description: string;
  align?: 'left' | 'right' | 'center';
  delay?: number;
  className?: string;
}

export function AnnotationCallout({
  position,
  target,
  title,
  description,
  align = 'left',
  delay = 0,
  className,
}: AnnotationCalloutProps) {
  return (
    <motion.div
      className={cn('absolute', className)}
      style={{
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Callout box */}
      <div
        className={cn(
          'relative p-3 bg-blueprint-paper/95 backdrop-blur-sm',
          'border border-blueprint-line shadow-blueprint',
          'max-w-[280px]',
          align === 'right' && 'text-right',
          align === 'center' && 'text-center'
        )}
      >
        {/* Corner markers */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blueprint-accent" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blueprint-accent" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blueprint-accent" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blueprint-accent" />

        {/* Content */}
        <h4 className="text-blueprint-accent font-mono text-xs font-bold mb-1">
          {title}
        </h4>
        <p className="text-blueprint-text-secondary text-xs leading-relaxed">
          {description}
        </p>
      </div>

      {/* Leader line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <path
          d={`M ${position.x + (align === 'right' ? 280 : align === 'center' ? 140 : 0)} ${position.y + 20} 
              L ${target.x} ${target.y}`}
          stroke="var(--bp-line-dim)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        />
        <circle
          cx={target.x}
          cy={target.y}
          r="4"
          fill="var(--bp-accent)"
          className="animate-pulse-glow"
        />
      </svg>
    </motion.div>
  );
}
