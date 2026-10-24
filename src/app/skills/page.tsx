"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { FaServer } from "react-icons/fa6";
import {
  SiCss, SiExpress, SiFigma, SiFirebase, SiGithub, SiGit, SiHtml5,
  SiJavascript, SiJsonwebtokens, SiMongodb, SiNextdotjs, SiNodedotjs,
  SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiWordpress,
} from "react-icons/si";

const filters = ["All Skills", "Frontend", "Backend & Database", "Tools & Platforms"] as const;
type Filter = (typeof filters)[number];
type Skill = { name: string; category: Exclude<Filter, "All Skills">; description: string; icon: IconType; color: string };

const skills: Skill[] = [
  { name: "HTML5", category: "Frontend", description: "Semantic structure and accessible document markup.", icon: SiHtml5, color: "#f16529" },
  { name: "CSS3", category: "Frontend", description: "Responsive layouts, visual styling, and modern CSS.", icon: SiCss, color: "#61dafb" },
  { name: "JavaScript", category: "Frontend", description: "Interactive browser behavior and application logic.", icon: SiJavascript, color: "#f7df1e" },
  { name: "React.js", category: "Frontend", description: "Component-based interfaces for interactive web products.", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", category: "Frontend", description: "Typed JavaScript for clearer application contracts.", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling for responsive interfaces.", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Next.js", category: "Backend & Database", description: "React applications with routing, rendering, and full-stack features.", icon: SiNextdotjs, color: "#dce7ff" },
  { name: "Node.js", category: "Backend & Database", description: "JavaScript runtime for server-side application logic.", icon: SiNodedotjs, color: "#6cc24a" },
  { name: "Express.js", category: "Backend & Database", description: "Server routing and middleware for web applications.", icon: SiExpress, color: "#dce7ff" },
  { name: "REST APIs", category: "Backend & Database", description: "Structured HTTP interfaces between clients and services.", icon: FaServer, color: "#60a5fa" },
  { name: "MongoDB", category: "Backend & Database", description: "Document-based data storage for connected applications.", icon: SiMongodb, color: "#47a248" },
  { name: "Supabase", category: "Backend & Database", description: "Backend services and hosted PostgreSQL data.", icon: SiSupabase, color: "#3ecf8e" },
  { name: "Firebase Authentication", category: "Backend & Database", description: "Authentication services for connected applications.", icon: SiFirebase, color: "#ffca28" },
  { name: "JWT", category: "Backend & Database", description: "Token-based authentication and authorization workflows.", icon: SiJsonwebtokens, color: "#e84393" },
  { name: "Git", category: "Tools & Platforms", description: "Distributed version control for source code.", icon: SiGit, color: "#f05032" },
  { name: "GitHub", category: "Tools & Platforms", description: "Code hosting, collaboration, and project workflows.", icon: SiGithub, color: "#dce7ff" },
  { name: "WordPress", category: "Tools & Platforms", description: "Content management and customizable websites.", icon: SiWordpress, color: "#21759b" },
  { name: "Figma", category: "Tools & Platforms", description: "Interface design and collaborative visual planning.", icon: SiFigma, color: "#f24e1e" },
];

const categoryDescriptions: Record<Exclude<Filter, "All Skills">, string> = {
  Frontend: "Interface technologies for structured, responsive, interactive web experiences.",
  "Backend & Database": "Server, API, database, and authentication tools used in connected applications.",
  "Tools & Platforms": "Development, collaboration, content, and design platforms used in project workflows.",
};

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Skills");
  const visibleSkills = activeFilter === "All Skills" ? skills : skills.filter((skill) => skill.category === activeFilter);
  const groups = activeFilter === "All Skills"
    ? filters.slice(1).map((category) => ({ category: category as Exclude<Filter, "All Skills">, skills: skills.filter((skill) => skill.category === category) }))
    : [{ category: activeFilter as Exclude<Filter, "All Skills">, skills: visibleSkills }];

  return (
    <div className="inner-page section-wrap skills-page">
      <header className="page-header skills-page-header">
        <p className="eyebrow"><span />Skills</p>
        <h1>Skills &amp; Technologies</h1>
        <p>Technologies and tools I use to build modern, responsive web applications.</p>
      </header>
      <div className="skills-filter-row" role="group" aria-label="Filter skills by category">
        {filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "active" : undefined} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
      </div>
      <div className="skills-category-list">
        {groups.map(({ category, skills: groupSkills }) => (
          <section className="skills-category" key={category}>
            <div className="skills-category-heading"><h2>{category}</h2><p>{categoryDescriptions[category]}</p></div>
            <div className="technology-grid">
              {groupSkills.map((skill) => {
                const Icon = skill.icon;
                return <article className="technology-card" key={skill.name}><div className="technology-icon" style={{ "--icon-color": skill.color } as React.CSSProperties}><Icon /></div><div><h3>{skill.name}</h3><p>{skill.description}</p></div></article>;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
