import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { activities, education, experiences, personal } from "@/data/portfolio";

const sortedExperiences = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));
const sortedEducation = [...education].sort((a, b) => b.startYear - a.startYear);

export default function AboutPage() {
  return (
    <div className="inner-page section-wrap about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-profile">
          <div className="about-profile-glow" aria-hidden="true" />
          <div className="about-profile-card">
            <Image
              src="/herobanner.jpg"
              alt="Shohan Hossain Alfaz"
              fill
              priority
              sizes="(max-width: 760px) 80vw, 400px"
              className="about-profile-image"
            />
            <div className="about-profile-caption">
              <span>Based in</span>
              <strong><FaLocationDot aria-hidden="true" /> {personal.location}</strong>
            </div>
          </div>
          <div className="about-tech-badge about-tech-react"><SiReact aria-hidden="true" /> React.js</div>
          <div className="about-tech-badge about-tech-next"><SiNextdotjs aria-hidden="true" /> Next.js</div>
          <div className="about-tech-badge about-tech-typescript"><SiTypescript aria-hidden="true" /> TypeScript</div>
        </div>

        <div className="about-hero-copy">
          <p className="eyebrow"><span />About me</p>
          <h1 id="about-title">Shohan Hossain Alfaz</h1>
          <p className="about-hero-role">Web Developer <span>·</span> Building for the web</p>
          <p>
            I&apos;m a Web Developer focused on building responsive applications and thoughtful digital experiences. Working across React, Next.js, and TypeScript, I bring together polished frontend interfaces with full-stack features, APIs, and database integrations.
          </p>
          <p>
            My work includes e-commerce platforms, where I contribute to product discovery, search, shopping flows, and the systems behind them. I care about clear, maintainable implementation and interfaces that make complex tasks feel straightforward. I&apos;m also developing my knowledge of cybersecurity and secure application practices.
          </p>
          <div className="about-hero-actions">
            <Link className="button button-primary" href="/contact">Contact me <span aria-hidden="true">→</span></Link>
            <a className="button button-secondary" href={personal.cvDownloadUrl} download>Download CV <span aria-hidden="true">↓</span></a>
          </div>
          <div className="about-quick-facts">
            <div><span>Role</span><strong>Web Developer</strong></div>
            <div><span>Focus</span><strong>Applications &amp; e-commerce</strong></div>
            <div><span>Location</span><strong>{personal.location}</strong></div>
          </div>
        </div>
      </section>

      <section className="about-trajectory" aria-label="Professional experience and education">
        <div className="about-trajectory-column">
          <header className="about-section-heading">
            <p className="eyebrow"><span />Career trajectory</p>
            <h2>Professional Experience</h2>
            <p>Hands-on work building and improving real-world web products.</p>
          </header>
          <div className="about-timeline about-timeline-experience">
            {sortedExperiences.map((item) => (
              <article className="about-timeline-entry" key={`${item.company}-${item.startDate}`}>
                <span className="about-timeline-milestone" aria-hidden="true" />
                <div className="about-timeline-card">
                  <div className="about-timeline-card-heading">
                    <span className="about-timeline-icon" aria-hidden="true"><FaBriefcase /></span>
                    <p className="about-timeline-date">{item.period}</p>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="about-timeline-institution">{item.company} <span>·</span> {item.project}</p>
                  <p className="about-timeline-description">{item.detail}</p>
                  <ul className="about-timeline-tags" aria-label="Technologies">
                    {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-trajectory-column">
          <header className="about-section-heading">
            <p className="eyebrow"><span />Education</p>
            <h2>Academic Foundation</h2>
            <p>A chronological record of academic study and qualifications.</p>
          </header>
          <div className="about-timeline about-timeline-education">
            {sortedEducation.map((item) => (
              <article className={`about-timeline-entry${item.current ? " is-current" : ""}`} key={item.institution}>
                <span className="about-timeline-milestone" aria-hidden="true" />
                <div className="about-timeline-card">
                  <div className="about-timeline-card-heading">
                    <span className="about-timeline-icon" aria-hidden="true"><FaGraduationCap /></span>
                    <p className="about-timeline-date">{item.duration}</p>
                  </div>
                  <h3>{item.institution}</h3>
                  <p className="about-timeline-institution">{item.degree}</p>
                  <p className="about-timeline-grade">{item.grade}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section about-activities-section">
        <div className="section-heading">
          <p className="eyebrow"><span />Leadership &amp; activities</p>
          <h2>Beyond the code</h2>
        </div>
        <div className="timeline-grid">
          {activities.map((item) => (
            <article className="timeline-card" key={item.name}>
              <span>{item.type}</span>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
