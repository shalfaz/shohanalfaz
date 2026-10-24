import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="inner-page section-wrap">
      <header className="page-header"><p className="eyebrow"><span />Projects</p><h1>Selected work, <em>built for real users.</em></h1><p>Four featured web platforms spanning nonprofit services, task marketplaces, retail, and heritage-focused commerce.</p></header>
      <div className="project-grid gallery-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-image-wrap"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>0{index + 1}</span></div><div className="project-content"><p className="project-category">{project.category}</p><h2>{project.name}</h2><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p><ul className="tag-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><div className="project-links">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a> : <span>Live demo available on request</span>}{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a> : null}</div></div></article>)}</div>
    </div>
  );
}
