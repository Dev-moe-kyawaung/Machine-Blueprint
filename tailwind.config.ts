import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          bg: '#0a0f1a',
          bgSecondary: '#0d1426',
          bgTertiary: '#111b2e',
          grid: '#1a2a4a',
          gridBright: '#243b5e',
          line: '#00d4ff',
          lineSecondary: '#0099cc',
          lineDim: '#005577',
          accent: '#ff6b00',
          accentGlow: '#ff8c33',
          text: '#e8f4fd',
          textSecondary: '#8ab4d6',
          textMuted: '#4a6f8a',
          paper: '#0f1a2e',
          paperBorder: '#1e3a5f',
          warning: '#ffaa00',
          danger: '#ff3333',
          success: '#00ff88',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'monospace'],
      },
      animation: {
        'line-draw': 'lineDraw 2s ease-out forwards',
        'line-draw-slow': 'lineDraw 4s ease-out forwards',
        'gear-spin': 'gearSpin 20s linear infinite',
        'gear-spin-reverse': 'gearSpinReverse 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'schematic-reveal': 'schematicReveal 1.5s ease-out forwards',
        'explode': 'explode 1.2s ease-out forwards',
        'typing': 'typing 3s steps(40) forwards',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        lineDraw: {
          '0%': { strokeDashoffset: 'var(--path-length, 1000)' },
          '100%': { strokeDashoffset: '0' },
        },
        gearSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gearSpinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.5)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        schematicReveal: {
          '0%': { opacity: '0', transform: 'scale(0.95)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'scale(1)', filter: 'blur(0)' },
        },
        explode: {
          '0%': { opacity: '0', transform: 'translate(var(--explode-x, 0), var(--explode-y, 0)) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'var(--blink-color, #00d4ff)' },
        },
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
        `,
        'blueprint-grid-bright': `
          linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px)
        `,
        'radial-glow': 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
        'grid-sm': '20px 20px',
      },
      boxShadow: {
        'blueprint': '0 0 20px rgba(0, 212, 255, 0.15), inset 0 0 20px rgba(0, 212, 255, 0.05)',
        'blueprint-lg': '0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 40px rgba(0, 212, 255, 0.1)',
        'glow': '0 0 30px rgba(0, 212, 255, 0.4)',
        'glow-accent': '0 0 30px rgba(255, 107, 0, 0.4)',
      },
      borderWidth: {
        'hair': '0.5px',
      },
    },
  },
  plugins: [],
};

export default config;
