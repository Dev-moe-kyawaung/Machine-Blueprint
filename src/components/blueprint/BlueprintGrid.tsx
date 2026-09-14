'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BlueprintGridProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  brightness?: 'dim' | 'normal' | 'bright';
  showScanLine?: boolean;
  children?: React.ReactNode;
}

export function BlueprintGrid({
  className,
  size = 'md',
  brightness = 'normal',
  showScanLine = false,
  children,
}: BlueprintGridProps) {
  const sizeClasses = {
    sm: 'bg-[length:20px_20px]',
    md: 'bg-[length:40px_40px]',
    lg: 'bg-[length:80px_80px]',
  };

  const brightnessClasses = {
    dim: 'bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)]',
    normal: 'bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)]',
    bright: 'bg-[linear-gradient(rgba(0,212,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.08)_1px,transparent_1px)]',
  };

  return (
    <div className={cn(
      'relative bg-blueprint-bg',
      sizeClasses[size],
      brightnessClasses[brightness],
      className
    )}>
      {showScanLine && (
        <div className="scan-line animate-scan-line" />
      )}
      {children}
    </div>
  );
}
