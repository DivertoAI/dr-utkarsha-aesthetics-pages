"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "@/components/clinic-image";

type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navLinks: NavLink[];
  whatsappLink: string;
};

export default function SiteHeader({ navLinks, whatsappLink }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-active", isMenuOpen);
    return () => {
      document.body.classList.remove("menu-active");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`site-header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Dr Utkarsha Aesthetics home">
          <span className="brand-logo-wrap">
            <Image src="/logo/clinic-logo.png" alt="Dr Utkarsha Aesthetics logo" width={320} height={100} priority />
          </span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bar" aria-hidden />
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div className={`mobile-shell ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Close menu backdrop"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        />
        <div id="mobile-menu" className="mobile-menu-panel">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            className="mobile-nav-cta"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Start on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
