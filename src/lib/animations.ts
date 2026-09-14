export const easings = {
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
};

export const durations = {
  fast: 200,
  normal: 400,
  slow: 800,
  verySlow: 1200,
};

export const delays = {
  none: 0,
  short: 100,
  medium: 300,
  long: 500,
  veryLong: 800,
};

export const blueprintAnimations = {
  lineDraw: {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      duration: 2,
      ease: easings.easeOut,
    },
  },
  gearSpin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
  schematicReveal: {
    initial: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    transition: {
      duration: 1.5,
      ease: easings.easeOut,
    },
  },
  explode: {
    initial: { opacity: 0, x: 0, y: 0, scale: 0.5 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    transition: {
      duration: 1.2,
      ease: easings.spring,
    },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};
