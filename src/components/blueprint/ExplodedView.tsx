'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useExplodedViewAnimation } from '@/hooks/useBlueprintAnimation';

interface ExplodedComponent {
  id: string;
  name: string;
  description: string;
  position: { x: number; y: number; z: number };
  explodeVector: { x: number; y: number; z: number };
  color?: string;
}

interface ExplodedViewProps {
  components: ExplodedComponent[];
  className?: string;
  autoExplode?: boolean;
  showLabels?: boolean;
}

export function ExplodedView({
  components,
  className,
  autoExplode = false,
  showLabels = true,
}: ExplodedViewProps) {
  const [isExploded, setIsExploded] = useState(autoExplode);
  const progress = useExplodedViewAnimation(isExploded, 1200);

  const toggleExplode = useCallback(() => {
    setIsExploded((prev) => !prev);
  }, []);

  const maxOffset = 150;
  const currentOffset = progress * maxOffset;

  return (
    <div className={cn('relative w-full h-full', className)}>
      {/* Control button */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleExplode}
          className="bg-blueprint-paper/80 backdrop-blur border-blueprint-line"
        >
          {isExploded ? '🔧 Assemble' : '💥 Explode'}
        </Button>
      </div>

      {/* Exploded components */}
      <div className="relative w-full h-full">
        <AnimatePresence>
          {components.map((component, index) => {
            const offsetX = component.explodeVector.x * currentOffset;
            const offsetY = component.explodeVector.y * currentOffset;
            const scale = 1 + (isExploded ? 0.1 * index : 0);

            return (
              <motion.div
                key={component.id}
                className="absolute"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale,
                  x: offsetX,
                  y: offsetY,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                style={{
                  left: `calc(50% + ${component.position.x}px)`,
                  top: `calc(50% + ${component.position.y}px)`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: index,
                }}
              >
                {/* Component visualization */}
                <div
                  className={cn(
                    'relative p-4 border-2 rounded-lg',
                    'bg-blueprint-paper/90 backdrop-blur-sm',
                    'border-blueprint-line shadow-blueprint',
                    'transition-all duration-300',
                    isExploded && 'shadow-glow'
                  )}
                  style={{
                    minWidth: '200px',
                    minHeight: '120px',
                  }}
                >
                  {/* Technical corner markers */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blueprint-accent" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blueprint-accent" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blueprint-accent" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blueprint-accent" />

                  {/* Component content */}
                  <div className="relative z-10">
                    <h3 className="text-blueprint-text font-mono text-sm mb-2">
                      {component.name}
                    </h3>
                    <p className="text-blueprint-text-secondary text-xs leading-relaxed">
                      {component.description}
                    </p>

                    {/* Technical specs */}
                    <div className="mt-3 pt-3 border-t border-blueprint-grid">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-blueprint-text-muted">ID</span>
                        <span className="text-blueprint-line font-mono">{component.id}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-blueprint-text-muted">Position</span>
                        <span className="text-blueprint-line font-mono">
                          [{component.position.x}, {component.position.y}, {component.position.z}]
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Connection lines (when exploded) */}
                  {isExploded && (
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                      style={{ overflow: 'visible' }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% - ${offsetX}px)`}
                        y2={`calc(50% - ${offsetY}px)`}
                        stroke="var(--bp-line-dim)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.5"
                      />
                    </svg>
                  )}
                </div>

                {/* Label */}
                {showLabels && isExploded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="px-2 py-1 bg-blueprint-bg border border-blueprint-line text-blueprint-text text-xs font-mono rounded">
                      {component.name}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Center assembly point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blueprint-line-dim rounded-full flex items-center justify-center">
          <div className="w-24 h-24 border border-blueprint-line-secondary rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border border-blueprint-accent rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blueprint-accent/20 rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-32 h-1 bg-blueprint-grid rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blueprint-accent"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-blueprint-text-muted text-xs font-mono">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </div>
  );
}
