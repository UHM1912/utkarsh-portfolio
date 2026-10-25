import { Reveal } from "@/src/components/Reveal";
import { ExploringLandscape } from "@/src/components/ExploringLandscape";

const topics = [
  { name: "Computer Vision", detail: "Images to insight" },
  { name: "Generative AI", detail: "Create, ideate, iterate" },
  { name: "AI Agents", detail: "Autonomous systems" },
  { name: "RAG", detail: "Knowledge at scale" },
  { name: "Document Intelligence", detail: "From documents to decisions" },
  { name: "Efficient AI", detail: "Smaller, faster, greener" },
  { name: "Data & Software Architecture", detail: "Scalable, reliable systems" },
];

function TopicIcon({ index }: { index: number }) {
  const shapes = [
    <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
    <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></>,
    <><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="12" cy="16" r="3"/><path d="m10 9.5 1 4m3-4-1 4"/></>,
    <><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
    <><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h7m-7 4h7"/></>,
    <><path d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z"/></>,
    <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 7.5 11 16m6-8.5L13 16M7 6h10"/></>,
  ];
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="topic-icon">{shapes[index]}</svg>;
}

function TopicTerrain({ index }: { index: number }) {
  const lift = [12, 4, 15, 7, 10, 2, 13][index];
  return (
    <svg className="topic-art" viewBox="0 0 110 62" fill="none" aria-hidden="true">
      {Array.from({ length: 6 }, (_, line) => {
        const base = 40 + line * 3;
        const peak = lift + line * .7;
        return <path key={line} d={`M2 ${base} C24 ${base - peak} 32 ${base - peak} 52 ${base - 5} S78 ${base + peak / 2} 108 ${base - 3}`} />;
      })}
      <path className="topic-art-grid" d="M14 5v47M38 5v47M62 5v47M86 5v47M3 18h104M3 33h104M3 48h104" />
      <circle cx={68 + index % 3 * 8} cy={29 - index % 2 * 5} r="1.5" />
    </svg>
  );
}

export function Currently() {
  return (
    <section id="currently" aria-labelledby="currently-heading" className="border-b border-white/10">
      <Reveal className="site-container section-space section-grid currently-layout">
        <p className="section-kicker font-mono text-[0.65rem] tracking-[0.22em] text-[#cbd4ae]">06 / 08 - NOW</p>
        <div className="section-main">
          <h2 id="currently-heading" className="section-title currently-heading reveal-heading tracking-[-0.055em]">Currently <span>exploring</span></h2>
          <div className="currently-copy mt-6">
            <p className="currently-description">Building with LLMs, data and real-world problems. Open to opportunities and interesting collaborations.</p>
            <ul className="topic-grid mt-5">
              {topics.map((topic, index) => (
                <li key={topic.name}>
                  <TopicTerrain index={index} />
                  <TopicIcon index={index} />
                  <span className="topic-name">{topic.name}</span>
                  <span className="topic-detail">{topic.detail}</span>
                  <span className="topic-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ExploringLandscape />
      </Reveal>
    </section>
  );
}
