import Image from "next/image";
import { InfinityField } from "@/src/components/InfinityField";
import { Reveal } from "@/src/components/Reveal";

const expertise = ["Machine Learning", "Generative AI", "AI Agents", "Data Engineering"];

const education = [
  { years: "2020–2023", degree: "B.Sc. Statistics", school: "University of Lucknow" },
  { years: "2024–2026", degree: "M.Sc. Data Science", school: "CHRIST University, Bengaluru" },
];

function EducationMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="education-icon">
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.3v4.2c2.8 2.2 7.2 2.2 10 0v-4.2M21 9v6" />
    </svg>
  );
}

export function Introduction() {
  return (
    <section id="about" aria-labelledby="about-heading" className="portfolio-section about-section">
      <Reveal className="site-container section-space section-grid">
        <p className="section-kicker section-index">02 / 08 — ABOUT</p>
        <div className="section-main about-layout">
          <div className="about-copy">
            <h2 id="about-heading" className="section-title reveal-heading">
              From statistics to <span>intelligent systems.<i aria-hidden="true" /></span>
            </h2>
            <p className="section-copy about-bio">
              I&apos;m an AI/ML engineer with a background in statistics and data science, interested in building systems that turn complex problems into useful, real-world solutions.
            </p>
            <div className="expertise-list" aria-label="Areas of expertise">
              {expertise.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="education-list" aria-label="Education">
              {education.map((item) => (
                <article className="education-item" key={item.degree}>
                  <EducationMark />
                  <span className="education-years">{item.years}</span>
                  <strong>{item.degree}</strong>
                  <small>{item.school}</small>
                </article>
              ))}
            </div>
          </div>
          <figure className="portrait-figure">
            <InfinityField />
            <div className="portrait-aura" aria-hidden="true"><span>&infin;</span></div>
            <div className="portrait-wrap">
              <Image src="/utkarsh-misra-portrait.png" alt="Portrait of Utkarsh Misra" width={440} height={567} priority unoptimized className="portrait-image" />
            </div>
            <span className="portrait-note" aria-hidden="true">CURIOSITY<br />BUILDS<br />BETTER<br />SYSTEMS<i /></span>
            <svg className="portrait-signature" viewBox="0 0 300 72" aria-hidden="true"><text x="4" y="48">Utkarsh Misra</text></svg>
          </figure>
        </div>
        <a href="#experience" className="about-scroll" aria-label="Scroll to explore">
          <i className="scroll-dot" aria-hidden="true" /><span>SCROLL<br />TO EXPLORE</span><b aria-hidden="true">↓</b>
        </a>
        <div className="about-footnote">
          <span className="about-footnote-label">THOUGHT TO PRACTICE</span>
          <p>Turning data, ideas and domain problems into <span>impactful solutions.</span></p>
        </div>
      </Reveal>
    </section>
  );
}
