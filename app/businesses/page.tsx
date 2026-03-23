import type { Metadata } from "next";
import { businessPrograms, clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Corporate Aesthetic and Wellness Programs in Bangalore",
  description:
    "Partner with Dr Utkarsha Aesthetics for corporate skin, hair, dental and grooming wellness programs in Bangalore."
};

export default function BusinessesPage() {
  return (
    <section className="section page-top">
      <div className="container narrow">
        <p className="kicker">For Businesses in Bangalore</p>
        <h1>Corporate Aesthetic and Wellness Partnerships</h1>
        <p className="lead">
          Designed for companies that want better employee confidence, presentation outcomes, and wellness engagement.
        </p>

        <div className="grid three">
          {businessPrograms.map((program) => (
            <article className="glass-card" key={program.title}>
              <h2>{program.title}</h2>
              <p>{program.detail}</p>
            </article>
          ))}
        </div>

        <section className="category-block">
          <h2>Why this works as a lead magnet</h2>
          <ul>
            <li>Dedicated business-focused page targeting Bangalore B2B searches.</li>
            <li>Clear partner value proposition with direct WhatsApp/call conversion.</li>
            <li>Premium positioning with healthcare trust cues and doctor-led governance.</li>
          </ul>
        </section>

        <section className="final-cta final-cta-inset">
          <h2>Discuss a Program with the Clinic Team</h2>
          <p>Share your team size, goals, and timeline to build a custom engagement format.</p>
          <div className="cta-row center">
            <a className="btn btn-primary" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              Start Partner Discussion
            </a>
            <a className="btn btn-secondary" href={`mailto:${clinic.email}?subject=Corporate%20Program%20Enquiry`}>
              Email Proposal Request
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
