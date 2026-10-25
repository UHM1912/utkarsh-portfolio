"use client";

import type { PointerEvent } from "react";

export function ContactNetwork() {
  function move(event: PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    event.currentTarget.style.setProperty("--network-x", `${x * 2}px`);
    event.currentTarget.style.setProperty("--network-y", `${y * 1.5}px`);
  }

  function reset(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--network-x", "0px");
    event.currentTarget.style.setProperty("--network-y", "0px");
  }

  return (
    <div className="contact-network-wrap" onPointerMove={move} onPointerLeave={reset}>
      <svg className="contact-network-svg" viewBox="0 0 640 280" fill="none" role="presentation">
        <defs>
          <radialGradient id="network-glow"><stop stopColor="#d9e89a" stopOpacity=".12"/><stop offset="1" stopColor="#d9e89a" stopOpacity="0"/></radialGradient>
        </defs>
        <ellipse cx="320" cy="140" rx="280" ry="126" fill="url(#network-glow)"/>
        <ellipse className="network-ring ring-one" cx="320" cy="140" rx="285" ry="82" transform="rotate(-13 320 140)"/>
        <ellipse className="network-ring ring-two" cx="320" cy="140" rx="245" ry="104" transform="rotate(32 320 140)"/>
        <path className="network-infinity" d="M80 140C80 64 170 47 320 140S560 216 560 140 470 47 320 140 80 216 80 140Z"/>
        <circle className="network-point point-1" cx="130" cy="89" r="2.7"/>
        <circle className="network-point point-2" cx="320" cy="140" r="2.4"/>
        <circle className="network-point point-3" cx="510" cy="92" r="2.7"/>
        <circle className="network-point point-4" cx="505" cy="191" r="2.2"/>
        <circle className="network-traveller" r="2.6"><animateMotion dur="12s" repeatCount="indefinite" path="M80 140C80 64 170 47 320 140S560 216 560 140 470 47 320 140 80 216 80 140Z"/></circle>
      </svg>
    </div>
  );
}
