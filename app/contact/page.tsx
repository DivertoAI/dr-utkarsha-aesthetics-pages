import type { Metadata } from "next";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Contact and Directions",
  description:
    "Contact Dr Utkarsha Aesthetics in Malleswaram, Bangalore by call, WhatsApp, or email. View map directions and clinic details."
};

export default function ContactPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Contact</p>
          <h1>Visit Dr Utkarsha Aesthetics, Malleswaram</h1>
          <p>Appointments available via call, WhatsApp, and email.</p>
        </div>

        <div className="grid two">
          <article className="glass-card">
            <h2>Clinic Address</h2>
            {clinic.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <h3>Phone</h3>
            {clinic.phones.map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
              </p>
            ))}
            <h3>Email</h3>
            <p>
              <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
            </p>
          </article>

          <article className="glass-card map-card">
            <h2>Map</h2>
            <iframe
              title="Dr Utkarsha Aesthetics map location"
              src={clinic.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
