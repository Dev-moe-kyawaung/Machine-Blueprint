'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Cpu, Download, RefreshCw, Layers, Zap } from 'lucide-react';
import { ArchitectureMap } from './ArchitectureMap';

interface BlueprintGeneratorProps {
  onClose: () => void;
}

export function BlueprintGenerator({ onClose }: BlueprintGeneratorProps) {
  const [projectType, setProjectType] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<ArchitectureMap | null>(null);

  const projectTypes = [
    'Mobile App',
    'Web Application',
    'API Service',
    'Microservices',
    'Full-Stack Platform',
  ];

  const generateBlueprint = async () => {
    if (!projectType) return;

    setIsGenerating(true);
    
    // Simulate blueprint generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockBlueprint: ArchitectureMap = {
      name: `${projectType} Architecture`,
      layers: [
        { name: 'Presentation', components: ['UI Components', 'ViewModels', 'State Management'] },
        { name: 'Domain', components: ['Use Cases', 'Business Logic', 'Entities'] },
        { name: 'Data', components: ['Repositories', 'API Services', 'Local Database'] },
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room DB'],
    };

    setBlueprint(mockBlueprint);
    setIsGenerating(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input Section */}
      {!blueprint && (
        <div className="flex-1 p-4">
          <h3 className="text-blueprint-text font-mono text-sm mb-4">
            GENERATE ARCHITECTURE BLUEPRINT
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-blueprint-text-secondary text-xs font-mono mb-2 block">
                PROJECT TYPE
              </label>
              <div className="grid grid-cols-2 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={cn(
                      'p-3 text-xs font-mono rounded border transition-all',
                      projectType === type
                        ? 'bg-blueprint-line text-blueprint-bg border-blueprint-line'
                        : 'bg-blueprint-bg text-blueprint-text-secondary border-blueprint-grid hover:border-blueprint-line'
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={generateBlueprint}
              disabled={!projectType || isGenerating}
              className="w-full mt-4"
              leftIcon={isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
            >
              {isGenerating ? 'GENERATING...' : 'GENERATE BLUEPRINT'}
            </Button>
          </div>
        </div>
      )}

      {/* Blueprint Display */}
      {blueprint && (
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-blueprint-text font-mono text-sm">
              {blueprint.name}
            </h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                leftIcon={<RefreshCw className="w-3 h-3" />}
                onClick={() => setBlueprint(null)}
              >
                New
              </Button>
              <Button
                size="sm"
                variant="outline"
                leftIcon={<Download className="w-3 h-3" />}
              >
                Export
              </Button>
            </div>
          </div>

          <ArchitectureMap blueprint={blueprint} />
        </div>
      )}
    </div>
  );
}
