'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BlueprintGrid } from './BlueprintGrid';
import { LineDrawSVG } from './LineDrawSVG';
import { GearSystem } from './GearSystem';
import { DimensionLines } from './DimensionLines';
import { AnnotationCallout } from './AnnotationCallout';
import type { BlueprintPath } from '@/lib/blueprint-engine';

interface BlueprintCanvasProps {
  children?: React.ReactNode;
  className?: string;
  showGrid?: boolean;
  showScanLine?: boolean;
  dimensions?: Array<{
    start: { x: number; y: number };
    end: { x: number; y: number };
    value: string;
  }>;
  annotations?: Array<{
    position: { x: number; y: number };
    target: { x: number; y: number };
    title: string;
    description: string;
  }>;
  paths?: BlueprintPath[];
  showGears?: boolean;
}

export function BlueprintCanvas({
  children,
  className,
  showGrid = true,
  showScanLine = false,
  dimensions,
  annotations,
  paths,
  showGears = false,
}: BlueprintCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <BlueprintGrid
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      showScanLine={showScanLine}
    >
      {/* SVG Layer for paths and dimensions */}
      <div className="absolute inset-0 pointer-events-none">
        {paths && paths.length > 0 && (
          <LineDrawSVG
            paths={paths}
            className="w-full h-full"
            animated={true}
            delay={500}
          />
        )}

        {dimensions && dimensions.length > 0 && (
          <DimensionLines dimensions={dimensions} />
        )}
      </div>

      {/* Annotations Layer */}
      {annotations && annotations.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {annotations.map((annotation, index) => (
            <AnnotationCallout
              key={index}
              position={annotation.position}
              target={annotation.target}
              title={annotation.title}
              description={annotation.description}
              delay={index * 200}
            />
          ))}
        </div>
      )}

      {/* Gear System Layer */}
      {showGears && (
        <div className="absolute inset-0 pointer-events-none">
          <GearSystem className="opacity-50" />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-blueprint-line opacity-50" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blueprint-line opacity-50" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-blueprint-line opacity-50" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-blueprint-line opacity-50" />
    </BlueprintGrid>
  );
}
