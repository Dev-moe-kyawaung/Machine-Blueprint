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
    <div className={cn('relative w-full h-full min-h-[300px]', className)}>
      {gears.map((gear, index) => (
        <Gear
          key={index}
          x={gear.x}
          y={gear.y}
          outerRadius={gear.outerRadius}
          innerRadius={gear.innerRadius}
          teeth={gear.teeth}
          speed={speed}
          direction={gear.direction}
          paused={paused}
        />
      ))}
      
      {/* Connection lines between gears */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line
          x1="160"
          y1="150"
          x2="220"
          y2="150"
          stroke="var(--bp-line-dim)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <line
          x1="280"
          y1="150"
          x2="340"
          y2="150"
          stroke="var(--bp-line-dim)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
      </svg>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blueprint-line rounded-full flex items-center justify-center">
        <div className="w-12 h-12 border border-blueprint-line-secondary rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-blueprint-line rounded-full" />
        </div>
      </div>
    </div>
  );
}
