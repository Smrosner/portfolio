/**
 * Project Interface - Defines the structure for portfolio projects
 */
export interface Project {
  id: string; // Unique identifier (used for routing)
  title: string; // Project name
  description: string; // Brief description (shown in card)
  longDescription: string; // Detailed description (shown on detail page)
  image: string; // Project image/screenshot URL
  technologies: Technology[]; // Tech stack used
  links: {
    demo?: string; // Live demo URL
    github?: string; // GitHub repository URL
    website?: string; // Project website URL
  };
  category: ProjectCategory; // Project category for filtering
  featured: boolean; // Whether to highlight this project
  metrics?: {
    label: string;
    value: string;
  }[]; // Impact metrics (e.g., "25% increase in engagement")
  startDate?: string; // Project start date (YYYY-MM-DD)
  endDate?: string; // Project end date (YYYY-MM-DD)
  images?: string[]; // Additional screenshots/gallery images
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

export interface Technology {
  name: string; // Technology name (e.g., "React")
  category?: string; // Optional category (e.g., "Frontend", "Backend", "DevOps")
}

export type ProjectCategory =
  | "frontend"
  | "fullstack"
  | "backend"
  | "mobile"
  | "design"
  | "other";

/**
 * Sample Projects - Replace these with your actual projects
 */
export const projects: Project[] = [
  {
    id: "project-1",
    title: "CrowdCoursing Platform",
    description:
      "Responsive course management platform with 30+ Material-UI components",
    longDescription:
      "Built a comprehensive course management platform as a Senior Software Engineer at CrowdCoursing. Created over 30 responsive React components using Material-UI, ensuring seamless cross-device experience. Implemented a sophisticated user notification system that increased app engagement by 25%. Developed an advanced organization dashboard using TypeScript, GraphQL, and React-Query for efficient data management.",
    image: "/projects/crowdcoursing.jpg", // Replace with actual image path
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Material-UI", category: "Frontend" },
      { name: "GraphQL", category: "Backend" },
      { name: "React-Query", category: "Frontend" },
    ],
    links: {
      demo: "https://crowdcoursing.com",
      github: "https://github.com/smrosner/crowdcoursing", // Update with actual URL
    },
    category: "fullstack",
    featured: true,
    metrics: [
      { label: "Engagement Increase", value: "25%" },
      { label: "Components Created", value: "30+" },
      { label: "Users", value: "10K+" },
    ],
    startDate: "2023-10",
    endDate: undefined, // Still ongoing
  },
  {
    id: "project-2",
    title: "Comfort Care MD - Medical Application",
    description: "Healthcare platform with shadcn/ui components and TypeScript",
    longDescription:
      "Developed a medical application as a Consultant Software Engineer at ByteBot. Created responsive applications using TypeScript, React, and Next.js. The platform provides a user-friendly interface for medical professionals using modern UI components. Implemented blockchain solutions with Solidity smart contracts for secure data management.",
    image: "/projects/comfort-care-md.jpg", // Replace with actual image path
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "shadcn/ui", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Solidity", category: "Blockchain" },
    ],
    links: {
      demo: "https://comfort-care-md.com", // Update with actual URL if public
      github: "https://github.com/smrosner/comfort-care-md", // Update with actual URL
    },
    category: "fullstack",
    featured: true,
    metrics: [
      { label: "Healthcare Professionals", value: "500+" },
      { label: "Features Implemented", value: "15+" },
    ],
    startDate: "2024-05",
    endDate: undefined, // Still ongoing
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio built with Next.js and Tailwind CSS",
    longDescription:
      "Personal portfolio website showcasing projects, experience, and skills. Built with Next.js for optimal performance and SEO. Features a custom theme system, responsive design, and smooth animations. The portfolio demonstrates modern web development practices and design principles.",
    image: "/projects/portfolio.jpg", // Replace with actual image path
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
    ],
    links: {
      demo: "https://shayrosner.dev",
      github: "https://github.com/smrosner/portfolio",
    },
    category: "frontend",
    featured: true,
    startDate: "2024-01",
    endDate: undefined, // Ongoing
  },
];

/**
 * Helper function to get projects by category
 */
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((project) => project.category === category);
};

/**
 * Helper function to get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Helper function to get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

/**
 * Helper function to get all unique technologies used
 */
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech.name);
    });
  });
  return Array.from(techSet).sort();
};
