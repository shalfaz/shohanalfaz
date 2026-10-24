import Image from "next/image";
import Link from "next/link";
import { personal, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero reference-hero section-wrap">
        <div className="hero-copy reference-copy">
          <p className="availability-pill"><span />OPEN TO WEB DEVELOPMENT OPPORTUNITIES</p>
          <p className="hero-intro">HELLO, I'M SHOHAN HOSSAIN ALFAZ</p>
          <h1>Building Modern <em>Digital Experiences.</em></h1>
          <p className="hero-role">Junior Web Developer</p>
          <p className="hero-summary">I build responsive web applications and e-commerce experiences using React.js, Next.js, and TypeScript. Passionate about clean UI, practical problem-solving, and creating impactful digital products.</p>
          <div className="hero-actions reference-actions">
            <Link className="button button-primary" href="/projects">View Projects <span>→</span></Link>
            <Link className="button button-secondary" href="/contact">Contact Me</Link>
            <a className="button button-ghost" href={personal.cvDownloadUrl} download>Download CV <span>↓</span></a>
          </div>
          <div className="hero-social-row">
            <span>Find me on</span>
            <a href={personal.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={personal.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href={`mailto:${personal.email}`} aria-label="Email Shohan">@</a>
          </div>
        </div>
        <div className="hero-visual reference-visual" aria-label="Abstract developer workspace">
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />
          <div className="visual-ring ring-three" />
          <div className="developer-card">
            <div className="developer-card-grid" />
            <div className="developer-monogram">SHA<span>WEB.DEV</span></div>
            <div className="developer-card-status"><i /> AVAILABLE FOR OPPORTUNITIES</div>
            <div className="developer-card-code">
              <span>01</span><p><b>const</b> developer = {"{"}</p>
              <span>02</span><p>&nbsp;&nbsp;focus: <strong>&quot;modern web&quot;</strong>,</p>
              <span>03</span><p>&nbsp;&nbsp;stack: <strong>&quot;React + Next.js&quot;</strong>,</p>
              <span>04</span><p>&nbsp;&nbsp;craft: <strong>&quot;with care&quot;</strong></p>
              <span>05</span><p>{"}"};</p>
            </div>
          </div>
          <div className="tech-chip chip-react"><span>⚛</span> React.js</div>
          <div className="tech-chip chip-next"><span>N</span> Next.js</div>
          <div className="tech-chip chip-ts"><span>TS</span> TypeScript</div>
        </div>
      </section>

      <section className="section-wrap highlights reference-highlights" aria-label="Professional highlights">
        <div><strong>Web Developer</strong><span>Primary professional role</span></div>
        <div><strong>4 projects</strong><span>Featured portfolio work</span></div>
        <div><strong>Dhaka</strong><span>Bangladesh</span></div>
        <div><strong>React + Next.js</strong><span>Core development stack</span></div>
      </section>

      <section className="section-wrap section-block">
        <div className="section-heading-row">
          <div className="section-heading"><p className="eyebrow"><span />Selected work</p><h2>Featured projects</h2><p>A selection of web platforms built around practical user needs.</p></div>
          <Link className="text-link" href="/projects">View all projects →</Link>
        </div>
        <div className="project-grid featured-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-image-wrap"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 700px) 100vw, 50vw" /><span>0{index + 1}</span></div>
              <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p>{project.title}</p><ul className="tag-list">{project.technologies.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-block skills-preview">
        <div className="section-heading"><p className="eyebrow"><span />Capabilities</p><h2>Built with a modern web stack.</h2></div>
        <div className="skill-preview-grid">{skillGroups.map((group) => <article key={group.name}><span>{group.name}</span><div>{group.skills.slice(0, 6).map((skill) => <b key={skill}>{skill}</b>)}</div></article>)}</div>
      </section>

      <section className="section-wrap contact-banner">
        <div><p className="eyebrow"><span />Start a conversation</p><h2>Have a project in mind?</h2><p>Let&apos;s discuss how thoughtful web development can bring it to life.</p></div>
        <Link className="button button-primary" href="/contact">Contact Me →</Link>
      </section>
    </>
  );
}
