export const personalInfo = {
  name: "Rohit",
  role: "Software Developer",
  tagline: "Problem Solver | Builder | Lifelong Learner",
  bio: "I'm a passionate software developer and a fresher actively looking for opportunities to build impactful products. I love solving complex problems, writing clean code, and continuously learning new technologies. My journey through self-learning, internships, and personal projects has shaped me into a resilient and driven developer ready to make a mark.",
  email: "rohit@example.com",
  location: "India",
  available: true,
  socials: {
    github: "https://github.com/rohit",
    linkedin: "https://linkedin.com/in/rohit",
  },
};

export const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "DSA",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "SQL",
  "REST APIs",
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management app with analytics, category tracking, and PDF/CSV export functionality.",
    tech: ["React", "Node.js", "MySQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, minimal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion with dark/light mode.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
  {
    title: "Task Manager API",
    description:
      "RESTful API for task management with authentication, CRUD operations, and role-based access control.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizer for sorting and pathfinding algorithms with step-by-step animation controls.",
    tech: ["React", "TypeScript", "Canvas API"],
    liveUrl: "#",
    githubUrl: "https://github.com/rohit",
  },
];

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education" | "milestone";
}

export const experience: ExperienceEntry[] = [
  {
    title: "Self-Learning & Growth",
    company: "Independent",
    period: "2023 — Present",
    description:
      "Dedicated a gap year to deep-dive into Data Structures & Algorithms, full-stack web development, and building real-world projects. This period of intense self-driven learning became the foundation of my technical skills.",
    type: "milestone",
  },
  {
    title: "Web Development Intern",
    company: "Startup Project",
    period: "2023",
    description:
      "Worked on building responsive web interfaces, collaborating with a small team to deliver features on tight timelines. Gained hands-on experience with React and modern JavaScript tooling.",
    type: "work",
  },
  {
    title: "Bachelor's in Computer Science",
    company: "University",
    period: "2020 — 2024",
    description:
      "Studied core CS fundamentals including Operating Systems, DBMS, Computer Networks, and Software Engineering. Built multiple academic and personal projects.",
    type: "education",
  },
  {
    title: "Started Coding Journey",
    company: "Self-taught",
    period: "2020",
    description:
      "Began learning programming with Java. Fell in love with problem-solving and building things from scratch. Started competitive programming and small web projects.",
    type: "milestone",
  },
];
