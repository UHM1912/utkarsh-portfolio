"use client";

import type { PointerEvent } from "react";

function contourPath(level: number) {
  const points = Array.from({ length: 23 }, (_, index) => {
    const x = 12 + index * 22.5;
    const lowerRidge = 42 * Math.exp(-(((x - 126) / 52) ** 2));
    const mainRidge = 118 * Math.exp(-(((x - 360) / 78) ** 2));
    const farRidge = 52 * Math.exp(-(((x - 505) / 42) ** 2));
    const y = 276 - level * 8.5 - lowerRidge - mainRidge - farRidge + 4 * Math.sin(x / 42 + level * .38);
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  });
  return points.join(" ");
}

export function ExploringLandscape() {
  function move(event: PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--land-x", `${((event.clientX - rect.left) / rect.width - .5) * 10}px`);
    event.currentTarget.style.setProperty("--land-y", `${((event.clientY - rect.top) / rect.height - .5) * 8}px`);
    const pointX = ((event.clientX - rect.left) / rect.width) * 520;
    const pointY = ((event.clientY - rect.top) / rect.height) * 360;
    event.currentTarget.querySelectorAll<SVGCircleElement>(".terrain-node").forEach((node) => {
      const distance = Math.hypot(pointX - Number(node.getAttribute("cx")), pointY - Number(node.getAttribute("cy")));
      node.classList.toggle("terrain-node-near", distance < 54);
    });
  }
  function reset(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--land-x", "0px");
    event.currentTarget.style.setProperty("--land-y", "0px");
    event.currentTarget.querySelectorAll(".terrain-node-near").forEach((node) => node.classList.remove("terrain-node-near"));
  }

  return (
    <div className="landscape-visual" aria-hidden="true" onPointerMove={move} onPointerLeave={reset}>
      <div className="landscape-caption"><span>FIELD STUDY / 07</span><span>MODEL THE UNKNOWN</span></div>
      <svg className="landscape-svg" viewBox="0 0 520 360" fill="none" role="presentation">
        <defs>
          <radialGradient id="terrain-glow"><stop stopColor="#a6b77a" stopOpacity=".2"/><stop offset=".55" stopColor="#a6b77a" stopOpacity=".055"/><stop offset="1" stopColor="#a6b77a" stopOpacity="0"/></radialGradient>
          <linearGradient id="ridge-highlight" x1="82" y1="150" x2="440" y2="210" gradientUnits="userSpaceOnUse"><stop stopColor="#a6b77a" stopOpacity=".08"/><stop offset=".5" stopColor="#d9e89a" stopOpacity=".72"/><stop offset="1" stopColor="#a6b77a" stopOpacity=".08"/></linearGradient>
          <clipPath id="terrain-clip"><path d="M0 4H520V355H0z"/></clipPath>
        </defs>
        <ellipse cx="354" cy="190" rx="290" ry="190" fill="url(#terrain-glow)"/>
        <g className="terrain-grid" clipPath="url(#terrain-clip)">{Array.from({ length: 9 }, (_, row) => {
          const y = 190 + row * row * 2.05;
          return <path key={row} d={`M0 ${y} Q260 ${y - 25 - row * 1.5} 520 ${y}`} className="terrain-grid-line"/>;
        })}</g>
        <g className="terrain-perspective" clipPath="url(#terrain-clip)">{Array.from({ length: 25 }, (_, index) => {
          const x = 12 + index * 20.6;
          const peakX = 360 + (index - 12) * 3.3;
          return <path key={index} className="terrain-crossline" d={`M${x} 352 Q${(x + peakX) / 2} 222 ${peakX} 18 Q${(peakX + 520) / 2} 226 520 352`}/>;
        })}</g>
        <g className="terrain-contours terrain-back">{Array.from({ length: 7 }, (_, index) => <path key={index} d={contourPath(index + 11)} className="terrain-line terrain-line-back"/>)}</g>
        <g className="terrain-contours terrain-middle">{Array.from({ length: 7 }, (_, index) => <path key={index} d={contourPath(index + 4)} className={`terrain-line ${index === 3 || index === 4 ? "terrain-highlight" : "terrain-line-middle"}`}/>)}</g>
        <g className="terrain-contours terrain-front">{Array.from({ length: 5 }, (_, index) => <path key={index} d={contourPath(index)} className="terrain-line terrain-line-front"/>)}</g>
        <path className="terrain-signal" d="M24 302Q88 270 126 230T255 233T360 140T506 238"/>
        <circle className="terrain-node node-1" cx="126" cy="230" r="2.8"/><circle className="terrain-node node-2" cx="255" cy="233" r="2.2"/><circle className="terrain-node node-3" cx="360" cy="140" r="2.6"/><circle className="terrain-node node-4" cx="466" cy="220" r="2.2"/>
        <circle className="terrain-particle particle-1" r="2"><animateMotion dur="15s" repeatCount="indefinite" path="M24 302Q88 270 126 230T255 233T360 140T506 238"/></circle>
        <circle className="terrain-particle particle-2" r="1.6"><animateMotion dur="21s" repeatCount="indefinite" path="M22 258Q145 304 245 252T360 142T500 219"/></circle>

        <g className="terrain-callout terrain-callout-explore"><path d="M126 224V165"/><rect x="123" y="160" width="6" height="6"/><text x="137" y="166">EXPLORE</text><text className="terrain-label-sub" x="137" y="179">IDEAS</text></g>
        <g className="terrain-callout terrain-callout-experiment"><path d="M255 227V194"/><rect x="252" y="189" width="6" height="6"/><text x="267" y="195">EXPERIMENT</text><text className="terrain-label-sub" x="267" y="208">FURTHER</text></g>
        <g className="terrain-callout terrain-callout-build"><path d="M360 134V84"/><rect x="357" y="79" width="6" height="6"/><text x="372" y="85">BUILD</text><text className="terrain-label-sub" x="372" y="98">SOLUTIONS</text></g>
        <g className="terrain-callout terrain-callout-iterate"><path d="M466 214V193"/><rect x="463" y="188" width="6" height="6"/><text x="478" y="194">ITERATE</text><text className="terrain-label-sub" x="478" y="207">BETTER</text></g>
      </svg>
      <div className="landscape-footer"><span>ADAPTIVE SYSTEMS</span></div>
    </div>
  );
}
