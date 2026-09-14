'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BlueprintGrid } from '@/components/blueprint/BlueprintGrid';
import { ExplodedView } from '@/components/blueprint/ExplodedView';
import { Github, ExternalLink, Layers, Star, FolderOpen } from 'lucide-react';
import { projects, type Project } from '@/data/projects';

const categories = [
  { id: 'all', label: 'All', icon: FolderOpen },
  { id: 'mobile', label: 'Mobile', icon: Layers },
  { id: 'web', label: 'Web', icon: ExternalLink },
  { id: 'game', label: 'Games', icon: Star },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <BlueprintGrid className="absolute inset-0" size="md" brightness="dim" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-blueprint-accent/10 border border-blueprint-accent rounded-full mb-4">
            <span className="text-blueprint-text-secondary text-xs font-mono">
              PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-blueprint-text mb-4">
            Featured <span className="text-blueprint-accent">Work</span>
          </h2>
          <p className="text-blueprint-text-muted max-w-2xl mx-auto">
            A collection of production applications showcasing Clean Architecture, modern UI/UX, and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition-all',
                activeCategory === category.id
                  ? 'bg-blueprint-accent text-blueprint-bg'
                  : 'bg-blueprint-bg text-blueprint-text-secondary border border-blueprint-grid hover:border-blueprint-line'
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant="elevated"
                hoverable
                className="overflow-hidden h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueprint-bg to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-blueprint-bg/90 backdrop-blur border border-blueprint-line rounded text-xs font-mono text-blueprint-line">
                    {project.category.toUpperCase()}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-blueprint-accent text-blueprint-bg rounded text-xs font-mono font-bold">
                      ★ FEATURED
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-blueprint-text font-display text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blueprint-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blueprint-bg border border-blueprint-grid text-blueprint-text-secondary text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-blueprint-bg border border-blueprint-grid text-blueprint-text-muted text-xs rounded font-mono">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      leftIcon={<Github className="w-3 h-3" />}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="primary"
                        className="flex-1"
                        leftIcon={<ExternalLink className="w-3 h-3" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                      >
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              rightIcon={<ExternalLink className="w-4 h-4" />}
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Project Modal Component
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blueprint-bg/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-blueprint-bg border border-blueprint-line shadow-blueprint-lg rounded-lg"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-blueprint-bg border border-blueprint-line rounded flex items-center justify-center text-blueprint-text hover:text-blueprint-accent transition-colors"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-blueprint-accent/10 border border-blueprint-accent rounded text-xs font-mono text-blueprint-accent">
                {project.category.toUpperCase()}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-blueprint-line/10 border border-blueprint-line rounded text-xs font-mono text-blueprint-line">
                  ★ FEATURED
                </span>
              )}
            </div>
            <h3 className="text-2xl font-display text-blueprint-text mb-2">
              {project.title}
            </h3>
            <p className="text-blueprint-text-secondary">
              {project.description}
            </p>
          </div>

          {/* Image */}
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden border border-blueprint-grid">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Long Description */}
          <div className="mb-6">
            <h4 className="text-blueprint-line font-mono text-sm mb-3">
              DESCRIPTION
            </h4>
            <p className="text-blueprint-text-secondary leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-blueprint-line font-mono text-sm mb-3">
              TECHNOLOGIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-blueprint-bg border border-blueprint-line rounded text-blueprint-text text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Exploded View */}
          {project.explodedView && (
            <div className="mb-6">
              <h4 className="text-blueprint-line font-mono text-sm mb-3">
                ARCHITECTURE
              </h4>
              <div className="h-80 border border-blueprint-grid rounded-lg overflow-hidden">
                <ExplodedView
                  components={project.explodedView.components.map((comp, i) => ({
                    id: comp.name,
                    name: comp.name,
                    description: comp.description,
                    position: comp.position,
                    explodeVector: comp.explodeVector,
                  }))}
                  autoExplode={false}
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="primary"
              leftIcon={<Github className="w-4 h-4" />}
              onClick={() => window.open(project.github, '_blank')}
            >
              View on GitHub
            </Button>
            {project.demo && (
              <Button
                variant="outline"
                leftIcon={<ExternalLink className="w-4 h-4" />}
                onClick={() => window.open(project.demo, '_blank')}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
