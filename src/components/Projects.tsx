import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';


const CATEGORIES: ProjectCategory[] = ['All', 'Full Stack', 'Frontend', 'Python'];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              A selection of projects I've built while learning and working with modern technologies.
            </p>
          </div>

          {/* Filter Tabs - Interactive segmented control */}
          <div
            role="tablist"
            aria-label="Filter projects by technology category"
            className="flex items-center gap-1 p-1 bg-white dark:bg-slate-800/90 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-2xs self-start md:self-auto overflow-x-auto max-w-full"
          >
            {CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === category).length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] tabular-nums font-mono ${
                      isActive ? 'text-slate-300 dark:text-blue-200' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
