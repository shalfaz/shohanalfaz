import { activities, education, experience, learning } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="inner-page section-wrap">
      <header className="page-header"><p className="eyebrow"><span />About</p><h1>Developer, problem solver, <em>continuous learner.</em></h1><p>I build responsive, maintainable web experiences with a focus on practical products and clear user journeys.</p></header>
      <section className="about-intro"><article><span>Professional introduction</span><h2>Turning ideas into useful digital products.</h2><p>As a junior web developer, I work across modern frontend and full-stack technologies to build e-commerce and web applications. My approach combines clean implementation, thoughtful interface details, and reliable integration with APIs and databases.</p></article><aside><span>Current role</span><h3>{experience.role}</h3><p>{experience.company}</p><small>{experience.period} · {experience.location}</small></aside></section>
      <section className="content-section"><div className="section-heading"><p className="eyebrow"><span />Education</p><h2>Academic foundation</h2></div><article className="education-timeline"><span>{education.period}</span><div><h3>{education.degree}</h3><p>{education.institution}</p><small>{education.detail}</small></div></article></section>
      <section className="content-section"><div className="section-heading"><p className="eyebrow"><span />Leadership & activities</p><h2>Beyond the code</h2></div><div className="timeline-grid">{activities.map((item) => <article className="timeline-card" key={item.name}><span>{item.type}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div></section>
      <section className="content-section"><div className="section-heading"><p className="eyebrow"><span />Training & learning</p><h2>Continuous development</h2></div><div className="learning-grid">{learning.map((item) => <article key={item.name}><span>{item.status}</span><h3>{item.name}</h3><p>{item.provider}</p></article>)}</div></section>
    </div>
  );
}
