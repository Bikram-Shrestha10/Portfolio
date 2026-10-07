import React from 'react';
import { profileData } from '../data/profile';


export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
                Biography
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                About Me
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              {profileData.aboutIntro}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {profileData.aboutParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Main areas of interest and experience */}
            <div className="pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Core Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profileData.interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Statistics Row Grid */}
            <div className="grid grid-cols-2 gap-4">
              {profileData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick summary card */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                What drives my work
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether creating an accessible component in React, implementing robust validation on an Express API, or automating data transformations in Python, I aim for solutions that are maintainable, performant, and intuitive.
              </p>

              <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Location: Kathmandu, Nepal</span>
                <span className="font-mono">Remote / On-site</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
