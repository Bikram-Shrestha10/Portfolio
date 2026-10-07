import React from 'react';
import { servicesData } from '../data/skills';
import { Monitor, Layers, Terminal, Network } from 'lucide-react';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  frontend: Monitor,
  fullstack: Layers,
  python: Terminal,
  backend: Network,
};

export const Services: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Do
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Focused engineering services and development areas I contribute to across software projects.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Monitor;

            return (
              <div
                key={service.id}
                className="flex flex-col p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-0.5 hover:shadow-2xs"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400"
                    >
                      {t} <span className="text-slate-300 dark:text-slate-700 ml-1.5">·</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
