import { learning } from "@/data/portfolio";

export default function CertificatesPage() {
  return (
    <div className="inner-page section-wrap">
      <header className="page-header"><p className="eyebrow"><span />Certificates & training</p><h1>Learning documented <em>with transparency.</em></h1><p>No credential images are currently stored in this portfolio. The following are clearly identified training entries from my CV.</p></header>
      <div className="certificate-grid">{learning.map((item, index) => <article className="certificate-card" key={item.name}><div className="certificate-mark">SHA <span>TRAINING</span></div><div><span>Training entry 0{index + 1}</span><h2>{item.name}</h2><p>{item.provider}</p><small>{item.status}</small></div></article>)}</div>
    </div>
  );
}
