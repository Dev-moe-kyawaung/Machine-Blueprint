export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github: string;
  demo?: string;
  image: string;
  blueprint?: string;
  category: 'mobile' | 'web' | 'game' | 'tool';
  featured: boolean;
  explodedView?: {
    components: Array<{
      name: string;
      description: string;
      position: { x: number; y: number; z: number };
      explodeVector: { x: number; y: number; z: number };
    }>;
  };
}

export const projects: Project[] = [
  {
    slug: 'social-dashboard',
    title: 'Social Dashboard',
    description: 'Real-time social media analytics dashboard with multi-platform integration',
    longDescription: 'A comprehensive social media management dashboard that aggregates analytics from multiple platforms. Features real-time data visualization, post scheduling, and AI-powered content recommendations.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST API', 'Material 3'],
    github: 'https://github.com/moekyawaung-tech/social-dashboard',
    demo: 'https://moekyawaung-tech.github.io/social-dashboard',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image_1_buwgls.png',
    category: 'web',
    featured: true,
    explodedView: {
      components: [
        { name: 'UI Layer', description: 'Jetpack Compose UI components', position: { x: 0, y: 0, z: 0 }, explodeVector: { x: 0, y: -100, z: 50 } },
        { name: 'ViewModel', description: 'State management & business logic', position: { x: 0, y: 0, z: 0 }, explodeVector: { x: -100, y: 0, z: 50 } },
        { name: 'Repository', description: 'Data abstraction layer', position: { x: 0, y: 0, z: 0 }, explodeVector: { x: 100, y: 0, z: 50 } },
        { name: 'Firebase SDK', description: 'Backend integration', position: { x: 0, y: 0, z: 0 }, explodeVector: { x: 0, y: 100, z: 50 } },
      ],
    },
  },
  {
    slug: 'pwa-app',
    title: 'PWA App',
    description: 'Progressive Web App with offline-first architecture',
    longDescription: 'A fully-featured PWA with offline support, push notifications, and app-like experience. Implements service workers, indexedDB, and responsive design.',
    techStack: ['TypeScript', 'React', 'Workbox', 'IndexedDB', 'Tailwind CSS'],
    github: 'https://github.com/moekyawaung-tech/pwa-app',
    demo: 'https://moekyawaung-tech.github.io/pwa-app',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png',
    category: 'web',
    featured: true,
  },
  {
    slug: 'game-collection',
    title: 'Game Collection',
    description: 'Arcade game suite with classic games',
    longDescription: 'A collection of classic arcade games including Snake, Tetris, and more. Built with smooth animations, responsive controls, and score tracking.',
    techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/moekyawaung-tech/game-collection',
    demo: 'https://moekyawaung-tech.github.io/game-collection',
    image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_12_iv8kpm.webp',
    category: 'game',
    featured: true,
  },
  {
    slug: 'video-player',
    title: 'Video Player',
    description: 'Advanced video player with custom controls',
    longDescription: 'Feature-rich video player with custom controls, playlist support, subtitle rendering, and playback speed adjustment.',
    techStack: ['Kotlin', 'ExoPlayer', 'Jetpack Compose', 'Material Design'],
    github: 'https://github.com/moekyawaung-tech/video-player',
    category: 'mobile',
    featured: true,
  },
  {
    slug: 'job-portal',
    title: 'Job Portal App',
    description: 'Full-stack job search and application platform',
    longDescription: 'Comprehensive job portal with advanced search filters, application tracking, resume builder, and employer dashboard.',
    techStack: ['Kotlin', 'Firebase', 'REST API', 'Room DB', 'Material 3'],
    github: 'https://github.com/moekyawaung-tech/Job-Portal-App',
    category: 'mobile',
    featured: false,
  },
  {
    slug: 'pos-ultimate',
    title: 'POS Ultimate Pro Max',
    description: 'Enterprise-grade point of sale system',
    longDescription: 'Complete POS solution with inventory management, sales analytics, multi-user support, and cloud synchronization.',
    techStack: ['Kotlin', 'SQLite', 'Firebase', 'MVVM', 'Clean Architecture'],
    github: 'https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max',
    category: 'mobile',
    featured: true,
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    description: 'Real-time weather forecasting application',
    longDescription: 'Weather app with 7-day forecasts, radar maps, severe weather alerts, and location-based predictions.',
    techStack: ['Kotlin', 'Weather API', 'Room DB', 'Jetpack Compose'],
    github: 'https://github.com/moekyawaung-tech/Weather-app',
    category: 'mobile',
    featured: false,
  },
  {
    slug: 'daily-planner',
    title: 'Daily Planner App',
    description: 'Task management and productivity tracker',
    longDescription: 'Productivity app with task lists, calendar integration, habit tracking, and productivity analytics.',
    techStack: ['Kotlin', 'Room DB', 'WorkManager', 'Material 3'],
    github: 'https://github.com/moekyawaung-tech/Daily-planner-app',
    category: 'mobile',
    featured: false,
  },
  {
    slug: 'lens-lite',
    title: 'Lens Lite',
    description: 'Lightweight camera app with filters',
    longDescription: 'Minimal camera app with real-time filters, beauty modes, and instant sharing capabilities.',
    techStack: ['Kotlin', 'CameraX', 'GPU Image', 'Jetpack Compose'],
    github: 'https://github.com/moekyawaung-tech/Lens-lite',
    category: 'mobile',
    featured: false,
  },
  {
    slug: 'javascript-todo',
    title: 'JavaScript Todo',
    description: 'Modern todo app with drag-and-drop',
    longDescription: 'Feature-rich todo application with drag-and-drop reordering, categories, due dates, and progress tracking.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/moekyawaung-tech/javascript-todo',
    category: 'web',
    featured: false,
  },
];
