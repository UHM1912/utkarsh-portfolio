import { readdirSync } from "node:fs";
import path from "node:path";
import { research } from "@/src/data/research";
import { Reveal } from "@/src/components/Reveal";

function loadMarsImages() {
  try {
    return readdirSync(path.join(process.cwd(), "public", "research", "mars"))
      .filter((file) => /\.(avif|jpe?g|png|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export function Research() {
  const marsImages = loadMarsImages();

  return (
    <section id="research" aria-labelledby="research-heading" className="border-b border-white/10">
      <Reveal className="site-container section-space research-section">
        <header className="research-heading-row">
          <div>
            <p className="section-kicker font-mono text-[0.65rem] tracking-[0.22em] text-[#cbd4ae]">05 / 08 - RESEARCH</p>
            <h2 id="research-heading" className="section-title reveal-heading mt-3 tracking-[-0.04em]">Questions worth <span className="heading-accent">investigating.</span></h2>
            <p className="research-intro mt-3 max-w-2xl leading-7 text-[#a5a69f]">Research as a way to examine what a system can do, and how it can do it better.</p>
          </div>
          <span className="research-index" aria-hidden="true">FIELD NOTES <i> / </i> 02</span>
        </header>

        <div className="research-grid">
          {research.map((entry, index) => (
            <article key={entry.number} className="research-card" style={{ "--research-delay": `${index * 140}ms` } as React.CSSProperties}>
              <div className="research-card-top">
                <p className="research-number">{entry.number}<span> / 02</span></p>
                <p className="research-marker"><i aria-hidden="true" />{entry.marker}</p>
              </div>
              <h3>{entry.title}</h3>
              <p className="research-description">{entry.description}</p>
              <ResearchVisual title={entry.title} marsImages={marsImages} />
              <dl className="research-metrics">
                {entry.metrics.map((metric) => {
                  const splitAt = metric.indexOf(" ");
                  return <div key={metric}><dt>{splitAt > -1 ? metric.slice(splitAt + 1) : "Result"}</dt><dd>{splitAt > -1 ? metric.slice(0, splitAt) : metric}</dd></div>;
                })}
              </dl>
              <ul className="research-tags" aria-label="Research technologies">
                {(entry.title.startsWith("Mars") ? ["CNN", "EfficientNet-B3", "Computer Vision"] : ["ResNet18", "INT8 QAT", "Energy Efficiency"]).map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <details className="research-details">
                <summary>View research notes <span aria-hidden="true">+</span></summary>
                <p>{entry.notes}</p>
              </details>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function ResearchVisual({ title, marsImages }: { title: string; marsImages: string[] }) {
  if (title.startsWith("Mars")) {
    return (
      <div className="research-visual mars-visual" aria-label={marsImages.length ? "Mars landscape image gallery" : "Abstract contour visualization representing Mars terrain classification"}>
        <div className="mars-visual-meta"><span>{marsImages.length ? "MARS TERRAIN / IMAGE REFERENCES" : "CONTOUR VISUALIZATION / 24 CLASSES"}</span><span>{marsImages.length ? `01—${String(marsImages.length).padStart(2, "0")}` : "01—05"}</span></div>
        <div className="mars-sample-grid" role="group" aria-label={marsImages.length ? "Supplied Mars landscape reference images" : "Abstract terrain contour samples"}>
          {marsImages.length ? marsImages.map((file, index) => (
            <div key={file} className={`mars-sample mars-photo mars-photo-${index + 1}`} role="img" aria-label={`Mars terrain reference ${index + 1}`} style={{ backgroundImage: `url("/research/mars/${encodeURIComponent(file)}")` }} />
          )) : [0, 1, 2, 3, 4].map((sample) => (
            <svg key={sample} viewBox="0 0 100 72" className={`mars-sample mars-sample-${sample + 1}`} aria-hidden="true">
              <defs><linearGradient id={`mars-bg-${sample}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#76634a" /><stop offset="1" stopColor="#292922" /></linearGradient></defs>
              <rect width="100" height="72" fill={`url(#mars-bg-${sample})`} />
              <path d={`M0 ${42 + sample * 2} Q24 ${10 + sample * 5} 48 ${38 - sample * 3} T100 ${28 + sample * 4} V72 H0Z`} fill="#a28a67" opacity=".4" />
              <path d={`M0 ${54 - sample} Q25 ${30 + sample * 2} 52 ${50 + sample} T100 ${43 - sample * 2}`} fill="none" stroke="#d6c49b" strokeOpacity=".55" strokeWidth=".8" />
              <path d={`M0 ${61 - sample * 2} Q28 ${42 + sample} 56 ${59 - sample} T100 ${51 + sample}`} fill="none" stroke="#d6c49b" strokeOpacity=".3" strokeWidth=".65" />
              <circle cx={18 + sample * 13} cy={18 + sample * 4} r="1.1" fill="#e0d7b2" opacity=".68" />
              <path d={`M${9 + sample * 5} 0L${21 + sample * 8} 72 M${58 - sample * 3} 0L${48 + sample * 6} 72`} stroke="#171a17" strokeOpacity=".2" strokeWidth=".7" />
            </svg>
          ))}
        </div>
        <div className="mars-visual-foot"><span>CONTOUR ANALYSIS</span><span>IMAGE CLASSIFICATION <b>↗</b></span></div>
      </div>
    );
  }

  return (
    <div className="research-visual quant-visual" aria-label="Illustration comparing 32-bit and 8-bit model precision">
      <div className="quant-side quant-fp"><span className="quant-label">FP32 <i>32 BIT</i></span><div className="quant-grid" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i} style={{ "--cell-tone": `${0.18 + ((i * 17 + 31) % 33) / 100}` } as React.CSSProperties} />)}</div><span className="quant-caption">FULL PRECISION</span></div>
      <div className="quant-convert" aria-hidden="true"><span>QUANTIZE</span><b>→</b></div>
      <div className="quant-side quant-int"><span className="quant-label">INT8 <i>8 BIT</i></span><div className="quant-grid" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i} style={{ "--cell-tone": `${0.2 + ((i * 11 + 9) % 40) / 100}` } as React.CSSProperties} />)}</div><span className="quant-caption">COMPACT INFERENCE</span></div>
      <span className="quant-signal" aria-hidden="true" />
    </div>
  );
}
