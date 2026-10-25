import { contactDetails, siteLinks } from "@/src/data/site";
import { Reveal } from "@/src/components/Reveal";
import { ContactNetwork } from "@/src/components/ContactNetwork";
import { ArrowIcon } from "@/src/components/ArrowIcon";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact scientific-grid border-b border-white/10">
      <Reveal className="site-container contact-stage section-space">
        <div className="contact-copy">
          <p className="font-mono text-[0.65rem] tracking-[0.22em] text-[#cbd4ae]">08 / 08 - CONTACT</p>
          <h2 id="contact-heading" className="contact-heading reveal-heading mt-7 max-w-3xl text-balance leading-[0.95] tracking-[-0.065em] text-[#f2f2ed]">
            <span>Have an interesting</span><br /><span className="heading-accent">problem?</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#c4c5bd]">I&apos;m interested in building, experimenting and discussing ideas around AI, data and software.</p>
        </div>
        <div className="contact-connect">
          <div aria-hidden="true" className="contact-visual"><ContactNetwork /></div>
          <address className="contact-details">
            <div className="contact-detail-primary">
              <span className="contact-detail-icon" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4" width="15" height="12" rx="1.5"/><path d="m3 5 7 5.5L17 5"/></svg></span>
              <div><span className="contact-detail-label">EMAIL / DIRECT</span><a href={siteLinks.email} className="email-link">{contactDetails.email}</a><p>{contactDetails.location}</p></div>
            </div>
            <nav aria-label="Contact links"><ul>
              {siteLinks.linkedin && <li><a href={siteLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a></li>}
              <li><a href={siteLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a></li>
              <li><a href={siteLinks.resume} target="_blank" rel="noreferrer">Resume <ArrowIcon diagonal /></a></li>
            </ul></nav>
          </address>
        </div>
      </Reveal>
    </section>
  );
}
