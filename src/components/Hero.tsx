import React, { useState, useRef } from 'react';
import { ArrowRight, Download, Github, Linkedin, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

const LOCAL_STORAGE_PHOTO_KEY = 'src/assets/images/Bikramshrestha.jpg';

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedPhoto = localStorage.getItem(LOCAL_STORAGE_PHOTO_KEY);
      if (savedPhoto) return savedPhoto;
    }
    return profileData.avatarUrl;
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        localStorage.setItem(LOCAL_STORAGE_PHOTO_KEY, result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Introduction & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            {/* Small introduction kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                {profileData.kicker}
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {profileData.name}
            </h1>

            {/* Sub-headline: Role */}
            <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
              {profileData.role}
            </p>

            {/* Short Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {profileData.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg transition-all shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </a>

              <div className="inline-flex items-stretch rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xs overflow-hidden">
                <button
                  onClick={onOpenResume}
                  type="button"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
                  title="Preview CV"
                >
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Resume / CV</span>
                </button>
                <div className="w-px bg-slate-200 dark:bg-slate-700 my-1.5" />
                <a
                  href="/Bikram_Shrestha_CV.pdf"
                  download="Bikram_Shrestha_CV.pdf"
                  className="inline-flex items-center px-2.5 py-2.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
                  title="Direct Download CV (PDF)"
                  aria-label="Download CV directly"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Secondary social links */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Right Column: Personal Photo Fitted Naturally Into Background */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Soft ambient background blend */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/15 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/15 blur-2xl scale-110 pointer-events-none" />

              {/* Seamless portrait fitted directly into background */}
              <div
                onClick={() => fileInputRef.current?.click()}
                title="Click photo to upload/change image"
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden cursor-pointer group"
              >
                <img
                  src={photoUrl}
                  alt="Bikram Shrestha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle soft edge blend so it melts seamlessly into the background */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-900/5 dark:ring-white/10 pointer-events-none" />

                {/* Hidden file input for seamless photo uploads */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  aria-label="Upload personal photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
