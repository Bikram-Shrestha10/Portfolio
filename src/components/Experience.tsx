import React from 'react';
import { experienceData } from '../data/experience';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Practical development training and ongoing academic foundation in Information Technology.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 space-y-12">
          {experienceData.map((item) => {
            const isWork = item.type === 'experience';
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <div key={item.id} className="relative pl-7 sm:pl-9 group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-3.5 sm:-left-4.5 top-1 p-1.5 rounded-full border-2 transition-colors ${
                    isWork
                      ? 'bg-blue-50 text-blue-600 border-blue-500 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-500'
                      : 'bg-emerald-50 text-emerald-600 border-emerald-500 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-500'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Content Box */}
                <div className="bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-7 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  {/* Meta row: Date & Type */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isWork ? 'Internship' : 'Degree'}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>

                  {/* Organization */}
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5 mb-3">
                    {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights / Projects Worked On */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {isWork ? 'Key Projects & Responsibilities:' : 'Key Focus Areas:'}
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
