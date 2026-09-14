'use client';

import { useEffect, useState, useRef } from 'react';
import { useSpring, animated, useSpringValue } from '@react-spring/web';

interface UseBlueprintAnimationProps {
  pathLength: number;
  delay?: number;
  duration?: number;
  trigger?: boolean;
}

export function useBlueprintAnimation({
  pathLength,
  delay = 0,
  duration = 2000,
  trigger = true,
}: UseBlueprintAnimationProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef<SVGPathElement>(null);

  const [props, api] = useSpring(() => ({
    dashoffset: pathLength,
    opacity: 0,
    config: { tension: 200, friction: 20 },
  }));

  useEffect(() => {
    if (trigger && !isAnimated) {
      const timeout = setTimeout(() => {
        api.start({
          dashoffset: 0,
          opacity: 1,
          delay,
        });
        setIsAnimated(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [trigger, delay, api, isAnimated, pathLength]);

  return { ref, props, isAnimated };
}

export function useGearAnimation(speed: number = 20000) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      setRotation((prev) => (prev + (delta / speed) * 360) % 360);
      lastTime = currentTime;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return rotation;
}

export function useExplodedViewAnimation(
  isExploded: boolean,
  duration: number = 1200
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const targetProgress = isExploded ? 1 : 0;
    const startProgress = progress;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      
      setProgress(startProgress + (targetProgress - startProgress) * eased);

      if (t < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isExploded, duration]);

  return progress;
}
