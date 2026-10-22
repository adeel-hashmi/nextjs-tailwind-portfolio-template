export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  problem: string
  solution: string
  role: string
  duration: string
  team: string
  image: string
  heroImage: string
  tags: string[]
  icon: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  metrics: {
    users: string
    performance: string
    impact: string
  }
  features: string[]
  challenges: string[]
  technologies: {
    [category: string]: string[]
  }
  gallery?: string[]
}

// Fictional case-study content for demonstrating the template layouts.
export const projects: Project[] = [
  {
    id: "1",
    slug: "logistics-dashboard",
    title: "Enterprise Logistics Dashboard",
    description: "Sample logistics case study illustrating a fleet-tracking dashboard layout.",
    longDescription: `A comprehensive logistics management platform that revolutionized how the company tracks and manages their fleet operations. Built with React, TypeScript, and real-time WebSocket connections, this dashboard processes over 50,000 shipments monthly while maintaining 99.9% uptime.

The platform integrates with multiple third-party APIs, provides real-time GPS tracking, and features an intuitive drag-and-drop interface for route optimization. The system has directly contributed to €2M+ in cost savings through improved efficiency and reduced delivery times.`,
    problem: `The client was struggling with inefficient logistics operations, manual route planning, and lack of real-time visibility into their fleet. Drivers were using paper-based systems, dispatchers had no real-time tracking, and customers frequently complained about delayed deliveries. The existing system was a legacy desktop application that couldn't scale with their growing business needs.`,
    solution: `I architected and developed a modern web-based dashboard that provides real-time fleet tracking, automated route optimization, and comprehensive analytics. The solution includes a mobile-responsive interface for drivers, a dispatch center for operations teams, and executive dashboards for management. Key features include real-time GPS tracking, geofencing alerts, automated dispatch, and predictive analytics for route optimization.`,
    role: "Lead Frontend Developer",
    duration: "6 months",
    team: "4 developers, 2 designers, 1 PM",
    image: "/placeholder.svg?height=400&width=600&text=Logistics+Dashboard",
    heroImage: "/placeholder.svg?height=600&width=1200&text=Logistics+Dashboard+Hero",
    tags: [
      "React.js",
      "TypeScript",
      "Leaflet.js",
      "WebSocket",
      "Redux Toolkit",
      "Canvas API",
      "Chart.js",
      "Tailwind CSS",
    ],
    icon: "📊",
    featured: true,
    metrics: {
      users: "10K+ daily",
      performance: "60% faster",
      impact: "€2M+ savings",
    },
    features: [
      "Real-time GPS tracking with 1-second update intervals",
      "Interactive map with custom markers and route visualization",
      "Drag-and-drop Gantt charts for schedule management",
      "Automated route optimization using machine learning",
      "Real-time notifications and alerts system",
      "Mobile-responsive design for field operations",
      "Advanced analytics and reporting dashboard",
      "Integration with 15+ third-party logistics APIs",
      "Multi-tenant architecture supporting 100+ clients",
      "Offline-first PWA capabilities for remote areas",
    ],
    challenges: [
      "Optimizing map performance with 1000+ simultaneous vehicle markers",
      "Implementing real-time data synchronization across multiple users",
      "Building complex drag-and-drop interactions with data persistence",
      "Ensuring 99.9% uptime for mission-critical operations",
      "Creating responsive layouts that work on tablets in delivery trucks",
    ],
    technologies: {
      Frontend: ["React.js", "TypeScript", "Redux Toolkit", "Framer Motion"],
      Mapping: ["Leaflet.js", "MapBox GL", "Turf.js"],
      "Real-time": ["Socket.io", "WebRTC", "Server-Sent Events"],
      Visualization: ["Chart.js", "D3.js", "Canvas API"],
      Styling: ["Tailwind CSS", "Styled Components"],
      Testing: ["Jest", "React Testing Library", "Cypress"],
      "Build Tools": ["Vite", "ESLint", "Prettier"],
      Deployment: ["Docker", "AWS", "CloudFront"],
    },
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Dashboard+Overview",
      "/placeholder.svg?height=400&width=600&text=Real-time+Map",
      "/placeholder.svg?height=400&width=600&text=Analytics+View",
      "/placeholder.svg?height=400&width=600&text=Mobile+Interface",
    ],
  },
  {
    id: "2",
    slug: "cms-dashboard",
    title: "Self-Service CMS Platform",
    description: "Sample content-management case study illustrating an editorial workflow.",
    longDescription: `A modern content management system built with Next.js that empowers non-technical users to create, manage, and publish content across multiple channels. The platform features a sophisticated role-based permission system, real-time collaboration tools, and automated content workflows.

Built with server-side rendering for optimal SEO performance, the CMS handles over 50,000 content pieces and serves 5,000+ daily active editors. The system includes advanced features like content versioning, automated publishing workflows, and comprehensive analytics.`,
    problem: `The marketing team was struggling with a legacy CMS that required developer intervention for simple content updates. Content creators couldn't collaborate effectively, there was no version control, and the publishing process was manual and error-prone. The old system also had poor SEO performance and couldn't handle the growing content volume.`,
    solution: `I developed a modern, user-friendly CMS with intuitive drag-and-drop editing, real-time collaboration, and automated publishing workflows. The solution includes a rich text editor, media management system, content scheduling, and comprehensive role-based permissions. Built with Next.js for optimal performance and SEO.`,
    role: "Full-Stack Frontend Developer",
    duration: "4 months",
    team: "3 developers, 1 designer, 1 PM",
    image: "/placeholder.svg?height=400&width=600&text=CMS+Dashboard",
    heroImage: "/placeholder.svg?height=600&width=1200&text=CMS+Dashboard+Hero",
    tags: ["Next.js", "TypeScript", "SSR", "Auth", "Tailwind CSS", "Zustand", "Prisma", "PostgreSQL"],
    icon: "⚙️",
    featured: true,
    metrics: {
      users: "5K+ editors",
      performance: "40% faster",
      impact: "80% efficiency",
    },
    features: [
      "Drag-and-drop page builder with 50+ components",
      "Real-time collaborative editing with conflict resolution",
      "Advanced role-based permission system",
      "Content versioning and rollback capabilities",
      "Automated publishing workflows and scheduling",
      "SEO optimization tools and meta tag management",
      "Multi-language content support",
      "Advanced media management with automatic optimization",
      "Content analytics and performance tracking",
      "API-first architecture for headless CMS capabilities",
    ],
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Building a flexible component system for non-technical users",
      "Optimizing SSR performance with large content datasets",
      "Creating intuitive UX for complex permission management",
    ],
    technologies: {
      Frontend: ["Next.js", "TypeScript", "Zustand", "React Hook Form"],
      Styling: ["Tailwind CSS", "Headless UI", "Radix UI"],
      Backend: ["Next.js API Routes", "Prisma", "PostgreSQL"],
      Authentication: ["NextAuth.js", "JWT", "OAuth"],
      "Real-time": ["Pusher", "WebSockets"],
      Media: ["Cloudinary", "Sharp", "FFmpeg"],
      Testing: ["Jest", "Playwright", "MSW"],
      Deployment: ["Vercel", "PlanetScale", "AWS S3"],
    },
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Content+Editor",
      "/placeholder.svg?height=400&width=600&text=Media+Library",
      "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
      "/placeholder.svg?height=400&width=600&text=User+Management",
    ],
  },
  {
    id: "3",
    slug: "government-portals",
    title: "Government Digital Portals",
    description: "Sample public-service portal case study illustrating application workflows.",
    longDescription: `A suite of government portals built for Pakistani regulatory bodies including PSEB (Punjab School Education Board), ASF (Airport Security Force), and OGRA (Oil and Gas Regulatory Authority). These mission-critical applications process over 100,000 citizen applications monthly with strict security and accessibility requirements.

Each portal features complex multi-step forms, document management systems, payment integration, and real-time application tracking. The systems are built to handle high traffic loads during peak application periods while maintaining 99.9% uptime and full accessibility compliance.`,
    problem: `Citizens were forced to visit government offices for simple applications, leading to long queues and inefficient processes. The existing paper-based system was slow, prone to errors, and provided no transparency into application status. Government staff were overwhelmed with manual data entry and document verification.`,
    solution: `I developed comprehensive digital portals that allow citizens to submit applications online, track their status in real-time, and receive notifications. The solution includes secure document upload, online payment integration, automated workflows for government staff, and comprehensive reporting dashboards for administrators.`,
    role: "Senior Frontend Developer",
    duration: "8 months",
    team: "6 developers, 2 designers, 1 PM",
    image: "/placeholder.svg?height=400&width=600&text=Government+Portal",
    heroImage: "/placeholder.svg?height=600&width=1200&text=Government+Portal+Hero",
    tags: [
      "React.js",
      "Laravel Integration",
      "REST APIs",
      "Forms",
      "Charts",
      "Responsive",
      "Accessibility",
      "Security",
    ],
    icon: "🏛️",
    featured: true,
    liveUrl: undefined, // Government portals are typically not public
    githubUrl: undefined, // Private repositories for security
    metrics: {
      users: "100K+ citizens",
      performance: "50% faster",
      impact: "99.9% uptime",
    },
    features: [
      "Multi-step form wizard with progress tracking",
      "Secure document upload with virus scanning",
      "Real-time application status tracking",
      "Integrated payment gateway for government fees",
      "Multi-language support (English/Urdu)",
      "SMS and email notification system",
      "Digital signature verification",
      "Comprehensive admin dashboard for staff",
      "Advanced search and filtering capabilities",
      "Automated report generation and analytics",
    ],
    challenges: [
      "Meeting strict government security and compliance requirements",
      "Implementing complex form validation for legal documents",
      "Ensuring WCAG 2.1 AA accessibility compliance",
      "Integrating with legacy government database systems",
      "Handling traffic spikes during application deadlines",
    ],
    technologies: {
      Frontend: ["React.js", "TypeScript", "React Hook Form", "React Query"],
      "UI/UX": ["Tailwind CSS", "Ant Design", "Framer Motion"],
      Integration: ["Axios", "REST APIs", "GraphQL"],
      Security: ["JWT", "OAuth 2.0", "HTTPS", "CSP"],
      Accessibility: ["ARIA", "Screen Reader Support", "Keyboard Navigation"],
      Testing: ["Jest", "React Testing Library", "Accessibility Testing"],
      Performance: ["Code Splitting", "Lazy Loading", "PWA"],
      Deployment: ["Docker", "Kubernetes", "Load Balancers"],
    },
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Application+Form",
      "/placeholder.svg?height=400&width=600&text=Document+Upload",
      "/placeholder.svg?height=400&width=600&text=Status+Tracking",
      "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}
