import { Project } from '../types';
import bikezenImg from '../assets/images/bikezen_rental_app_1791300130233.jpg';
import electronicsImg from '../assets/images/electronics_store_app_1791300163585.jpg';
import foodOrderingImg from '../assets/images/food_ordering_system_1791300146960.jpg';
import pythonImg from '../assets/images/python_automation_tool_1791300187144.jpg';

export const projectsData: Project[] = [
  {
    id: 'bikezen',
    title: 'BikeZen',
    category: 'Full Stack',
    shortDescription:
      'BikeZen is a web-based bike rental system designed to provide a digital platform for browsing bikes, managing availability, making bookings, and managing rental-related operations.',
    fullDescription:
      'A full-stack bike rental solution created to digitize the manual bicycle rental workflow. Features include real-time fleet availability checking, categorized bike listings with specifications, an intuitive booking timeline, and administrative control panels for reservation status updates and rental operation records.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    imageUrl: bikezenImg,
    imageAlt: 'BikeZen bike rental web application interface mockup',
    githubUrl: 'https://github.com/Bikram-Shrestha10/bikezen',
    liveUrl: 'https://bikezen-demo.example.com',
    highlight: true,
    features: [
      'Interactive bike inventory browsing with specifications',
      'Rental slot availability & date-range reservation system',
      'RESTful backend architecture with MongoDB models',
      'Clean administrative dashboard for rental status tracking',
    ],
  },
  {
    id: 'electronic-store',
    title: 'Electronic Store',
    category: 'Full Stack',
    shortDescription:
      'A modern e-commerce web platform for tech hardware and electronics with dynamic category filters, product details, and shopping cart workflow.',
    fullDescription:
      'Developed during frontend & full-stack development practice, this e-commerce application offers smooth catalog navigation, real-time inventory checks, persistent cart state, and a clean checkout layout designed for high conversion and readability.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    imageUrl: electronicsImg,
    imageAlt: 'Electronic store e-commerce application interface mockup',
    githubUrl: 'https://github.com/Bikram-Shrestha10/electronic-store',
    liveUrl: 'https://electronic-store-demo.example.com',
    features: [
      'Multi-parameter filtering (category, price range, stock status)',
      'Product specification tables and high-resolution galleries',
      'Client-side cart state with quantity adjustments',
      'Responsive checkout flow with form validation',
    ],
  },
  {
    id: 'food-ordering-system',
    title: 'Food Ordering System',
    category: 'Frontend',
    shortDescription:
      'A responsive web application for restaurant meal selection, item customization, dynamic price calculations, and structured order summaries.',
    fullDescription:
      'Created during frontend internship training, this application models a modern restaurant order workflow. It features categorized dietary menus, modal dish customization, real-time basket calculations, and clear feedback states throughout the ordering process.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    imageUrl: foodOrderingImg,
    imageAlt: 'Food ordering system user interface mockup',
    githubUrl: 'https://github.com/Bikram-Shrestha10/food-ordering-system',
    liveUrl: 'https://food-ordering-demo.example.com',
    features: [
      'Categorized menu view with dietary indicators',
      'Customizable meal options and live subtotal calculations',
      'Smooth order drawer with immediate item counter updates',
      'Optimized touch targets for mobile and tablet dining orders',
    ],
  },
  {
    id: 'portfolio-clone',
    title: 'Portfolio Clone',
    category: 'Frontend',
    shortDescription:
      'A high-fidelity modern developer portfolio recreation focusing on pixel-perfect layouts, responsive typography, and performance.',
    fullDescription:
      'An exercise in precision frontend architecture and clean design systems. Emphasizes typography discipline, strict contrast standards, fluid cross-device breakpoints, and zero-dependency micro-interactions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    imageUrl: bikezenImg,
    imageAlt: 'Portfolio clone responsive user interface',
    githubUrl: 'https://github.com/Bikram-Shrestha10/portfolio-clone',
    liveUrl: 'https://portfolio-clone-demo.example.com',
    features: [
      'Precise typography hierarchy and fluid spacing system',
      'Accessible dark mode state management with system fallback',
      'Lightweight animation budget without layout shifts',
      'Semantic structure with 100% lighthouse best-practice target',
    ],
  },
  {
    id: 'python-projects',
    title: 'Python Utilities & Data Tools',
    category: 'Python',
    shortDescription:
      'Practical automation utilities, dataset processing scripts, and backend REST API connectors developed with Python.',
    fullDescription:
      'A curated collection of practical Python applications and automation scripts solving everyday programming and data formatting tasks. Includes CLI utilities, CSV/JSON parser modules, web scrapers, and REST API connector services.',
    technologies: ['Python', 'REST APIs', 'JSON Processing', 'Automation Scripts'],
    imageUrl: pythonImg,
    imageAlt: 'Python automation and data processing dashboard preview',
    githubUrl: 'https://github.com/Bikram-Shrestha10/python-projects',
    liveUrl: 'https://github.com/Bikram-Shrestha10/python-projects',
    features: [
      'Automated data normalization and schema validation routines',
      'CLI toolbelt with clean interactive terminal arguments',
      'REST API consumer scripts with structured error recovery',
      'Modular Python packages following PEP 8 conventions',
    ],
  },
];
