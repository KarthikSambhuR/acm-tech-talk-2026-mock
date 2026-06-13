"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, Moon, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="ACM TechTalk 2026 home">
          <Image
            src="/logo.svg"
            alt="ACM Logo"
            width={32}
            height={32}
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            <span className="gradient-text">ACM</span>
            <span className={styles.logoSub}> TechTalk</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className={styles.navLinks} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={styles.navLink}
                onClick={() => handleNavClick(link.href)}
                aria-label={`Go to ${link.label} section`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Theme toggle */}
          {mounted && (
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className={styles.themeIcon}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>
          )}

          {/* Register CTA */}
          <a
            href="#contact"
            className={`btn-primary ${styles.registerBtn}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            <span>Register Now</span>
            <span className="btn-arrow">
              <ArrowRight size={14} />
            </span>
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            className={styles.mobileLink}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        <a
          href="#contact"
          className={`btn-primary ${styles.mobileRegister}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
        >
          <span>Register Now</span>
          <span className="btn-arrow">
            <ArrowRight size={14} />
          </span>
        </a>
      </div>
    </nav>
  );
}
