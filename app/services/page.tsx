import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceImage, servicesByCategory } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Aesthetic, Skin, Hair and Dental Services in Bangalore",
  description:
    "Explore complete treatment options at Dr Utkarsha Aesthetics including dental, skin, hair, and body services in Malleswaram, Bangalore."
};

const categoryMeta = {
  Dental: {
    subtitle: "Smile and restorative care with specialist precision.",
    banner: "/service-images/clinic-s1.jpg"
  },
  Hair: {
    subtitle: "Hair loss management, transplant, and scalp regenerative protocols.",
    banner: "/service-images/clinic-hair-transplant.jpg"
  },
  Skin: {
    subtitle: "Medical aesthetics focused on texture, tone, and confidence.",
    banner: "/service-images/clinic-acne-treatment.jpg"
  },
  Body: {
    subtitle: "Body contour and non-surgical enhancement programs.",
    banner: "/service-images/clinic-body-shaping.jpg"
  }
} as const;

export default function ServicesPage() {
  return (
    <section className="section page-top services-page">
      <div className="container">
        <div className="services-hero-card">
          <div>
            <p className="kicker">Services in Bangalore</p>
            <h1>Modern, Specialist-Led Treatments with Real Clinic Experience</h1>
            <p>
              Every service card below uses live clinic photography from Dr. Utkarsha&apos;s own website to reflect
              real treatment environments, real team workflows, and real patient-facing quality.
            </p>
            <div className="services-hero-metrics">
              <span>30+ Treatments</span>
              <span>Dental · Skin · Hair · Body</span>
              <span>Doctor-Led Protocols</span>
            </div>
          </div>
          <Image
            src="/service-images/clinic-sl10.jpg"
            alt="Dr Utkarsha clinic treatment environment"
            width={960}
            height={680}
            className="services-hero-image"
            priority
          />
        </div>

        {(Object.keys(servicesByCategory) as Array<keyof typeof servicesByCategory>).map((category) => (
          <section key={category} id={category.toLowerCase()} className="category-block services-category-block">
            <div className="services-category-head">
              <div>
                <p className="kicker">{category} Services</p>
                <h2>{category}</h2>
                <p>{categoryMeta[category].subtitle}</p>
              </div>
              <Image
                src={categoryMeta[category].banner}
                alt={`${category} treatments at Dr Utkarsha clinic`}
                width={540}
                height={340}
                className="services-category-banner"
                loading="lazy"
              />
            </div>
            <div className="grid three services-grid">
              {servicesByCategory[category].map((service) => (
                <article key={service.slug} className="service-card service-card-modern">
                  <Image
                    src={getServiceImage(service)}
                    alt={`${service.title} service`}
                    width={860}
                    height={560}
                    className="service-thumb service-thumb-modern"
                    loading="lazy"
                  />
                  <div className="service-card-content">
                    <p className="service-category">{service.category}</p>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <Link href={`/services/${service.slug}`}>Open Service Page</Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
