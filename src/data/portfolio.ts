export const personal = {
  name: "Shohan Hossain Alfaz",
  initials: "SHA",
  role: "Junior Web Developer",
  summary: "Aspiring Web Developer with hands-on experience building responsive web applications and e-commerce platforms using React.js, Next.js, and TypeScript. Passionate about creating impactful digital solutions and contributing to innovative development teams.",
  location: "Dhaka, Bangladesh",
  email: "sh.alfaz.dev@gmail.com",
  cvDownloadUrl: "/Shohan_Hossain_Alfaz_CV.pdf",
  links: {
    portfolio: "https://shohanalfaz.vercel.app/",
    linkedin: "https://www.linkedin.com/in/shohan-hossain-alfaz-73a575266",
    github: "https://github.com/shalfaz",
    facebook: "",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

export const skillGroups = [
  { name: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend & Database", skills: ["Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Supabase", "Firebase Auth", "JWT"] },
  { name: "Tools", skills: ["Git", "GitHub", "WordPress", "Figma"] },
] as const;

type PortfolioProject = {
  name: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: PortfolioProject[] = [
  {
    name: "TaskAnt",
    category: "MARKETPLACE",
    title: "On-Demand Task & Service Marketplace",
    description:
      "A full-stack task marketplace with authentication, database integration, and APIs for posting, bidding, messaging, and reviews.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/taskant.svg",
    liveUrl: "https://taskant.vercel.app/",
    githubUrl: "",
  },
  {
    name: "One World Hands",
    category: "SOCIAL IMPACT",
    title: "NGO & Donation Platform",
    description:
      "A responsive NGO platform with donation campaigns, dynamic content, and separate admin and volunteer authentication panels.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: "/projects/one-world-hands.svg",
    liveUrl: "https://one-world-hands.vercel.app/",
    githubUrl: "",
  },
  {
    name: "Looklify",
    category: "E-COMMERCE",
    title: "Cosmetics E-commerce Platform",
    description:
      "A cosmetics e-commerce platform with product browsing, search and filtering, a shopping cart, database integration, and payment functionality.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: "/projects/looklify.svg",
    liveUrl: "https://looklifybd.com/",
    githubUrl: "",
  },
  {
    name: "Shilpalay",
    category: "E-COMMERCE",
    title: "Fashion & Heritage E-commerce Platform",
    description:
      "A responsive e-commerce frontend for fashion and heritage, with product layouts and category navigation. Backend and payment integration are in development.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/shilpalay.svg",
    liveUrl: "https://shilpalay.com/",
    githubUrl: "",
  },
];

export const education = [
  {
    institution: "University of Liberal Arts Bangladesh (ULAB), Dhaka",
    degree: "B.Sc. in Computer Science and Engineering",
    duration: "2024 – Present",
    grade: "CGPA: 3.67 / 4.00 (Ongoing)",
    startYear: 2024,
    current: true,
  },
  {
    institution: "North South University (NSU), Dhaka",
    degree: "Bachelor of Business Administration",
    duration: "2023 – 2023",
    grade: "CGPA: 3.12 / 4.00 (Incomplete)",
    startYear: 2023,
    current: false,
  },
  {
    institution: "BAF Shaheen College, Dhaka (Bangladesh Air Force)",
    degree: "Higher Secondary Certificate (HSC), Science",
    duration: "2020 – 2022",
    grade: "GPA: 5.00 / 5.00",
    startYear: 2020,
    current: false,
  },
  {
    institution: "Pabna Zilla School, Pabna",
    degree: "Secondary School Certificate (SSC), Science",
    duration: "2011 – 2020",
    grade: "GPA: 5.00 / 5.00",
    startYear: 2011,
    current: false,
  },
] as const;

export const experiences = [
  {
    role: "Web Developer",
    company: "Looklify",
    project: "E-commerce Platform",
    period: "May 2026 — Present",
    startDate: "2026-05",
    detail: "Contributing to product browsing, search and filtering, shopping cart, database integration, and payment functionality for an e-commerce platform.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
] as const;

export const activities = [
  {
    name: "ULAB CSE Hackathon",
    detail: "Participant and team leader; led team collaboration on problem-solving, idea development, and project presentation.",
    type: "HACKATHON",
  },
  {
    name: "Idea Hunter 4.0",
    detail: "Participant and team leader representing ULAB in a business and innovation competition.",
    type: "INNOVATION",
  },
  {
    name: "University Club Day 2025",
    detail: "Event manager coordinating logistics, volunteers, and promotion.",
    type: "COMMUNITY",
  },
  {
    name: "Rotary International",
    detail: "Volunteer since 2018; contributed to health, education, and environmental awareness initiatives.",
    type: "VOLUNTEERING",
  },
] as const;

export const learning = [
  {
    name: "Cybersecurity Training",
    provider: "Mehedi Shakeel Academy",
    status: "Ongoing",
  },
  {
    name: "Frontend Web Development",
    provider: "Hablu Programmer",
    status: "Self-paced",
  },
  {
    name: "Bangladesh Summit",
    provider: "Google for Education",
    status: "Two-day workshop",
  },
] as const;
