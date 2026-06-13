"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";
import styles from "./Footer.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaInstagram size={18} />, href: "https://instagram.com/acm.ajce", label: "Instagram", color: "#E1306C" },
  { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com/company/acm-ajce", label: "LinkedIn", color: "#0A66C2" },
  { icon: <FaXTwitter size={18} />, href: "https://twitter.com/acm_ajce", label: "X (Twitter)", color: "#30a9dd" },
  { icon: <FaGithub size={18} />, href: "https://github.com/acm-ajce", label: "GitHub", color: "#ffffff" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Decorative top border with dynamic color */}
      <div className={styles.topLine} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="ACM Logo"
              width={32}
              height={32}
              style={{ objectFit: 'contain' }}
            />
            <span className={styles.logoText}>
              <span className="gradient-text">ACM</span>
              <span className={styles.logoSub}> TechTalk</span>
            </span>
          </div>
          <p className={styles.brandDesc}>
            Flagship technical symposium hosted by ACM Student Chapter at Amal Jyothi College of Engineering, Kerala.
          </p>
          <div className={styles.socials} role="list" aria-label="Social media links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`ACM AJCE on ${s.label}`}
                role="listitem"
                style={{ "--social-color": s.color } as React.CSSProperties}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links column */}
        <nav aria-label="Footer navigation" className={styles.navCol}>
          <p className={styles.colHeading}>Quick Links</p>
          <ul className={styles.linkList} role="list">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNavClick(l.href)}
                  className={styles.footerLinkButton}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Event details column */}
        <div className={styles.infoCol}>
          <p className={styles.colHeading}>Event Details</p>
          <ul className={styles.infoList} role="list">
            <li>
              <span className={styles.infoLabel}>Date</span>
              <span className={styles.infoValue}>August 13, 2026</span>
            </li>
            <li>
              <span className={styles.infoLabel}>Venue</span>
              <span className={styles.infoValue}>AJCE, Kanjirappally, Kerala</span>
            </li>
            <li>
              <span className={styles.infoLabel}>Organized by</span>
              <span className={styles.infoValue}>ACM Student Chapter</span>
            </li>
            <li>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:acm@ajce.in" className={styles.footerLink}>
                acm@ajce.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer base metadata */}
      <div className={styles.bottomWrapper}>
        <div className={`container ${styles.bottom}`}>
          <p className={styles.copyright}>
            © 2026 ACM Student Chapter, Amal Jyothi College of Engineering. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>❤️</span> for TechTalk 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
