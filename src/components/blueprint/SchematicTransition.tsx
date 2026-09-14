'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SchematicTransitionProps {
  children: React.ReactNode;
  isActive: boolean;
  duration?: number;
  type?: 'reveal' | 'overlay' | 'scan';
  className?: string;
}

export function SchematicTransition({
  children,
  isActive,
  duration = 1500,
  type = 'reveal',
  className,
}: SchematicTransitionProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setShowContent(true), duration);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isActive, duration]);

  if (type === 'reveal') {
    return (
      <div className={cn('relative', className)}>
        <AnimatePresence>
          {!showContent && (
            <motion.div
              className="absolute inset-0 z-20 bg-blueprint-bg"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: duration / 1000 }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
              
              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blueprint-line to-transparent"
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
              />

              {/* Corner decorations */}
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blueprint-accent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-blueprint-accent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-blueprint-accent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              />
              <motion.div
                className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blueprint-accent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              />

              {/* Loading text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-blueprint-line font-mono text-sm tracking-widest">
                  LOADING SCHEMATIC...
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: showContent ? 1 : 0, filter: showContent ? 'blur(0)' : 'blur(10px)' }}
          transition={{ duration: duration / 1000 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
