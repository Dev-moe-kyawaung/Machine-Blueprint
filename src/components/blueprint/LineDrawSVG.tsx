'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import { generateSVGPath, calculatePathLength, type BlueprintPath } from '@/lib/blueprint-engine';

interface LineDrawSVGProps {
  paths: BlueprintPath[];
  className?: string;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  animated?: boolean;
  onComplete?: () => void;
}

export function LineDrawSVG({
  paths,
  className,
  delay = 0,
  duration = 2000,
  strokeWidth = 1.5,
  stroke = 'var(--bp-line)',
  fill = 'none',
  animated = true,
  onComplete,
}: LineDrawSVGProps) {
  const controls = useAnimation();
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    if (!animated) return;

    const animatePaths = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));

      for (let i = 0; i < pathRefs.current.length; i++) {
        const path = pathRefs.current[i];
        if (!path) continue;

        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        await controls.start({
          strokeDashoffset: 0,
          transition: { duration: duration / 1000, ease: 'easeOut' },
        });
      }

      onComplete?.();
    };

    animatePaths();
  }, [animated, delay, duration, controls, onComplete]);

  const allPaths = paths.map((path, index) => {
    const d = generateSVGPath(path);
    const length = calculatePathLength(path);

    return (
      <motion.path
        key={index}
        ref={(el) => {
          pathRefs.current[index] = el;
        }}
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { opacity: 0 } : { opacity: 1 }}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ delay: delay + index * 100 }}
        style={{
          strokeDasharray: length,
          strokeDashoffset: animated ? length : 0,
        }}
      />
    );
  });

  return (
    <svg
      className={cn('w-full h-full', className)}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid meet"
    >
      {allPaths}
    </svg>
  );
}
