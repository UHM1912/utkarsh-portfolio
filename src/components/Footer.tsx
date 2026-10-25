import { siteLinks } from "@/src/data/site";
import { Reveal } from "@/src/components/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Reveal className="site-container flex min-w-0 flex-col gap-4 py-5 font-mono text-[0.65rem] tracking-[0.16em] text-[#777972] sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p>UTKARSH MISRA <span aria-hidden="true">&infin;</span></p>
          <p className="mt-2 text-[0.55rem] text-[#777972]">AI / ML &nbsp; DATA SCIENCE &nbsp; RESEARCH</p>
        </div>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {(["github", "linkedin", "email"] as const).map((label) => (
              <li key={label}>
                {siteLinks[label] ? (
                  <a href={siteLinks[label]} className="inline-flex min-h-11 items-center uppercase transition-colors hover:text-[#e7e9dc]">{label}</a>
                ) : (
                  <span aria-disabled="true" className="inline-flex min-h-11 cursor-not-allowed items-center uppercase text-[#555751]">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </footer>
  );
}
