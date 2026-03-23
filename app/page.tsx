import Image from "@/components/clinic-image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  clinic,
  doctors,
  faqs,
  gallery,
  highlightedServices,
  patientJourney,
  servicesByCategory,
  siteUrl,
  testimonials
} from "@/lib/clinic-data";
import { CategoryVisual, JourneyVisual, SectionLeadVisual } from "@/components/section-visuals";
import { StoryLottie } from "@/components/story-lottie";

export const metadata: Metadata = {
  title: "Aesthetic, Dental, Skin & Hair Clinic in Malleswaram, Bangalore",
  description:
    "Book specialist dental, skin, hair and body treatments in Malleswaram, Bangalore. High-trust, premium care with personalized plans.",
  keywords: [
    "aesthetic clinic in Bangalore",
    "dental clinic in Malleswaram",
    "hair transplant Bangalore",
    "skin treatment Bangalore",
    "cosmetic dentistry Malleswaram"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  image: `${siteUrl}/hero/sl3.jpg`,
  url: siteUrl,
  telephone: clinic.primaryPhone,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address[0] + ", " + clinic.address[1],
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560003",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.coordinates.latitude,
    longitude: clinic.coordinates.longitude
  },
  sameAs: [clinic.social.instagram, clinic.social.facebook, clinic.social.youtube]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

type StoryMilestone = {
  year: string;
  title: string;
  detail: string;
  ctaLabel: string;
  href: string;
  animation: "lights" | "ripple" | "starfish";
  external?: boolean;
};

type IntentAction = {
  title: string;
  detail: string;
  href: string;
  external?: boolean;
};

const storyMilestones: StoryMilestone[] = [
  {
    year: "2002",
    title: "Malleswaram Start",
    detail:
      "Dr. Utkarsha began with a specialist-first philosophy: detailed diagnosis, conservative planning, and treatment transparency.",
    ctaLabel: "Visit Clinic",
    href: "/contact",
    animation: "ripple"
  },
  {
    year: "Expertise",
    title: "Surgical + Aesthetic Depth",
    detail:
      "Oral and maxillofacial surgery roots combined with aesthetic medicine and trichology to solve both function and appearance together.",
    ctaLabel: "Meet Team",
    href: "#experts",
    animation: "starfish"
  },
  {
    year: "Integrated",
    title: "One Clinic, Multi-Concern Care",
    detail:
      "Dental, skin, hair, and body services are coordinated under one doctor-led journey so plans stay coherent and efficient.",
    ctaLabel: "Explore Services",
    href: "/services",
    animation: "lights"
  },
  {
    year: "Bangalore",
    title: "Trusted by High-Intent Patients",
    detail:
      "Professionals, families, and transformation-focused patients choose the clinic for natural outcomes and high follow-through.",
    ctaLabel: "Start on WhatsApp",
    href: clinic.whatsapp,
    animation: "ripple",
    external: true
  }
];

const intentActions: IntentAction[] = [
  {
    title: "Book a Doctor Consultation",
    detail: "Direct booking with the clinic team and faster slot matching.",
    href: clinic.whatsapp,
    external: true
  },
  {
    title: "See Treatments by Concern",
    detail: "Pick dental, skin, hair, or body pathways built for Bangalore lifestyles.",
    href: "/services"
  },
  {
    title: "Corporate Partnerships",
    detail: "Structured confidence and grooming programs for teams and leadership cohorts.",
    href: "/businesses"
  }
];

const quickTreatmentPaths = [
  {
    label: "Dental",
    focus: "Smile & function",
    href: "/services/dental-implants-in-malleswaram"
  },
  {
    label: "Hair",
    focus: "Transplant & regrowth",
    href: "/services/hair-transplant-in-malleswaram"
  },
  {
    label: "Skin",
    focus: "Acne to rejuvenation",
    href: "/services/acne-treatment-malleswaram"
  },
  {
    label: "Body",
    focus: "Contour planning",
    href: "/services/body-shaping-malleswaram"
  }
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero hero-story">
        <div className="hero-aurora" aria-hidden />
        <div className="hero-gridlines" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">Doctor Story · Bangalore Trust · Premium Outcomes</p>
            <h1>From One Malleswaram Practice to a Landmark Aesthetic Name in Bengaluru.</h1>
            <p className="lead">
              Dr. Utkarsha built this clinic around one promise: if a treatment improves confidence, it must also stay
              natural, safe, and clinically defensible. That promise now powers dental, skin, hair, and body
              transformations under one roof.
            </p>
            <div className="cta-row">
              <a href={`tel:${clinic.primaryPhone.replace(/\s+/g, "")}`} className="btn btn-primary">
                Book with Dr. Utkarsha
              </a>
              <a href={clinic.whatsapp} className="btn btn-secondary" target="_blank" rel="noreferrer">
                WhatsApp Fast-Track
              </a>
              <Link href="/services" className="btn btn-ghost">
                Explore Treatment Paths
              </Link>
            </div>
            <div className="intent-grid">
              {intentActions.map((item) =>
                item.external ? (
                  <a key={item.title} href={item.href} className="intent-card" target="_blank" rel="noreferrer">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </a>
                ) : (
                  <Link key={item.title} href={item.href} className="intent-card">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </Link>
                )
              )}
            </div>
            <div className="hero-meta">
              <p>Specialist-led care since 2002</p>
              <p>Doctor-led personalized treatment design for every face and body type</p>
              <p>Premium destination in Malleswaram for dental, skin, hair, and body care</p>
            </div>
            <div className="quick-paths">
              {quickTreatmentPaths.map((item) => (
                <Link key={item.label} href={item.href} className="quick-path-chip">
                  <span>{item.label}</span>
                  <strong>{item.focus}</strong>
                </Link>
              ))}
            </div>
          </div>
          <div className="hero-star-card">
            <span className="hero-badge hero-badge-top">Doctor-Led Since 2002</span>
            <div className="hero-lottie hero-lottie-top">
              <StoryLottie variant="lights" speed={0.85} />
            </div>
            <Image src="/doctors/dr-utkarsha.png" alt="Dr Utkarsha Lokesh" width={640} height={760} priority />
            <div className="hero-star-overlay">
              <span className="hero-badge hero-badge-bottom">Bangalore · Malleswaram</span>
              <h2>Dr. Utkarsha Lokesh</h2>
              <p>MDS, Fellowship in Aesthetic Medicine, Trichology</p>
              <div className="mini-links">
                <Link href="/services">Explore Transformations</Link>
                <Link href="/businesses">Corporate Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section" id="doctor-story">
        <div className="container">
          <div className="section-head story-head">
            <div>
              <p className="kicker">Doctor Journey</p>
              <h2>The Story Behind the Clinic’s Reputation</h2>
            </div>
            <p>
              Patients in Bangalore usually come for outcomes, but they stay for trust. This clinic grew by combining
              surgical precision, aesthetic judgment, and follow-through after treatment.
            </p>
          </div>
          <div className="grid four story-grid">
            {storyMilestones.map((item) => (
              <article className="story-card" key={item.title}>
                <div className="story-card-top">
                  <p className="story-year">{item.year}</p>
                  <StoryLottie variant={item.animation} className="story-lottie" speed={0.8} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="story-link">
                    {item.ctaLabel}
                  </a>
                ) : (
                  <Link href={item.href} className="story-link">
                    {item.ctaLabel}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Patient Experience</p>
            <h2>Simple, High-Trust Process</h2>
          </div>
          <div className="grid four">
            {patientJourney.map((item, index) => (
              <article className="glass-card" key={item.step}>
                <JourneyVisual index={index} />
                <p className="step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section highlight-surface">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Most Requested</p>
            <h2>Featured Treatments in Bangalore</h2>
          </div>
          <div className="category-quick-row">
            {(Object.keys(servicesByCategory) as Array<keyof typeof servicesByCategory>).map((category) => (
              <Link key={category} href={`/services/#${category.toLowerCase()}`} className="category-quick-link">
                {category}
              </Link>
            ))}
          </div>
          <div className="grid four">
            {highlightedServices.map((service) => (
              <article className="service-card" key={service.slug}>
                <CategoryVisual category={service.category} />
                <p className="service-category">{service.category}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={`/services/${service.slug}`}>View Treatment</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" id="experts">
          <div className="section-head">
            <p className="kicker">Experts</p>
            <h2>Core Clinical Team</h2>
          </div>
          <div className="grid three">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="doctor-card">
                <Image src={doctor.image} alt={doctor.name} width={520} height={560} className="doctor-photo" />
                <h3>{doctor.name}</h3>
                <p className="doctor-role">{doctor.role}</p>
                <p>{doctor.credentials}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-block">
        <div className="container dual">
          <article>
            <SectionLeadVisual type="patients" />
            <p className="kicker">For Patients</p>
            <h2>Book Consultation in Under 2 Minutes</h2>
            <p>
              Talk directly with the clinic team for treatment guidance, appointment slots, and next-step clarity
              without unnecessary back-and-forth.
            </p>
            <a href={clinic.whatsapp} className="btn btn-primary" target="_blank" rel="noreferrer">
              Start on WhatsApp
            </a>
          </article>
          <article>
            <SectionLeadVisual type="business" />
            <p className="kicker">For Businesses</p>
            <h2>Corporate Aesthetic and Grooming Partnerships</h2>
            <p>
              Build wellness and confidence programs for your team with structured skin, hair, and smile care journeys.
            </p>
            <Link href="/businesses" className="btn btn-secondary">
              See Business Program
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Gallery</p>
            <h2>Clinic Highlights</h2>
          </div>
          <div className="grid three">
            {gallery.slice(0, 9).map((item) => (
              <article className="gallery-card" key={item.src}>
                <Image src={item.src} alt={item.title} width={540} height={420} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  {item.subtitle ? <p>{item.subtitle}</p> : null}
                </div>
              </article>
            ))}
          </div>
          <p className="center mt">
            <Link href="/gallery" className="btn btn-secondary">
              View Full Gallery
            </Link>
          </p>
        </div>
      </section>

      <section className="section highlight-surface">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What Patients Say</p>
            <h2>Social Proof that Builds Trust</h2>
          </div>
          <div className="grid four">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <p>“{testimonial.text}”</p>
                <h3>{testimonial.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">FAQ</p>
            <h2>Common Questions from Bangalore Patients</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container center">
          <h2>Ready to Plan Your Treatment?</h2>
          <p>
            Visit the clinic in Malleswaram or connect online for a guided consultation.
            <br />
            <strong>{clinic.address.join(", ")}</strong>
          </p>
          <div className="cta-row center">
            <a href={`tel:${clinic.primaryPhone.replace(/\s+/g, "")}`} className="btn btn-primary">
              Call Now
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Dr. Utkarsha Lokesh",
            jobTitle: "Oral and Maxillofacial Surgeon",
            worksFor: {
              "@type": "MedicalClinic",
              name: clinic.name
            }
          })
        }}
      />
    </>
  );
}
