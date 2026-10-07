import { SkillCategory, ServiceItem } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Component architecture, responsive layouts, and interactive user interfaces.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Server logic, routing, middleware, and API architectures.',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Programming',
    description: 'Core languages for software logic, scripting, and application development.',
    skills: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Database',
    description: 'Data persistence, schema design, queries, and document storage.',
    skills: ['MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Workflow',
    description: 'Development environment, version control, API testing, and design tooling.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Building responsive and user-friendly interfaces using React, TypeScript, HTML, CSS, and Tailwind CSS with high performance and accessibility.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'Building complete web applications with frontend, backend, APIs, and databases seamlessly connected for practical real-world use.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'python',
    title: 'Python Development',
    description:
      'Building practical applications, automation scripts, and solving programming problems using Python with clean and maintainable code.',
    technologies: ['Python', 'Automation', 'Scripting', 'Data Processing'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'Building REST APIs and connecting applications with databases and frontend applications with structured error handling and validation.',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'SQL / MongoDB'],
  },
];
