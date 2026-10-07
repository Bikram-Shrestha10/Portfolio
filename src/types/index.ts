export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Python';

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Python';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl?: string;
  features?: string[];
  role?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: 'experience' | 'education';
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}
