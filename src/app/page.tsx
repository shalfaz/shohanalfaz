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
  skills,
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
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">shohan<span>.dev</span></span>
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
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
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
          alt={`${project.name} project preview placeholder`}
          width={900}
          height={480}
        />
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-title">{project.title}</p>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowIcon diagonal /></a>
          ) : <span className="link-placeholder">Live demo <span>coming soon</span></span>}
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
              <p className="eyebrow"><span />AVAILABLE FOR OPPORTUNITIES</p>
              <h1>Building the web,<br />with <span>purpose.</span></h1>
              <p className="hero-intro">
                Hey, I&apos;m <strong>{personal.name}</strong> — a {personal.role.toLowerCase()} shaping thoughtful,
                modern digital experiences from Dhaka, Bangladesh.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View projects <ArrowIcon /></a>
                <a className="button button-secondary" href={personal.cvDownloadUrl} download>
                  Download CV <span className="download-icon" aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-meta">
                <span><i className="status-dot" /> Open to learn &amp; collaborate</span>
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
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature." />
            <div className="about-grid">
              <div className="about-copy">
                <p className="about-lead">
                  I&apos;m a Computer Science student who loves turning ideas into <span>useful, well-crafted web experiences.</span>
                </p>
                <p>
                  Currently studying at the University of Liberal Arts Bangladesh (ULAB), I&apos;m growing my skills across
                  the full stack — from crisp, accessible interfaces to the systems that power them. Outside of web
                  development, I&apos;m exploring cybersecurity and how to build with care.
                </p>
                <a className="text-link" href="#contact">A little more about working together <ArrowIcon /></a>
              </div>
              <div className="about-stat-grid">
                <div className="stat-card"><span className="stat-index">01 / NOW</span><strong>Full-stack<br />development</strong><span>My main focus</span></div>
                <div className="stat-card"><span className="stat-index">02 / NEXT</span><strong>Cybersecurity<br />curiosity</strong><span>Learning in progress</span></div>
                <div className="stat-card stat-wide"><span className="stat-index">03 / BASED IN</span><strong>Dhaka, Bangladesh</strong><span>Studying at ULAB · CSE</span></div>
              </div>
            </div>
          </section>

          <section className="skills section-wrap section-block" id="skills">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Tools for the build."
              description="A growing, hands-on toolkit for building and shipping thoughtful web experiences."
            />
            <div className="skills-layout">
              <div className="skills-lead-card">
                <span className="skill-bracket">[ 01 — 15 ]</span>
                <div className="skill-orb" aria-hidden="true"><span>&lt;/&gt;</span></div>
                <h3>Curiosity is<br />part of the stack.</h3>
                <p>Learning, testing, and improving with every build.</p>
                <span className="skills-card-footer"><i /> CURRENTLY LEARNING</span>
              </div>
              <div className="skill-pills">
                {skills.map((skill, index) => (
                  <span className="skill-pill" key={skill}>
                    <span className="skill-count">{String(index + 1).padStart(2, "0")}</span>{skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="projects section-wrap section-block" id="projects">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="SELECTED WORK"
                title="Ideas, in progress."
                description="A few concepts and builds across marketplaces, e-commerce, and social impact."
              />
              <span className="projects-count">04 <span>PROJECTS</span></span>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </div>
          </section>

          <section className="experience section-wrap section-block" id="experience">
            <SectionHeading eyebrow="THE JOURNEY SO FAR" title="Learning by doing." />
            <div className="experience-grid">
              <div className="timeline-column">
                <h3 className="column-title"><span className="column-icon">◎</span> Education</h3>
                <article className="education-card">
                  <div className="education-top"><span className="education-logo">ULAB<span>.</span></span><span className="date-chip">{education.period}</span></div>
                  <p className="card-eyebrow">BACHELOR&apos;S DEGREE</p>
                  <h4>{education.degree}</h4>
                  <p className="muted-copy">{education.institution}</p>
                  <div className="grade-line"><span>{education.detail}</span><i /></div>
                </article>
                <h3 className="column-title activity-heading"><span className="column-icon">↗</span> Leadership &amp; volunteering</h3>
                <div className="activity-list">
                  {activities.map((activity) => (
                    <article className="activity-row" key={activity.name}>
                      <span className="activity-marker" />
                      <div><span className="activity-type">{activity.type}</span><h4>{activity.name}</h4><p>{activity.detail}</p></div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="learning-column">
                <h3 className="column-title"><span className="column-icon">✳</span> Training &amp; learning</h3>
                <div className="learning-list">
                  {learning.map((item, index) => (
                    <article className="learning-card" key={item.name}>
                      <span className="learning-index">0{index + 1}</span>
                      <div><h4>{item.name}</h4><p>{item.provider}</p></div>
                      <span className="learning-status">{item.status}</span>
                    </article>
                  ))}
                </div>
                <div className="learning-note"><span>↗</span><p>Always making room for the next thing to learn — especially where <strong>technology and trust</strong> meet.</p></div>
              </div>
            </div>
          </section>

          <section className="contact section-wrap section-block" id="contact">
            <div className="contact-panel">
              <div className="contact-glow" aria-hidden="true" />
              <div className="contact-copy">
                <p className="eyebrow"><span /> HAVE A GOOD ONE IN MIND?</p>
                <h2>Let&apos;s make<br />something <span>matter.</span></h2>
                <p>I&apos;m always happy to talk about web projects, ideas, or what I&apos;m learning. Drop me a line.</p>
                <a className="button button-primary contact-button" href={`mailto:${personal.email}`}>
                  Say hello <ArrowIcon diagonal />
                </a>
              </div>
              <div className="contact-details">
                <div><span className="detail-label">EMAIL</span><a href={`mailto:${personal.email}`}>{personal.email}</a></div>
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
          <a className="footer-brand" href="#home">shohan<span>.dev</span></a>
          <p>Designed &amp; built with care by Shohan Hossain Alfaz.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </>
  );
}
