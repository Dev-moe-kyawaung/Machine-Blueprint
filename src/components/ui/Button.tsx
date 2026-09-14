'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2',
      'font-mono text-sm tracking-wide',
      'transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-blueprint-line focus:ring-offset-2 focus:ring-offset-blueprint-bg',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      {
        'px-4 py-2': size === 'md',
        'px-3 py-1.5 text-xs': size === 'sm',
        'px-6 py-3 text-base': size === 'lg',
      }
    );

    const variantStyles = {
      primary: cn(
        'bg-blueprint-line text-blueprint-bg',
        'hover:bg-blueprint-line-secondary',
        'shadow-glow hover:shadow-glow-accent',
        'border border-blueprint-line'
      ),
      secondary: cn(
        'bg-blueprint-accent text-blueprint-bg',
        'hover:bg-blueprint-accent-glow',
        'shadow-glow-accent',
        'border border-blueprint-accent'
      ),
      outline: cn(
        'bg-transparent text-blueprint-line',
        'border border-blueprint-line',
        'hover:bg-blueprint-line/10',
        'shadow-blueprint'
      ),
      ghost: cn(
        'bg-transparent text-blueprint-text',
        'hover:bg-blueprint-grid/20',
        'border border-transparent'
      ),
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {isLoading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
