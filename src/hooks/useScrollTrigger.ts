'use client';

import { useEffect, useState, useCallback } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  triggerOnce?: boolean;
  offset?: number;
}

export function useScrollTrigger({
  threshold = 0.1,
  triggerOnce = true,
  offset = 0,
}: UseScrollTriggerOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const visible = entry.isIntersecting;
      
      if (visible) {
        setIsVisible(true);
        if (triggerOnce && !hasTriggered) {
          setHasTriggered(true);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [triggerOnce, hasTriggered]
  );

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: `${offset}px`,
    });

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, handleIntersection, threshold, offset]);

  return [setRef, isVisible] as const;
}
