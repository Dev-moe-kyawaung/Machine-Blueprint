'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Bot, X, Send, Sparkles, Cpu, Zap } from 'lucide-react';
import { useAIAssistant } from '@/hooks/useAIAssistant';
import { ChatInterface } from './ChatInterface';
import { BlueprintGenerator } from './BlueprintGenerator';

interface AIAssistantProps {
  className?: string;
}

export function AIAssistant({ className }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'chat' | 'blueprint'>('chat');
  const { messages, sendMessage, isLoading, suggestions } = useAIAssistant();

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className={cn(
              'fixed bottom-6 right-6 z-50',
              'w-14 h-14 rounded-full',
              'bg-blueprint-line text-blueprint-bg',
              'shadow-glow hover:shadow-glow-accent',
              'flex items-center justify-center',
              'transition-all duration-300'
            )}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Bot className="w-7 h-7" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-blueprint-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              'fixed bottom-6 right-6 z-50',
              'w-[400px] max-w-[calc(100vw-3rem)]',
              className
            )}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <Card variant="elevated" className="overflow-hidden">
              {/* Header */}
              <div className="bg-blueprint-bg-secondary border-b border-blueprint-grid p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blueprint-line/10 border border-blueprint-line flex items-center justify-center">
                      <Bot className="w-6 h-6 text-blueprint-line" />
                    </div>
                    <div>
                      <h3 className="text-blueprint-text font-mono text-sm">
                        MECHA ASSISTANT
                      </h3>
                      <p className="text-blueprint-text-muted text-xs">
                        {isLoading ? 'Processing...' : 'Ready to help'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-blueprint-text-secondary hover:text-blueprint-text transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mode Toggle */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setMode('chat')}
                    className={cn(
                      'flex-1 py-2 px-3 text-xs font-mono rounded',
                      'transition-all duration-300',
                      mode === 'chat'
                        ? 'bg-blueprint-line text-blueprint-bg'
                        : 'bg-blueprint-bg text-blueprint-text-secondary border border-blueprint-grid hover:border-blueprint-line'
                    )}
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Chat
                  </button>
                  <button
                    onClick={() => setMode('blueprint')}
                    className={cn(
                      'flex-1 py-2 px-3 text-xs font-mono rounded',
                      'transition-all duration-300',
                      mode === 'blueprint'
                        ? 'bg-blueprint-line text-blueprint-bg'
                        : 'bg-blueprint-bg text-blueprint-text-secondary border border-blueprint-grid hover:border-blueprint-line'
                    )}
                  >
                    <Cpu className="w-3 h-3 inline mr-1" />
                    Blueprint Generator
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="h-[500px] overflow-hidden">
                {mode === 'chat' ? (
                  <ChatInterface
                    messages={messages}
                    sendMessage={sendMessage}
                    isLoading={isLoading}
                    suggestions={suggestions}
                  />
                ) : (
                  <BlueprintGenerator onClose={() => setIsOpen(false)} />
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
