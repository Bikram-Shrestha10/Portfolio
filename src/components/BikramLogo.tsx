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
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <span className={`font-bold tracking-tight text-slate-900 dark:text-white transition-colors ${textSizeClass}`}>
        <span>Bikram</span>{' '}
        <span className="text-blue-600 dark:text-blue-400">Shrestha</span>
      </span>
    </div>
  );
};
