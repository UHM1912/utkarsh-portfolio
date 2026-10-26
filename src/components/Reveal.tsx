"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

export function Reveal({ children, className, ...props }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.dataset.revealState = "pending";
    const reveal = () => { element.dataset.revealState = "visible"; };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal();
        observer.disconnect();
      }
    }, { threshold: 0.08 });

    observer.observe(element);
    return () => { observer.disconnect(); };
  }, []);

  return <div ref={elementRef} className={`reveal ${className ?? ""}`} {...props}>{children}</div>;
}
