'use client';

import { useEffect, useState } from 'react';

interface UseGearRotationProps {
  speed?: number;
  direction?: 'clockwise' | 'counterclockwise';
  paused?: boolean;
}

export function useGearRotation({
  speed = 20000,
  direction = 'clockwise',
  paused = false,
}: UseGearRotationProps = {}) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (paused) return;

    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      const deltaRotation = (delta / speed) * 360;
      
      setRotation((prev) => {
        const newRotation = direction === 'clockwise' 
          ? prev + deltaRotation 
          : prev - deltaRotation;
        return newRotation % 360;
      });
      
      lastTime = currentTime;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed, direction, paused]);

  return rotation;
}
