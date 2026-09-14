'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useGearRotation } from '@/hooks/useGearRotation';
import { createGear, generateSVGPath } from '@/lib/blueprint-engine';

interface GearProps {
  x: number;
  y: number;
  outerRadius: number;
  innerRadius: number;
  teeth: number;
  speed?: number;
  direction?: 'clockwise' | 'counterclockwise';
  color?: string;
  className?: string;
  paused?: boolean;
}

function Gear({
  x,
  y,
  outerRadius,
  innerRadius,
  teeth,
  speed = 20000,
  direction = 'clockwise',
  color = 'var(--bp-line)',
  className,
  paused = false,
}: GearProps) {
  const rotation = useGearRotation({ speed, direction, paused });
  const gearPaths = createGear(x, y, outerRadius, innerRadius, teeth);

  return (
    <motion.svg
      className={cn('absolute', className)}
      style={{
        left: x - outerRadius,
        top: y - outerRadius,
        width: outerRadius * 2,
        height: outerRadius * 2,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
      }}
      viewBox={`${x - outerRadius - 10} ${y - outerRadius - 10} ${outerRadius * 2 + 20} ${outerRadius * 2 + 20}`}
    >
      {gearPaths.map((path, index) => (
        <path
          key={index}
          d={generateSVGPath(path)}
          stroke={color}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </motion.svg>
  );
}

interface GearSystemProps {
  className?: string;
  gearCount?: number;
  speed?: number;
  paused?: boolean;
}

export function GearSystem({
  className,
  gearCount = 3,
  speed = 20000,
  paused = false,
}: GearSystemProps) {
  const gears = [
    { x: 100, y: 150, outerRadius: 60, innerRadius: 40, teeth: 12, direction: 'clockwise' as const },
    { x: 220, y: 150, outerRadius: 60, innerRadius: 40, teeth: 12, direction: 'counterclockwise' as const },
    { x: 340, y: 150, outerRadius: 60, innerRadius: 40, teeth: 12, direction: 'clockwise' as const },
  ];

  return (
    <div
