import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="inner-page section-wrap projects-page">
      <header className="page-header">
        <p className="eyebrow"><span />Projects</p>
        <h1>MY LATEST PROJECTS</h1>
        <p>A selection of digital products built to solve real needs, from commerce and task services to community impact.</p>
      </header>
      <div className="project-grid gallery-grid projects-masonry">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-image-wrap">
              <Image
                className="project-mockup"
                src={project.image}
                alt={`${project.name} laptop mockup`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span>0{index + 1}</span>
            </div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h2>{project.name}</h2>
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {(project.liveUrl || project.githubUrl) && (
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Project ↗</a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
