import Image from "next/image";
import { Reveal } from "@/src/components/Reveal";
import { projects } from "@/src/data/projects";
import { ArrowIcon } from "@/src/components/ArrowIcon";

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="portfolio-section project-section">
      <div className="site-container section-space">
        <Reveal className="section-grid">
          <p className="section-kicker section-index">04 / 08 — SELECTED WORK</p>
          <div className="section-main projects-intro">
            <h2 id="work-heading" className="section-title reveal-heading">Built to be <span className="heading-accent">used.</span></h2>
            <p className="section-copy mt-4 max-w-xl leading-7 text-[var(--muted)]">Two deployed applications bringing data science into practical, interactive software.</p>
          </div>
        </Reveal>
        <div className="portfolio-projects mt-10">
          {projects.map((project, index) => (
            <Reveal key={project.number} className={`portfolio-project project-${index + 1}`}>
              <div className="project-media">
                <a href={project.demoUrl ?? undefined} target="_blank" rel="noreferrer" tabIndex={project.demoUrl ? 0 : -1} aria-label={`Open live ${project.title} application`}>
                  {project.screenshot ? <Image src={project.screenshot} alt={project.screenshotAlt} fill sizes="(max-width: 900px) 100vw, 60vw" className="project-screenshot" /> : <div className="project-missing-image">APPLICATION SCREENSHOT</div>}
                  <span className="project-image-cue">OPEN APPLICATION ↗</span>
                </a>
                <span className="project-counter">{project.number} <i>/ 02</i></span>
              </div>
              <div className="project-information">
                <div className="project-titleline"><p className="project-category">{project.category}</p><span className="project-status"><i /> LIVE APPLICATION</span></div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <details className="project-details">
                  <summary>Explore capabilities <span aria-hidden="true">＋</span></summary>
                  <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </details>
                <div className="project-actions">
                  {project.demoUrl && <a className="button-link" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowIcon diagonal /></a>}
                  {project.repositoryUrl && <a className="button-link button-link-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
