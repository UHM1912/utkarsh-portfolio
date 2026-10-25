"use client";

import type { PointerEvent } from "react";

export function InfinityField() {
  function followPointer(event: PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--pointer-x", `${x * 9}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 9}px`);
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "0px");
    event.currentTarget.style.setProperty("--pointer-y", "0px");
  }

  return (
    <div className="infinity-field about-infinity-field" aria-hidden="true" onPointerMove={followPointer} onPointerLeave={resetPointer}>
      <svg className="infinity-svg" viewBox="0 0 520 330" fill="none" role="presentation">
        <defs>
          <linearGradient id="infinity-stroke" x1="65" y1="190" x2="455" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DCE7A1" stopOpacity=".22" />
            <stop offset=".49" stopColor="#DCE7A1" stopOpacity=".86" />
            <stop offset="1" stopColor="#DCE7A1" stopOpacity=".25" />
          </linearGradient>
          <radialGradient id="infinity-glow"><stop stopColor="#DCE7A1" stopOpacity=".15" /><stop offset="1" stopColor="#DCE7A1" stopOpacity="0" /></radialGradient>
        </defs>
        <ellipse className="infinity-halo" cx="260" cy="166" rx="205" ry="136" fill="url(#infinity-glow)" />
        <ellipse className="orbit orbit-a" cx="260" cy="166" rx="220" ry="93" transform="rotate(-20 260 166)" />
        <ellipse className="orbit orbit-b" cx="260" cy="166" rx="202" ry="128" transform="rotate(38 260 166)" />
        <ellipse className="orbit orbit-c" cx="260" cy="166" rx="228" ry="73" transform="rotate(9 260 166)" />
        <path className="infinity-trace" pathLength="1" d="M61 166C61 78 155 78 260 166C365 254 459 254 459 166C459 78 365 78 260 166C155 254 61 254 61 166Z" stroke="url(#infinity-stroke)" strokeWidth="1.45" />
        <path className="infinity-core" d="M61 166C61 78 155 78 260 166C365 254 459 254 459 166C459 78 365 78 260 166C155 254 61 254 61 166Z" stroke="#DCE7A1" strokeOpacity=".08" strokeWidth="15" />
        <path d="M260 24V70M260 263V305M24 166H60M460 166H496" className="register-line" />
        <circle className="orbit-point point-one" cx="260" cy="37" r="3" />
        <circle className="orbit-point point-two" cx="424" cy="83" r="2.5" />
        <circle className="orbit-point point-three" cx="92" cy="251" r="2" />
        <circle className="orbit-point point-four" cx="451" cy="236" r="2" />
        <circle className="orbit-point point-five" cx="132" cy="80" r="1.7" />
      </svg>
      <span className="field-label field-label-top">SYSTEMS / 01</span>
      <span className="field-label field-label-bottom">IDEA <i>→</i> MODEL <i>→</i> APPLICATION</span>
      <span className="field-coordinate">STATISTICS × ENGINEERING</span>
    </div>
  );
}
