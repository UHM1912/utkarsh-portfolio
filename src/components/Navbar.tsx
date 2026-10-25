"use client";

import { useEffect, useState } from "react";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#currently", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["top", ...navigation.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, .15, .4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 12);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-20 border-b border-white/10 bg-[#0b0d10]/75 backdrop-blur-md ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav aria-label="Primary navigation" className="site-container flex min-w-0 items-center justify-between gap-4 py-4">
        <a href="#top" className="shrink-0 font-mono text-sm tracking-[0.24em] text-[#f2f2ed] transition-opacity hover:opacity-70">
          UM<span className="ml-1 text-[#cbd4ae]">&infin;</span>
        </a>
        <ul className="hidden min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 text-xs tracking-[0.14em] text-[#a5a69f] lg:flex">
          {navigation.map((item) => (
          <NavigationLink key={item.href} item={item} active={activeSection === item.href.slice(1)} />
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center font-mono text-xs tracking-[0.14em] text-[#e7e9dc] lg:hidden"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>
      {menuOpen && (
        <ul id="mobile-navigation" className="site-container border-t border-white/10 bg-[#0b0d10] py-2 lg:hidden">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center border-b border-white/10 py-3 font-mono text-xs tracking-[0.14em] text-[#c4c5bd] transition-colors hover:text-[#cbd4ae]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function NavigationLink({ item, active }: { item: (typeof navigation)[number]; active: boolean }) {
  return (
    <li>
      <a
        aria-current={active ? "location" : undefined}
        className={`relative inline-flex min-h-11 items-center transition-colors after:absolute after:bottom-2 after:left-0 after:h-px after:bg-[#cbd4ae] after:transition-all hover:after:w-full ${active ? "text-[#f2f2ed] after:w-full" : "after:w-0"}`}
        href={item.href}
      >
        {item.label}
      </a>
    </li>
  );
}
