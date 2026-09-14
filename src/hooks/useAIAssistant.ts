'use client';

import { useState, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  'Tell me about your projects',
  'What are your main skills?',
  'Show me your experience',
  'How can I contact you?',
  'What technologies do you use?',
];

export function useAIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(SUGGESTIONS);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setSuggestions([]);

    // Mock AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(content),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return {
    messages,
    sendMessage,
    isLoading,
    suggestions,
  };
}

function generateResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes('project')) {
    return `I've built 20+ production applications including:

• Social Dashboard - Real-time analytics platform
• PWA App - Offline-first progressive web app
• POS Ultimate Pro Max - Enterprise point of sale system
• Video Player - Advanced media player with custom controls

All projects use Clean Architecture and modern best practices.`;
  }

  if (lowerQuestion.includes('skill')) {
    return `My core expertise:

📱 Android: Kotlin (95%), Jetpack Compose (90%)
🏗️ Architecture: MVVM, Clean Architecture
☁️ Backend: Firebase, REST APIs
🤖 AI/ML: Claude API, TFLite
🔐 Security: Ethical Hacking, Linux

82+ certifications across 9 domains.`;
  }

  if (lowerQuestion.includes('experience') || lowerQuestion.includes('work')) {
    return `I'm a Senior Android Developer with 3+ years of experience:

• Building high-performance mobile apps
• Implementing CI/CD pipelines
• Mentoring junior developers
• Working with Firebase, REST APIs

Based in Tachileik, Myanmar ↔ Bangkok, Thailand.`;
  }

  if (lowerQuestion.includes('contact')) {
    return `You can reach me through:

📧 Email: moekyawaung@example.com
📱 Phone: +95 9 889 000 889
💼 LinkedIn: linkedin.com/in/moe-kyaw-aung
🐙 GitHub: github.com/Dev-moe-kyawaung`;
  }

  if (lowerQuestion.includes('technology') || lowerQuestion.includes('tech') || lowerQuestion.includes('stack')) {
    return `My tech stack:

• Languages: Kotlin, JavaScript, TypeScript, Python
• Mobile: Android SDK, Jetpack Compose
• Web: React, Next.js, Tailwind CSS
• Backend: Firebase, REST APIs, Node.js
• Tools: Git, GitHub Actions, Figma

Always learning new technologies!`;
  }

  return `Thanks for your question! I'm Moe Kyaw Aung, a Senior Android Developer passionate about building high-quality mobile applications.

I specialize in Kotlin, Jetpack Compose, and Clean Architecture. I've completed 82+ certifications and built 20+ production apps.

Ask me about my projects, skills, or experience!`;
}
