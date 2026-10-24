import { personal } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <div className="inner-page section-wrap">
      <header className="page-header"><p className="eyebrow"><span />Contact</p><h1>Let&apos;s build something <em>meaningful.</em></h1><p>For development opportunities, project conversations, or a professional introduction, reach out by email or through my connected profiles.</p></header>
      <section className="contact-layout">
        <article className="contact-main"><span>Primary contact</span><h2>Start a conversation.</h2><p>The most reliable way to reach me is by email. I&apos;m based in Dhaka, Bangladesh and open to relevant web development opportunities.</p><a className="button button-primary" href={`mailto:${personal.email}`}>Email Shohan →</a></article>
        <aside className="contact-details"><div><span>Email</span><a href={`mailto:${personal.email}`}>{personal.email}</a></div><div><span>Location</span><p>{personal.location}</p></div><div><span>Professional profiles</span><div className="contact-social"><a href={personal.links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></aside>
      </section>
    </div>
  );
}
