'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Layers, Database, Server, Monitor } from 'lucide-react';

interface ArchitectureMapProps {
  blueprint: {
    name: string;
    layers: Array<{
      name: string;
      components: string[];
    }>;
    technologies: string[];
  };
  className?: string;
}

export function ArchitectureMap({ blueprint, className }: ArchitectureMapProps) {
  const layerIcons: Record<string, React.ReactNode> = {
    Presentation: <Monitor className="w-4 h-4" />,
    Domain: <Layers className="w-4 h-4" />,
    Data: <Database className="w-4 h-4" />,
  };

  return (
    <Card variant="outlined" className={cn('p-4', className)}>
      {/* Title */}
      <div className="text-center mb-6 pb-4 border-b border-blueprint-grid">
        <h4 className="text-blueprint-line font-mono text-sm mb-2">
          {blueprint.name}
        </h4>
        <div className="flex items-center justify-center gap-2 text-xs text-blueprint-text-muted">
          <Server className="w-3 h-3" />
          <span>SYSTEM ARCHITECTURE</span>
        </div>
      </div>

      {/* Layers */}
      <div className="space-y-4">
        {blueprint.layers.map((layer, index) => (
          <motion.div
            key={layer.name}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Layer header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded bg-blueprint-line/10 border border-blueprint-line flex items-center justify-center text-blueprint-line">
                {layerIcons[layer.name] || <Layers className="w-4 h-4" />}
              </div>
              <h5 className="text-blueprint-text font-mono text-xs">
                {layer.name.toUpperCase()}
              </h5>
            </div>

            {/* Components */}
            <div className="ml-11 space-y-1">
              {layer.components.map((component, compIndex) => (
                <div
                  key={component}
                  className="flex items-center gap-2 text-xs"
                  style={{ animationDelay: `${index * 0.2 + compIndex * 0.1}s` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blueprint-accent" />
                  <span className="text-blueprint-text-secondary">
                    {component}
                  </span>
                </div>
              ))}
            </div>

            {/* Connection line */}
            {index < blueprint.layers.length - 1 && (
              <div className="absolute left-4 top-full w-px h-4 bg-gradient-to-b from-blueprint-line to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mt-6 pt-4 border-t border-blueprint-grid">
        <h6 className="text-blueprint-text-muted text-xs font-mono mb-3">
          TECHNOLOGIES
        </h6>
        <div className="flex flex-wrap gap-2">
          {blueprint.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blueprint-line/10 border border-blueprint-line text-blueprint-text text-xs rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
