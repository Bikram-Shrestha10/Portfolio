import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';

export const GithubSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 dark:bg-slate-900/90 text-white p-8 sm:p-12 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono mb-4 border border-slate-700">
              <Github className="w-3.5 h-3.5" />
              <span>{profileData.socials.github.replace('https://', '')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
              More of My Work
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Explore my repositories, experiments, and development projects on GitHub. I write modular code, commit consistently, and explore practical solutions.
            </p>

            {/* Curated Repository Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {projectsData.slice(0, 4).map((proj) => (
                <a
                  key={proj.id}
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-4 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-blue-400 font-mono mb-1.5">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                      <Code className="w-3.5 h-3.5 text-slate-400" />
                      <span>{proj.title}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{proj.technologies[0]}</span>
                    <span>·</span>
                    <span>Public</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <span className="text-xs text-slate-400">
                Regularly pushing improvements & explorations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
