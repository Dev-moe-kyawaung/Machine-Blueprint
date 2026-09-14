'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  sendMessage: (content: string) => Promise<void>;
  isLoading: boolean;
  suggestions: string[];
}

export function ChatInterface({
  messages,
  sendMessage,
  isLoading,
  suggestions,
}: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    await sendMessage(input);
    setInput('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={cn(
                'flex gap-3',
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Avatar */}
              <div
                className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                  message.role === 'user'
                    ? 'bg-blueprint-accent/20 border border-blueprint-accent'
                    : 'bg-blueprint-line/20 border border-blueprint-line'
                )}
              >
                {message.role === 'user' ? (
                  <User className="w-4 h-4 text-blueprint-accent" />
                ) : (
                  <Bot className="w-4 h-4 text-blueprint-line" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={cn(
                  'max-w-[80%] p-3 rounded-lg text-sm',
                  message.role === 'user'
                    ? 'bg-blueprint-accent/10 border border-blueprint-accent text-blueprint-text'
                    : 'bg-blueprint-line/10 border border-blueprint-line text-blueprint-text'
                )}
              >
                <p className="leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
                <p className="text-xs text-blueprint-text-muted mt-2 font-mono">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-8 h-8 rounded-lg bg-blueprint-line/20 border border-blueprint-line flex items-center justify-center">
              <Bot className="w-4 h-4 text-blueprint-line" />
            </div>
            <div className="bg-blueprint-line/10 border border-blueprint-line p-3 rounded-lg">
              <div className="flex gap-1">
                <motion.div
                  className="w-2 h-2 bg-blueprint-line rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-blueprint-line rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-blueprint-line rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && messages.length < 2 && (
        <div className="px-4 py-2 border-t border-blueprint-grid">
          <p className="text-xs text-blueprint-text-muted mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Try asking:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1.5 bg-blueprint-bg border border-blueprint-grid hover:border-blueprint-line text-blueprint-text-secondary text-xs rounded transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-blueprint-grid">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects, skills, or experience..."
            className="flex-1 bg-blueprint-bg border border-blueprint-grid focus:border-blueprint-line text-blueprint-text text-sm px-4 py-2 rounded outline-none transition-colors"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="sm"
            disabled={!input.trim() || isLoading}
            leftIcon={<Send className="w-4 h-4" />}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
