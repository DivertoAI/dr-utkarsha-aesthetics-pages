import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceImage, servicesByCategory } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Aesthetic, Skin, Hair and Dental Services in Bangalore",
  description:
    "Explore complete treatment options at Dr Utkarsha Aesthetics including dental, skin, hair, and body services in Malleswaram, Bangalore."
};

export default function ServicesPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Services</p>
          <h1>Complete Treatment Portfolio</h1>
          <p>
            Search-friendly service pages designed for Bangalore patients looking for clarity before they book.
          </p>
        </div>

        {(Object.keys(servicesByCategory) as Array<keyof typeof servicesByCategory>).map((category) => (
          <section key={category} className="category-block">
            <h2>{category}</h2>
            <div className="grid three">
              {servicesByCategory[category].map((service) => (
                <article key={service.slug} className="service-card">
                  <Image
                    src={getServiceImage(service)}
                    alt={`${service.title} service`}
                    width={860}
                    height={560}
                    className="service-thumb"
                    loading="lazy"
                  />
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <Link href={`/services/${service.slug}`}>Open Service Page</Link>
                </article>
              ))}
            </div>
          </section>
        ))}

        <p className="license-note">
          Service images are sourced from public-domain/CC0 collections (via Openverse and Flickr).
        </p>
      </div>
    </section>
  );
}
