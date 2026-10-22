export const personal = {
  name: "Shohan Hossain Alfaz",
  initials: "SHA",
  role: "Junior Full-Stack Web Developer",
  location: "Dhaka, Bangladesh",
  email: "your-email@example.com",
  cvDownloadUrl: "/shohan-hossain-alfaz-cv-placeholder.txt",
  links: {
    portfolio: "",
    linkedin: "",
    github: "",
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
  "Git",
  "GitHub",
  "Figma",
] as const;

export const projects = [
  {
    name: "TaskAnt",
    category: "MARKETPLACE",
    title: "On-Demand Task & Service Marketplace",
    description:
      "A service marketplace concept connecting people who need a task done with local helpers ready to take it on.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: "/projects/taskant.svg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "One World Hands",
    category: "SOCIAL IMPACT",
    title: "NGO & Donation Platform",
    description:
      "A thoughtful digital home for a nonprofit, bringing its mission, community programs, and ways to support together.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/one-world-hands.svg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "Looklify",
    category: "E-COMMERCE",
    title: "Cosmetics E-commerce Platform",
    description:
      "A clean beauty shopping experience designed to make discovering and browsing cosmetics feel effortless.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    image: "/projects/looklify.svg",
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "Shilpalay",
    category: "E-COMMERCE",
    title: "Fashion & Heritage E-commerce Platform",
    description:
      "An online showcase celebrating fashion and heritage, with a storefront that puts craft and culture front and center.",
    technologies: ["React", "Node.js", "REST APIs"],
    image: "/projects/shilpalay.svg",
    liveUrl: "",
    githubUrl: "",
  },
] as const;

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "University of Liberal Arts Bangladesh",
  shortInstitution: "ULAB",
  detail: "CGPA 3.67 / 4.00 · Ongoing",
  period: "2024 — Present",
} as const;

export const activities = [
  {
    name: "ULAB CSE Hackathon",
    detail: "Joined a collaborative build challenge with the ULAB CSE community.",
    type: "HACKATHON",
  },
  {
    name: "Idea Hunter 4.0",
    detail: "Took part in an idea-generation experience focused on creative problem solving.",
    type: "INNOVATION",
  },
  {
    name: "University Club Day 2025",
    detail: "Connected with campus clubs and the wider university community.",
    type: "COMMUNITY",
  },
  {
    name: "Rotary International",
    detail: "Volunteering and community involvement, 2018 — Present.",
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
