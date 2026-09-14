'use client';

import { useState, useCallback } from 'react';

interface ExplodedComponent {
  id: string;
  name: string;
  basePosition: { x: number; y: number; z: number };
  explodeVector: { x: number; y: number; z: number };
  currentOffset: number;
}

export function useExplodedView(components: ExplodedComponent[], maxOffset: number = 100) {
  const [isExploded, setIsExploded] = useState(false);
  const [offset, setOffset] = useState(0);

  const toggleExplode = useCallback(() => {
    setIsExploded((prev) => !prev);
  }, []);

  const explode = useCallback(() => {
    setIsExploded(true);
  }, []);

  const implode = useCallback(() => {
    setIsExploded(false);
  }, []);

  const setExplodeProgress = useCallback((progress: number) => {
    setOffset(Math.min(Math.max(progress, 0), 1) * maxOffset);
  }, [maxOffset]);

  const explodedComponents = components.map((comp) => ({
    ...comp,
    currentOffset: isExploded ? maxOffset : 0,
    currentPosition: {
      x: comp.basePosition.x + comp.explodeVector.x * (isExploded ? 1 : 0),
      y: comp.basePosition.y + comp.explodeVector.y * (isExploded ? 1 : 0),
      z: comp.basePosition.z + comp.explodeVector.z * (isExploded ? 1 : 0),
    },
  }));

  return {
    isExploded,
    offset,
    toggleExplode,
    explode,
    implode,
    setExplodeProgress,
    components: explodedComponents,
  };
}
