import React from 'react';

interface BikramLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BikramLogo: React.FC<BikramLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const textSizeClass = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`inline-flex select-none flex-col items-start leading-none ${className}`}>
      <span className={`font-display font-black tracking-[-0.06em] text-slate-950 dark:text-white transition-colors ${textSizeClass}`}>
        Bikram<span className="text-rose-500">.</span>
      </span>
      <span className="mt-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">Shrestha</span>
    </div>
  );
};
