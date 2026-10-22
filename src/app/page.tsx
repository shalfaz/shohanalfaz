"use client";

import { useState } from "react";
import Image from "next/image";
import { MatrixBackground } from "@/components/matrix-background";
import {
  activities,
  education,
  learning,
  navigation,
  personal,
  projects,
  skillGroups,
} from "@/data/portfolio";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label={`${personal.name}, home`}>
          <span className="brand-name">ShohanAlfaz</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          className="project-image"
          src={project.image}
          alt={`${project.name} illustrative preview placeholder, not a project screenshot`}
          width={900}
          height={480}
        />
        <span className="project-number">0{index + 1}</span>
        <span className="project-preview-label">Illustrative preview</span>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-title">{project.title}</p>
        <p className="project-description">{project.description}</p>
        {project.technologies.length > 0 ? (
          <ul className="tag-list" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        ) : <p className="project-stack-placeholder">Verified technology stack to be added</p>}
        <div className="project-links">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowIcon diagonal /></a>
          ) : <span className="link-placeholder">Live demo <span>add link</span></span>}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
          ) : <span className="link-placeholder">GitHub <span>add link</span></span>}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <MatrixBackground />
      <div className="site-shell">
        <SiteHeader />
        <main>
          <section className="hero section-wrap" id="home">
            <div className="hero-copy">
              <p className="eyebrow"><span />WELCOME TO MY DIGITAL SPACE</p>
              <h1 className="hero-name">
                <span className="hero-name-line">{personal.name.split(" ").slice(0, 1).join(" ")}</span>
                <span className="hero-name-accent">
                  {personal.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="hero-role">{personal.role}</p>
              <p className="hero-intro">
                I build responsive web applications and e-commerce experiences using React.js, Next.js, and TypeScript.
                I enjoy solving practical problems and creating clean, meaningful digital experiences.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View Projects <ArrowIcon /></a>
                <a className="button button-secondary" href={personal.cvDownloadUrl} download="Shohan_Hossain_Alfaz_CV.pdf">
                  Download CV <span className="download-icon" aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-meta">
                <span><i className="status-dot" /> Web development · cybersecurity learning</span>
                <span className="meta-divider" />
                <span>ULAB · CSE</span>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-crosshair crosshair-one">+</div>
              <div className="hero-crosshair crosshair-two">+</div>
              <div className="hero-code-card">
                <div className="code-card-top"><span /><span /><span /><b>alfaz.ts</b></div>
                <div className="code-lines">
                  <p><span className="line-no">01</span><span className="code-key">const</span> developer = &#123;</p>
                  <p><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-value">&quot;Shohan&quot;</span>,</p>
                  <p><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-value">&quot;the web&quot;</span>,</p>
                  <p><span className="line-no">04</span>&nbsp;&nbsp;curiosity: <span className="code-blue">Infinity</span>,</p>
                  <p><span className="line-no">05</span>&nbsp;&nbsp;build: () =&gt; <span className="code-key">ship</span>()</p>
                  <p><span className="line-no">06</span>&#125;;<span className="cursor-block" /></p>
                </div>
                <div className="code-card-footer"><span /> BUILDING WHAT&apos;S NEXT</div>
              </div>
              <div className="floating-chip chip-top">{"< />"} <span>clean code</span></div>
              <div className="floating-chip chip-bottom"><span className="chip-spark">✳</span> always learning</div>
            </div>
            <a href="#about" className="scroll-cue"><span />SCROLL TO EXPLORE</a>
          </section>

          <section className="about section-wrap section-block" id="about">
            <SectionHeading eyebrow="BEYOND THE BUILD" title="A little about me." />
            <div className="about-grid">
              <div className="about-copy">
                <p className="about-lead">
                  I&apos;m a developer focused on turning ideas into <span>useful, well-crafted web experiences.</span>
                </p>
                <p>
                  I enjoy building for the web across frontend and full-stack development, with a particular interest in
                  clean interfaces and e-commerce. I&apos;m also exploring cybersecurity as part of my ongoing learning.
                </p>
              </div>
              <div className="about-stat-grid">
                <div className="stat-card"><span className="stat-index">01 / FOCUS</span><strong>Web application<br />development</strong><span>Primary professional focus</span></div>
                <div className="stat-card"><span className="stat-index">02 / LEARNING</span><strong>Cybersecurity</strong><span>Ongoing interest</span></div>
                <div className="stat-card stat-wide"><span className="stat-index">03 / BASED IN</span><strong>Dhaka, Bangladesh</strong><span>University of Liberal Arts Bangladesh</span></div>
              </div>
            </div>

            <div className="about-subsections">
              <section className="about-subsection">
                <div className="subsection-heading">
                  <p className="eyebrow"><span />MY TOOLKIT</p>
                  <h3>Technical skills</h3>
                </div>
                <div className="skill-groups">
                  {skillGroups.map((group) => (
                    <article className="skill-group" key={group.name}>
                      <h4>{group.name}</h4>
                      <ul className="tag-list" aria-label={`${group.name} skills`}>
                        {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className="about-subsection">
                <div className="subsection-heading">
                  <p className="eyebrow"><span />EDUCATION</p>
                  <h3>Learning with purpose.</h3>
                </div>
                <article className="education-card">
                  <div className="education-top">
                    <span className="education-logo">ULAB<span>.</span></span>
                    <span className="date-chip">{education.period}</span>
                  </div>
                  <p className="card-eyebrow">BACHELOR&apos;S DEGREE</p>
                  <h4>{education.degree}</h4>
                  <p className="muted-copy">{education.institution}</p>
                  <div className="grade-line"><span>{education.detail}</span><i /></div>
                </article>
              </section>

              <section className="about-subsection">
                <div className="subsection-heading">
                  <p className="eyebrow"><span />AREAS I CAN SUPPORT</p>
                  <h3>Services</h3>
                </div>
                <div className="services-grid">
                  <article className="service-card">
                    <span className="service-index">01 / WEB</span>
                    <h3>Responsive websites</h3>
                    <p>Mobile-friendly websites with clear, considered layouts.</p>
                  </article>
                  <article className="service-card">
                    <span className="service-index">02 / UI</span>
                    <h3>Frontend development</h3>
                    <p>Interactive interfaces built with modern frontend tools.</p>
                  </article>
                  <article className="service-card">
                    <span className="service-index">03 / APP</span>
                    <h3>Basic full-stack apps</h3>
                    <p>Web application foundations across frontend and backend.</p>
                  </article>
                </div>
              </section>

              <div className="experience-grid about-subsection">
                <section className="timeline-column">
                  <div className="subsection-heading">
                    <p className="eyebrow"><span />COMMUNITY</p>
                    <h3>Experience &amp; activities</h3>
                  </div>
                  <div className="activity-list">
                    {activities.map((activity) => (
                      <article className="activity-row" key={activity.name}>
                        <span className="activity-marker" />
                        <div>
                          <span className="activity-type">{activity.type}</span>
                          <h4>{activity.name}</h4>
                          {activity.detail && <p>{activity.detail}</p>}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
                <section className="learning-column">
                  <div className="subsection-heading">
                    <p className="eyebrow"><span />ALWAYS LEARNING</p>
                    <h3>Training &amp; learning</h3>
                  </div>
                  <div className="learning-list">
                    {learning.map((item, index) => (
                      <article className="learning-card" key={item.name}>
                        <span className="learning-index">0{index + 1}</span>
                        <div><h4>{item.name}</h4><p>{item.provider}</p></div>
                        <span className="learning-status">{item.status}</span>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section className="projects section-wrap section-block" id="projects">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="SELECTED WORK"
                title="Ideas, in progress."
                description="Four web projects across marketplaces, nonprofit platforms, and e-commerce."
              />
              <span className="projects-count">04 <span>PROJECTS</span></span>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </div>
          </section>

          <section className="contact section-wrap section-block" id="contact">
            <div className="contact-panel">
              <div className="contact-glow" aria-hidden="true" />
              <div className="contact-copy">
                <p className="eyebrow"><span /> HAVE A GOOD ONE IN MIND?</p>
                <h2>Let&apos;s make<br />something <span>matter.</span></h2>
                <p>For web development opportunities, project conversations, or a quick hello, send me a message.</p>
                {personal.email
                  ? <a className="button button-primary contact-button" href={`mailto:${personal.email}`}>Say hello <ArrowIcon diagonal /></a>
                  : <span className="button button-primary button-disabled" aria-disabled="true">Add email to enable contact</span>}
              </div>
              <div className="contact-details">
                <div>
                  <span className="detail-label">EMAIL</span>
                  {personal.email
                    ? <a href={`mailto:${personal.email}`}>{personal.email}</a>
                    : <span className="contact-placeholder">Add your email in portfolio.ts</span>}
                </div>
                <div><span className="detail-label">LOCATION</span><p>{personal.location}</p></div>
                <div className="social-links">
                  {personal.links.github
                    ? <a href={personal.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH <ArrowIcon diagonal /></a>
                    : <span className="social-placeholder" title="Add your GitHub URL in src/data/portfolio.ts" aria-label="GitHub link not set">GH</span>}
                  {personal.links.linkedin
                    ? <a href={personal.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in <ArrowIcon diagonal /></a>
                    : <span className="social-placeholder" title="Add your LinkedIn URL in src/data/portfolio.ts" aria-label="LinkedIn link not set">in</span>}
                  {personal.links.portfolio
                    ? <a href={personal.links.portfolio} target="_blank" rel="noreferrer" aria-label="Portfolio">↗ <ArrowIcon diagonal /></a>
                    : <span className="social-placeholder" title="Add your portfolio URL in src/data/portfolio.ts" aria-label="Portfolio link not set">↗</span>}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer section-wrap">
          <a className="footer-brand" href="#home">ShohanAlfaz</a>
          <p>Designed &amp; built with care by Shohan Hossain Alfaz.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </>
  );
}
