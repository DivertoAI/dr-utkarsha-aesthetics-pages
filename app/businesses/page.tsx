import type { Metadata } from "next";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Bangalore Partnership Playbook for Aesthetic Business Growth",
  description:
    "Research-backed business partnership strategy for Dr Utkarsha Aesthetics in Bangalore across lifestyle events, doctors, HR teams, sports communities and creator networks."
};

const partnershipPlays = [
  {
    title: "Premium lifestyle and experience partners",
    audience: "Models, wedding communities, creators",
    why: "Bangalore runs recurring fashion, bridal, and influencer events with high-intent audiences already investing in confidence-led appearance outcomes.",
    how: "Offer priority pre-shoot and pre-wedding makeover pathways with a WhatsApp concierge organisers can share in promo kits and participant groups."
  },
  {
    title: "Non-dental medical and wellness doctors",
    audience: "Plastic surgeons, dermatologists, fitness and hormone clinics",
    why: "Bengaluru’s aesthetics ecosystem already cross-refers between skin, body, and dental outcomes, making bundled care offers easier to adopt.",
    how: "Launch mixed-care bundles such as Derm + Dental + Body with referral-revenue terms while centralizing intake on WhatsApp."
  },
  {
    title: "Corporate wellness and HR teams",
    audience: "IT and high-growth companies",
    why: "Bangalore’s tech density and premium employee base create strong demand for fast, high-quality, trust-led care that fits busy schedules.",
    how: "Run priority smile and skin check drives linked to wellness stipends, employee appreciation days, and quarterly health campaigns."
  },
  {
    title: "Athletic clubs and combat studios",
    audience: "CrossFit, martial arts, fight clubs, performance gyms",
    why: "Athletes and trainers need both functional dental support and rapid cosmetic readiness before competitions and media moments.",
    how: "Package fight-ready treatment tracks with fast-turnaround procedures and a dedicated high-priority WhatsApp booking line."
  },
  {
    title: "Influencer houses and content studios",
    audience: "Creator agencies, production spaces, photobooth networks",
    why: "Bengaluru’s creator economy is expanding, and consistent pre-shoot prep is a real operational need for talent managers and studios.",
    how: "Create content-ready smile and skin bundles, plus co-branded micro-campaigns tied to shoot schedules and creator calendars."
  }
];

const nextSteps = [
  "Build a partner pitch kit with these 5 segments, clear outcome claims, and a simple line: “we handle WhatsApp + booking, you deliver treatment.”",
  "Shortlist 2–3 targets per segment and prepare personalized outreach scripts for events, doctors, HR leaders, studios, and sports operators.",
  "Track lead flow in one shared sheet: lead → outreach → meeting → pilot bundle → conversion."
];

export default function BusinessesPage() {
  return (
    <section className="section page-top businesses-page">
      <div className="container narrow">
        <p className="kicker">For Businesses in Bangalore</p>
        <h1>Bangalore Partnership Blueprint for Omega Digi + AI</h1>
        <p className="lead">
          A research-led playbook to build predictable B2B lead flow for Dr Utkarsha’s clinic across premium events,
          healthcare partners, corporates, sports communities, and creator networks.
        </p>

        <div className="business-chip-row">
          <span>High-Intent Audience Buckets</span>
          <span>WhatsApp-First Intake</span>
          <span>Premium Positioning for Bangalore</span>
        </div>

        <div className="grid two business-play-grid">
          {partnershipPlays.map((play, index) => (
            <article className="glass-card business-play-card" key={play.title}>
              <p className="business-play-index">Play {index + 1}</p>
              <h2>{play.title}</h2>
              <p className="business-play-audience">{play.audience}</p>
              <p>
                <strong>Why it fits:</strong> {play.why}
              </p>
              <p>
                <strong>How to partner:</strong> {play.how}
              </p>
            </article>
          ))}
        </div>

        <section className="category-block info-panel">
          <h2>Next Steps</h2>
          <ol className="business-steps">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="final-cta final-cta-inset">
          <h2>Start Partner Outreach</h2>
          <p>
            Share your priority segment and pilot target list. We can structure scripts, offer formats, and conversion
            tracking for each category.
          </p>
          <div className="cta-row center">
            <a className="btn btn-primary" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Partner Desk
            </a>
            <a className="btn btn-secondary" href={`mailto:${clinic.email}?subject=Corporate%20Program%20Enquiry`}>
              Email Outreach Plan
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
