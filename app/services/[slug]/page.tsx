import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import {
  clinic,
  faqs,
  getServiceBySlug,
  getServiceImage,
  services,
  servicesByCategory,
  siteUrl
} from "@/lib/clinic-data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {};
  }
  return {
    title: `${service.title} in Bangalore`,
    description: `${service.summary} Book a consultation in Malleswaram, Bangalore with doctor-led assessment and transparent planning.`,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    keywords: [
      `${service.title} Bangalore`,
      `${service.title} Malleswaram`,
      `${service.category} treatment Bangalore`,
      "Dr Utkarsha Aesthetics"
    ],
    openGraph: {
      title: `${service.title} | Dr Utkarsha Aesthetics`,
      description: service.summary,
      url: `${siteUrl}/services/${service.slug}`,
      type: "article"
    }
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const related = servicesByCategory[service.category].filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <section className="section page-top">
      <div className="container narrow">
        <p className="kicker">{service.category} in Bangalore</p>
        <h1>{service.title}</h1>
        <p className="lead">{service.summary}</p>
        <Image
          src={getServiceImage(service)}
          alt={`${service.title} in Bangalore`}
          width={1100}
          height={640}
          className="service-hero-image"
          priority
        />

        <div className="info-panel">
          <h2>How this page converts better</h2>
          <ul>
            <li>Localized for patients searching treatment + Bangalore/Malleswaram intent.</li>
            <li>Consultation-first copy with clear next action.</li>
            <li>Fast loading and schema-friendly structure for SEO.</li>
          </ul>
        </div>

        <div className="cta-row">
          <a className="btn btn-primary" href={clinic.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp to Book
          </a>
          <a className="btn btn-secondary" href={`tel:${clinic.primaryPhone.replace(/\s+/g, "")}`}>
            Call {clinic.primaryPhone}
          </a>
        </div>

        <section className="category-block">
          <h2>Common Questions</h2>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="category-block">
          <h2>Related {service.category} Services</h2>
          <div className="grid two">
            {related.map((item) => (
              <article className="service-card" key={item.slug}>
                <Image
                  src={getServiceImage(item)}
                  alt={`${item.title} related service`}
                  width={800}
                  height={520}
                  className="service-thumb"
                  loading="lazy"
                />
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link href={`/services/${item.slug}`}>Open Service</Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
