'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'elevated' | 'outlined';
  hoverable?: boolean;
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = false, glow = false, children, ...props }, ref) => {
    const baseStyles = cn(
      'relative bg-blueprint-paper',
      'border transition-all duration-300',
      {
        'border-blueprint-paper-border shadow-blueprint': variant === 'default',
        'border-blueprint-line shadow-blueprint-lg': variant === 'elevated',
        'border-blueprint-grid shadow-sm': variant === 'outlined',
        'hover:shadow-glow hover:border-blueprint-line cursor-pointer': hoverable,
        'shadow-glow': glow,
      },
      className
    );

    return (
      <motion.div
        ref={ref}
        className={baseStyles}
        whileHover={hoverable ? { scale: 1.02, y: -4 } : {}}
        whileTap={hoverable ? { scale: 0.98 } : {}}
        {...props}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blueprint-line opacity-50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blueprint-line opacity-50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blueprint-line opacity-50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blueprint-line opacity-50" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
