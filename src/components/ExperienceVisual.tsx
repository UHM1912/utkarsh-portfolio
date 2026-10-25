"use client";

import type { PointerEvent } from "react";

export function ExperienceVisual() {
  function move(event: PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--tilt-x", `${((event.clientY - rect.top) / rect.height - .5) * -5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${((event.clientX - rect.left) / rect.width - .5) * 6}deg`);
  }

  function reset(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div className="systems-visual" onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
      <div className="systems-visual-meta"><span>GLOBAL SYSTEMS</span><span>37.5665° N&nbsp; 126.9780° E</span></div>
      <div className="systems-scene">
        <svg className="systems-svg" viewBox="0 0 440 390" fill="none" role="presentation">
          <defs>
            <radialGradient id="globe-fill"><stop stopColor="#cbd4ae" stopOpacity=".14"/><stop offset="1" stopColor="#cbd4ae" stopOpacity="0"/></radialGradient>
            <clipPath id="globe-clip"><circle cx="220" cy="190" r="112"/></clipPath>
          </defs>
          <ellipse className="systems-aura" cx="220" cy="190" rx="165" ry="145" fill="url(#globe-fill)"/>
          <g className="systems-orbits">
            <ellipse className="systems-orbit orbit-wide" cx="220" cy="190" rx="194" ry="78" transform="rotate(-25 220 190)"/>
            <ellipse className="systems-orbit orbit-tall" cx="220" cy="190" rx="154" ry="96" transform="rotate(58 220 190)"/>
            <ellipse className="systems-orbit orbit-flat" cx="220" cy="190" rx="180" ry="55" transform="rotate(12 220 190)"/>
          </g>
          <g className="systems-globe" clipPath="url(#globe-clip)">
            <circle cx="220" cy="190" r="112" fill="#cbd4ae" fillOpacity=".025"/>
            <ellipse className="globe-latitude" cx="220" cy="190" rx="110" ry="36"/>
            <ellipse className="globe-latitude" cx="220" cy="190" rx="110" ry="72"/>
            <ellipse className="globe-longitude" cx="220" cy="190" rx="43" ry="110"/>
            <ellipse className="globe-longitude" cx="220" cy="190" rx="80" ry="110"/>
            <path className="globe-continent" d="m147 126 15-14 26 5 11 14 20 5 6 16-13 13-23 1-10 18-17-3-9-15-20-4-8-16 8-14Zm91 23 18-9 23 7 11 20-9 11 12 14-8 27-17 16-9 26-15 13-12-18 5-22-11-18 8-17-14-17 5-20-12-13Zm-80 39 17 8 7 23-13 19-11-7-3-21-12-9Z"/>
            <path className="globe-signal" d="M113 229c34-28 54-40 91-39s61 20 123-22"/>
            <path className="globe-signal secondary-signal" d="M131 139c44 24 73 54 109 51s51-15 77-2"/>
            <circle className="globe-data-point" cx="177" cy="183" r="2.4"/><circle className="globe-data-point point-b" cx="248" cy="170" r="2"/><circle className="globe-data-point point-c" cx="267" cy="222" r="2.2"/><circle className="globe-data-point point-d" cx="196" cy="139" r="1.8"/>
          </g>
          <circle className="globe-edge" cx="220" cy="190" r="112"/>
          <path className="systems-link" d="M102 190H35m270 0h72M220 76V42m0 296v-34"/>
          <circle className="systems-node node-a" cx="58" cy="104" r="3"/><circle className="systems-node node-b" cx="361" cy="253" r="2.7"/><circle className="systems-node node-c" cx="323" cy="81" r="2"/><circle className="systems-node node-d" cx="103" cy="281" r="2.2"/>
        </svg>
        <span className="systems-label label-data"><b>DATA</b><i>FLOW</i></span>
        <span className="systems-label label-people"><b>PEOPLE</b><i>CONNECTED</i></span>
        <span className="systems-label label-products"><b>PRODUCTS</b><i>IN USE</i></span>
        <span className="systems-label label-impact"><b>IMPACT</b><i>MEASURABLE</i></span>
        <span className="systems-scan"/>
      </div>
      <div className="systems-visual-footer"><span>INTELLIGENCE IN MOTION</span><i>NETWORK / 001</i></div>
    </div>
  );
}
