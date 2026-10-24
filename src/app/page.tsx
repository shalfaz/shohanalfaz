import Image from "next/image";
import Link from "next/link";
import { personal, projects } from "@/data/portfolio";

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
          <div className="hero-connect-row">
            <div className="hero-social-row">
              <span>Find me on</span>
              <a href={personal.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><span className="social-brand github-brand" aria-hidden="true" /></a>
              <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span className="social-brand linkedin-brand" aria-hidden="true">in</span></a>
              {personal.links.facebook ? <a href={personal.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="social-brand facebook-brand" aria-hidden="true">f</span></a> : <span className="social-link-unavailable" title="Add your Facebook URL to personal.links.facebook" aria-label="Facebook URL not configured"><span className="social-brand facebook-brand" aria-hidden="true">f</span></span>}
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`} target="_blank" rel="noopener noreferrer" aria-label="Compose email to Shohan"><span className="social-brand gmail-brand" aria-hidden="true">M</span></a>
            </div>
            <div className="hero-mini-stats" aria-label="Requested portfolio statistics needing verification">
              <div><strong>2+</strong><span>Years experience</span></div>
              <div><strong>20+</strong><span>Projects</span></div>
              <div><strong>10+</strong><span>Client deals</span></div>
            </div>
          </div>
        </div>
        <div className="hero-visual reference-visual" aria-label="Abstract developer workspace">
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />
          <div className="visual-ring ring-three" />
          <div className="developer-card profile-card">
            <Image src="/herobanner.jpg" alt="Shohan Hossain Alfaz" fill priority sizes="(max-width: 760px) 88vw, 390px" className="profile-image" />
            <div className="developer-card-status"><i /> AVAILABLE FOR OPPORTUNITIES</div>
          </div>
          <div className="tech-chip chip-react"><span>⚛</span> React.js</div>
          <div className="tech-chip chip-next"><span>N</span> Next.js</div>
          <div className="tech-chip chip-ts"><span>TS</span> TypeScript</div>
        </div>
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

      <section className="section-wrap contact-banner">
        <div><p className="eyebrow"><span />Start a conversation</p><h2>Have a project in mind?</h2><p>Let&apos;s discuss how thoughtful web development can bring it to life.</p></div>
        <Link className="button button-primary" href="/contact">Contact Me →</Link>
      </section>
    </>
  );
}
