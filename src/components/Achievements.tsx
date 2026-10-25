import { achievements } from "@/src/data/achievements";
import { Reveal } from "@/src/components/Reveal";

export function Achievements() {
  return (
    <section aria-labelledby="highlights-heading" className="border-b border-white/10">
      <Reveal className="site-container section-space highlights-layout">
        <div className="highlights-journey-column">
          <p className="section-kicker font-mono text-[0.65rem] tracking-[0.22em] text-[#cbd4ae]">07 / 08 - HIGHLIGHTS</p>
          <JourneyVisual />
        </div>
        <div className="highlights-content">
          <h2 id="highlights-heading" className="section-title reveal-heading tracking-[-0.04em]">Along the <span className="heading-accent">way.</span></h2>
          <ul className="highlights-list">
            {achievements.map((achievement) => (
              <li key={achievement.title} className="highlight-row">
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function JourneyVisual() {
  return (
    <svg className="journey-visual" viewBox="0 0 540 520" role="img" aria-labelledby="journey-title journey-description">
      <title id="journey-title">Learning and career journey</title>
      <desc id="journey-description">An animated orbital timeline from Statistics in 2020 through AI Engineering in 2026, with Data Science and Research milestones.</desc>
      <defs>
        <radialGradient id="journey-sphere"><stop offset="0" stopColor="#dce7a1" stopOpacity=".16"/><stop offset=".74" stopColor="#a9b879" stopOpacity=".07"/><stop offset="1" stopColor="#a9b879" stopOpacity=".015"/></radialGradient>
        <linearGradient id="journey-route-gradient" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dce7a1" stopOpacity=".2"/><stop offset=".48" stopColor="#dce7a1" stopOpacity=".9"/><stop offset="1" stopColor="#dce7a1" stopOpacity=".32"/></linearGradient>
        <clipPath id="journey-sphere-clip"><circle cx="156" cy="265" r="105"/></clipPath>
        <filter id="journey-glow" x="-200%" y="-200%" width="400%" height="400%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g className="journey-orbit-field" fill="none" stroke="#a8b879" strokeWidth=".7">
        <ellipse className="journey-orbit journey-orbit-one" cx="190" cy="264" rx="218" ry="116" transform="rotate(-26 190 264)"/>
        <ellipse className="journey-orbit journey-orbit-two" cx="190" cy="264" rx="205" ry="164" transform="rotate(34 190 264)"/>
        <ellipse className="journey-orbit journey-orbit-three" cx="190" cy="264" rx="232" ry="78" transform="rotate(12 190 264)"/>
        <path className="journey-orbit journey-orbit-four" d="M17 414C103 356 106 165 235 94S405 78 500 171" strokeDasharray="1 8"/>
      </g>
      <g className="journey-globe">
        <circle cx="156" cy="265" r="105" fill="url(#journey-sphere)" stroke="#bdc98a" strokeOpacity=".48" strokeWidth=".8"/>
        <g className="journey-globe-grid" clipPath="url(#journey-sphere-clip)" fill="none" stroke="#dce7a1" strokeOpacity=".22" strokeWidth=".55">
          <ellipse cx="156" cy="265" rx="103" ry="34"/><ellipse cx="156" cy="265" rx="103" ry="65"/><ellipse cx="156" cy="265" rx="103" ry="88"/>
          <ellipse cx="156" cy="265" rx="33" ry="103"/><ellipse cx="156" cy="265" rx="65" ry="103"/><ellipse cx="156" cy="265" rx="88" ry="103"/>
          <path d="M50 265h212M156 159v212" strokeOpacity=".13"/><path d="M63 190l182 151M79 346l150-164M52 231l207 67M79 299l150-66" strokeOpacity=".13" strokeDasharray="1 4"/>
        </g>
        <circle className="journey-globe-core" cx="156" cy="265" r="2.5"/>
      </g>
      <path className="journey-route" pathLength="1" d="M283 56C280 103 298 131 327 163S359 221 364 264 378 334 354 373 328 427 292 472" fill="none" stroke="url(#journey-route-gradient)" strokeWidth="1.2"/>
      <path className="journey-route-trace" d="M283 56C280 103 298 131 327 163S359 221 364 264 378 334 354 373 328 427 292 472" fill="none" stroke="#dce7a1" strokeWidth=".8"/>
      <g className="journey-points" fill="#dce7a1" filter="url(#journey-glow)"><circle cx="88" cy="151" r="2.1"/><circle cx="46" cy="307" r="3.2"/><circle cx="233" cy="93" r="1.7"/><circle cx="91" cy="394" r="2.2"/><circle cx="245" cy="411" r="1.7"/><circle cx="427" cy="346" r="2.4"/><circle cx="475" cy="205" r="3.5"/><circle cx="52" cy="438" r="1.7"/></g>
      <circle className="journey-particle" r="2.4"><animateMotion dur="19s" repeatCount="indefinite" path="M25 385C98 332 128 189 239 116S403 103 486 183"/></circle>
      <circle className="journey-particle journey-particle-two" r="1.9"><animateMotion dur="25s" repeatCount="indefinite" path="M14 162C94 206 134 347 240 385S395 350 504 280"/></circle>
      <g className="journey-milestone milestone-statistics"><circle className="journey-node-ring" cx="283" cy="78" r="24"/><circle className="journey-node" cx="283" cy="78" r="2.5"/><g className="journey-icon" transform="translate(271 66)"><path d="M2 21V13h4v8M9 21V7h4v14M16 21V2h4v19M0 22h22"/></g><text className="journey-date" x="317" y="54">2020 — 2023</text><text className="journey-title" x="317" y="77">Statistics</text><text className="journey-copy" x="317" y="96"><tspan x="317">Built foundations in</tspan><tspan x="317" dy="14">statistics and probability.</tspan></text></g>
      <g className="journey-milestone milestone-data"><circle className="journey-node-ring" cx="329" cy="181" r="24"/><circle className="journey-node" cx="329" cy="181" r="2.5"/><g className="journey-icon" transform="translate(317 169)"><ellipse cx="12" cy="4" rx="9" ry="3.5"/><path d="M3 4v5c0 2 4 3.5 9 3.5S21 11 21 9V4M3 9v5c0 2 4 3.5 9 3.5S21 16 21 14V9M3 14v4c0 2 4 3.5 9 3.5S21 20 21 18v-4"/></g><text className="journey-date" x="369" y="157">2023 — 2025</text><text className="journey-title" x="369" y="181">Data Science</text><text className="journey-copy" x="369" y="200"><tspan x="369">Applied ML and software</tspan><tspan x="369" dy="14">to real-world problems.</tspan></text></g>
      <g className="journey-milestone milestone-research"><circle className="journey-node-ring" cx="364" cy="285" r="24"/><circle className="journey-node" cx="364" cy="285" r="2.5"/><g className="journey-icon" transform="translate(352 273)"><path d="M5 1h9l5 5v17H5zM14 1v6h5M8 12h8M8 16h8M8 20h6"/></g><text className="journey-date" x="404" y="261">2025 — 2026</text><text className="journey-title" x="404" y="285">Research</text><text className="journey-copy" x="404" y="304"><tspan x="404">Exploring efficient and</tspan><tspan x="404" dy="14">intelligent systems.</tspan></text></g>
      <g className="journey-milestone milestone-engineering"><circle className="journey-node-ring" cx="310" cy="415" r="24"/><circle className="journey-node" cx="310" cy="415" r="2.5"/><g className="journey-icon" transform="translate(298 403)"><path d="M12 1 22 6.5v11L12 23 2 17.5v-11zM2 6.5 12 12l10-5.5M12 12v11M7 4l10 5"/></g><text className="journey-date" x="350" y="393">2026 — ONWARD</text><text className="journey-title" x="350" y="417">AI Engineering</text><text className="journey-copy" x="350" y="436"><tspan x="350">Building useful</tspan><tspan x="350" dy="14">products with AI.</tspan></text></g>
      <g className="journey-label journey-label-learn"><text x="19" y="207">LEARN</text><path d="M20 219h16"/></g><g className="journey-label journey-label-build"><text x="463" y="115">BUILD</text><path d="M464 127h16"/></g><g className="journey-label journey-label-explore"><text x="20" y="452">EXPLORE</text><path d="M21 464h16"/></g><g className="journey-label journey-label-impact"><text x="464" y="329">IMPACT</text><path d="M465 341h16"/></g>
    </svg>
  );
}
