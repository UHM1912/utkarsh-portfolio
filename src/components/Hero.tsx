import { InfinityField } from "@/src/components/InfinityField";
import { siteLinks } from "@/src/data/site";
import { ArrowIcon } from "@/src/components/ArrowIcon";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="hero scientific-grid border-b border-white/10">
      <div className="site-container hero-stage">
        <div className="hero-copy">
          <p className="hero-kicker entrance">UM <span aria-hidden="true">&infin;</span><i /> PORTFOLIO / 2026</p>
          <div className="mt-7 max-w-5xl">
            <h1 id="hero-heading" className="hero-name text-balance font-medium leading-[0.82] tracking-[-0.075em]"><span>UTKARSH</span><span>MISRA</span></h1>
            <p className="hero-discipline entrance-delay">DATA SCIENCE <b>/</b> AI-ML</p>
            <p className="hero-intro entrance-delay">Building intelligent systems through code, data &amp; curiosity.</p>
          </div>
          <div className="hero-actions">
            <a href="#work" className="hero-primary">Explore my work <ArrowIcon /></a>
            {siteLinks.resume && <a href={siteLinks.resume} target="_blank" rel="noreferrer" className="hero-secondary">Resume <ArrowIcon diagonal /></a>}
          </div>
          <div className="hero-footnote"><span>STATISTICS</span><i /> <span>EXPERIMENTATION</span><i /> <span>ENGINEERING</span></div>
        </div>
        <div className="hero-visual"><InfinityField /><p className="hero-mantra">Trying to reach <em>infinity</em></p></div>
        <span className="hero-side-note" aria-hidden="true">INTELLIGENCE, ENGINEERED.</span>
      </div>
    </section>
  );
}
