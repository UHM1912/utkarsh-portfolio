import { experience } from "@/src/data/experience";
import { Reveal } from "@/src/components/Reveal";
import { ExperienceVisual } from "@/src/components/ExperienceVisual";

const capabilities = [
  { code: "01", title: "AI AGENT WORKFLOWS", subtitle: "LangChain / LangGraph", detail: "Tracing, logging, and performance optimization." },
  { code: "02", title: "INTELLIGENT SYSTEMS", subtitle: "ML / Deep Learning / Vision / NLP", detail: "Generative AI and retrieval-augmented generation." },
  { code: "03", title: "DATA PIPELINES", subtitle: "Apache Airflow", detail: "Internal technical knowledge sharing." },
];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="portfolio-section experience-section">
      <Reveal className="site-container section-space section-grid experience-layout">
        <div className="experience-side">
          <p className="section-kicker section-index">03 / 08 - EXPERIENCE</p>
          <ExperienceVisual />
        </div>
        <div className="section-main">
          <div className="experience-heading-row">
            <div><p className="eyebrow">PRACTICE / 01</p><h2 id="experience-heading" className="section-title reveal-heading">Building in the <span className="heading-accent">real world.</span></h2></div>
            <span className="experience-count">01 ROLE</span>
          </div>
          <div className="experience-timeline">
            {experience.map((entry) => (
              <article key={`${entry.title}-${entry.period}`} className="timeline-entry">
                <div className="timeline-marker" aria-hidden="true"><i /></div>
                <header className="experience-header">
                  <div><p className="experience-location">{entry.location}</p><h3 className="role-heading">{entry.title}</h3><p className="experience-org">{entry.organization}</p></div>
                  <p className="experience-period">{entry.period}</p>
                </header>
                <p className="experience-summary">{entry.detail}</p>
                <div className="capability-grid">
                  {capabilities.map((capability) => <article className="capability-card" key={capability.code}><span>{capability.code}</span><div><h4>{capability.title}</h4><p>{capability.subtitle}</p><small>{capability.detail}</small></div></article>)}
                </div>
                <details className="experience-details">
                  <summary>Technical contributions <span aria-hidden="true">+</span></summary>
                  <ul>{entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </details>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
