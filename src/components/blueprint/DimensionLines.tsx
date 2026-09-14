'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface DimensionLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  value: string;
  offset?: number;
  orientation?: 'horizontal' | 'vertical' | 'diagonal';
  className?: string;
}

export function DimensionLine({
  start,
  end,
  value,
  offset = 20,
  orientation = 'horizontal',
  className,
}: DimensionLineProps) {
  const dimensionStart = {
    x: start.x + (orientation === 'horizontal' ? 0 : -offset),
    y: start.y + (orientation === 'vertical' ? 0 : -offset),
  };

  const dimensionEnd = {
    x: end.x + (orientation === 'horizontal' ? 0 : offset),
    y: end.y + (orientation === 'vertical' ? 0 : offset),
  };

  return (
    <svg className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}>
      {/* Extension lines */}
      <line
        x1={start.x}
        y1={start.y}
        x2={dimensionStart.x}
        y2={dimensionStart.y}
        stroke="var(--bp-line-dim)"
        strokeWidth="0.5"
      />
      <line
        x1={end.x}
        y1={end.y}
        x2={dimensionEnd.x}
        y2={dimensionEnd.y}
        stroke="var(--bp-line-dim)"
        strokeWidth="0.5"
      />

      {/* Dimension line */}
      <line
        x1={dimensionStart.x}
        y1={dimensionStart.y}
        x2={dimensionEnd.x}
        y2={dimensionEnd.y}
        stroke="var(--bp-line-secondary)"
        strokeWidth="1"
      />

      {/* Arrowheads */}
      <polygon
        points={`${dimensionStart.x},${dimensionStart.y} ${dimensionStart.x + 5},${dimensionStart.y - 3} ${dimensionStart.x + 5},${dimensionStart.y + 3}`}
        fill="var(--bp-line-secondary)"
      />
      <polygon
        points={`${dimensionEnd.x},${dimensionEnd.y} ${dimensionEnd.x - 5},${dimensionEnd.y - 3} ${dimensionEnd.x - 5},${dimensionEnd.y + 3}`}
        fill="var(--bp-line-secondary)"
      />

      {/* Value text */}
      <text
        x={(dimensionStart.x + dimensionEnd.x) / 2}
        y={(dimensionStart.y + dimensionEnd.y) / 2 - 5}
        textAnchor="middle"
        fill="var(--bp-text-secondary)"
        fontSize="10"
        fontFamily="var(--font-mono)"
        className="select-none"
      >
        {value}
      </text>
    </svg>
  );
}

interface DimensionLinesProps {
  dimensions: Array<{
    start: { x: number; y: number };
    end: { x: number; y: number };
    value: string;
    orientation?: 'horizontal' | 'vertical' | 'diagonal';
  }>;
  className?: string;
}

export function DimensionLines({ dimensions, className }: DimensionLinesProps) {
  return (
    <svg className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}>
      {dimensions.map((dim, index) => (
        <DimensionLine
          key={index}
          start={dim.start}
          end={dim.end}
          value={dim.value}
          orientation={dim.orientation}
        />
      ))}
    </svg>
  );
}
