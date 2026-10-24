import { skillGroups } from "@/data/portfolio";

const categories = [
  { name: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend & Frameworks", skills: ["Next.js", "Node.js", "Express.js", "REST APIs"] },
  { name: "Database & Authentication", skills: ["MongoDB", "Supabase", "Firebase Auth", "JWT"] },
  { name: "Tools & Platforms", skills: ["Git", "GitHub", "WordPress", "Figma"] },
];

export default function SkillsPage() {
  return (
    <div className="inner-page section-wrap">
      <header className="page-header"><p className="eyebrow"><span />Skills</p><h1>My modern <em>development toolkit.</em></h1><p>A focused set of technologies used to build responsive interfaces, application logic, and connected web products.</p></header>
      <div className="skills-grid">{categories.map((category, index) => <article className="skill-card" key={category.name}><div className="skill-card-top"><span>0{index + 1}</span><i /></div><h2>{category.name}</h2><div className="skill-items">{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
    </div>
  );
}
