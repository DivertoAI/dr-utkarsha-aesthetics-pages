import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "@/components/clinic-image";
import SiteHeader from "@/components/site-header";
import "./globals.css";
import { clinic, siteUrl } from "@/lib/clinic-data";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr Utkarsha Aesthetics | Premium Dental, Skin & Hair Clinic in Bangalore",
    template: "%s | Dr Utkarsha Aesthetics Bangalore"
  },
  description:
    "Doctor-led dental, skin, hair and body aesthetics clinic in Malleswaram, Bangalore. Book consultations with Dr Utkarsha Lokesh and team.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Dr Utkarsha Aesthetics Bangalore",
    description:
      "Premium aesthetic and dental care in Malleswaram, Bangalore with specialist doctors and personalized treatment plans.",
    url: siteUrl,
    siteName: "Dr Utkarsha Aesthetics",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Utkarsha Aesthetics Bangalore",
    description: "Premium Dental, Skin, Hair and Body Aesthetic Care in Malleswaram."
  }
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/businesses", label: "For Businesses" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const patternVars = {
    "--page-pattern-url": `url(${withBasePath("/patterns/page-lattice.svg")})`,
    "--nav-pattern-url": `url(${withBasePath("/patterns/nav-ribbon.svg")})`,
    "--flow-pattern-url": `url(${withBasePath("/patterns/flow-body.svg")})`,
    "--orb-pattern-url": `url(${withBasePath("/patterns/orb-grid.svg")})`
  } as CSSProperties;

  return (
    <html lang="en">
      <body style={patternVars}>
        <div className="page-ornament page-ornament-top" aria-hidden />
        <div className="page-ornament page-ornament-mid" aria-hidden />
        <div className="page-ornament page-ornament-bottom" aria-hidden />
        <SiteHeader navLinks={navLinks} whatsappLink={clinic.whatsapp} />

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <section>
              <div className="footer-logo-wrap">
                <Image src="/logo/clinic-logo.png" alt="Dr Utkarsha Aesthetics logo" width={260} height={82} loading="lazy" />
              </div>
              <h2>{clinic.brand}</h2>
              <p>{clinic.tagline}</p>
              <p>{clinic.foundedText}</p>
            </section>
            <section>
              <h2>Visit Us</h2>
              {clinic.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </section>
            <section>
              <h2>Quick Reach</h2>
              <p>
                <a href={`tel:${clinic.primaryPhone.replace(/\s+/g, "")}`}>{clinic.primaryPhone}</a>
              </p>
              <p>
                <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </p>
              <p>
                <a href={clinic.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                {" · "}
                <a href={clinic.social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
                {" · "}
                <a href={clinic.social.youtube} target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </p>
            </section>
          </div>
          <p className="copyright">© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
        </footer>

        <div className="sticky-cta">
          <a href={`tel:${clinic.primaryPhone.replace(/\s+/g, "")}`}>Call</a>
          <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a
            href="https://maps.google.com/?q=Dr%20Utkarshas%20Esthetic%20Centre%20Malleswaram%20Bangalore"
            target="_blank"
            rel="noreferrer"
          >
            Directions
          </a>
        </div>
      </body>
    </html>
  );
}
