import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroPortrait from '../assets/images/bikram-hero-portrait-v2.png';

const LOCAL_STORAGE_PHOTO_KEY = 'src/assets/images/Bikramshrestha.jpg';

export const Hero: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedPhoto = localStorage.getItem(LOCAL_STORAGE_PHOTO_KEY);
      if (savedPhoto) return savedPhoto;
    }
    return heroPortrait;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhotoUrl(result);
      localStorage.setItem(LOCAL_STORAGE_PHOTO_KEY, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="home" className="editorial-hero relative isolate overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="editorial-hero__inner relative mx-auto w-full max-w-[1440px] px-4 sm:px-8">
        <p className="editorial-hero__intro relative z-10 mx-auto flex items-center justify-center gap-2 text-center text-sm sm:text-base">
          <span aria-hidden="true" className="text-xl">👋</span>
          <span>Hey, I’m Bikram — I build thoughtful digital experiences</span>
        </p>

        <h1 className="editorial-hero__title relative z-10 mx-auto text-center font-black tracking-[-0.075em]">
          <span className="editorial-hero__title-line block">IT Student</span>
          <span className="editorial-hero__title-line editorial-hero__title-line--outline block">&amp; Developer</span>
        </h1>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Click to upload or change your portrait"
          aria-label="Upload or change portrait of Bikram Shrestha"
          className="editorial-hero__portrait absolute left-1/2 z-20 block -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500"
        >
          <img
            src={photoUrl}
            alt="Monochrome portrait of Bikram Shrestha"
            className="h-full w-auto max-w-none object-contain object-bottom"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            aria-label="Choose a portrait image"
          />
        </button>

        <div className="editorial-hero__details absolute z-30 flex w-full items-center justify-between px-4 sm:px-8">
          <p className="text-base font-medium tracking-tight sm:text-lg">based in Kathmandu, Nepal.</p>
          <p className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">React · TypeScript · Node.js</p>
        </div>

        <div className="editorial-hero__actions absolute z-30 flex items-center justify-center gap-3 px-4">
          <a href="#projects" className="editorial-hero__button editorial-hero__button--primary">
            <span>Explore my work</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="#contact" className="editorial-hero__button editorial-hero__button--secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};
