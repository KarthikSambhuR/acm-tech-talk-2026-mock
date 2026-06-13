"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email Support",
    value: "acm@ajce.in",
    href: "mailto:acm@ajce.in",
  },
  {
    icon: <Phone size={18} />,
    label: "Contact Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <MapPin size={18} />,
    label: "Symposium Venue",
    value: "Amal Jyothi College of Engineering, Kanjirappally, Kerala, 686 518",
    href: "https://maps.google.com/?q=9.528418391898594,76.82238790151102",
  },
];

const socialLinks = [
  { icon: <FaInstagram size={18} />, label: "Instagram", href: "https://instagram.com/acm.ajce", color: "#E1306C" },
  { icon: <FaLinkedinIn size={18} />, label: "LinkedIn", href: "https://linkedin.com/company/acm-ajce", color: "#0A66C2" },
  { icon: <FaXTwitter size={18} />, label: "X (Twitter)", href: "https://twitter.com/acm_ajce", color: "#30a9dd" },
  { icon: <FaGithub size={18} />, label: "GitHub", href: "https://github.com/acm-ajce", color: "#ffffff" },
  { icon: <FaYoutube size={18} />, label: "YouTube", href: "https://youtube.com/@acm-ajce", color: "#FF0000" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact} aria-label="Contact section">
      {/* Dynamic Background aura effects */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">Connect With Us</span>
          <h2>
            Join Us at <span className="serif-italic">TechTalk</span> 2026
          </h2>
          <p>
            Secure your spot at Kerala&apos;s premier tech symposium, ask questions, or explore collaboration opportunities.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Info & Map */}
          <motion.div className={styles.infoCol} variants={itemVariants}>
            <div className={styles.infoGlassCard}>
              <h3 className={styles.infoHeading}>Contact Information</h3>
              <p className={styles.infoText}>Feel free to reach out to our team via email, phone, or visit our campus.</p>

              <ul className={styles.contactList} aria-label="Contact details list">
                {contactInfo.map((item) => (
                  <li key={item.label} className={styles.contactItem}>
                    <div className={styles.contactIcon} aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className={styles.contactDetails}>
                      <p className={styles.contactLabel}>{item.label}</p>
                      <a
                        href={item.href}
                        className={styles.contactValue}
                        target={item.label === "Symposium Venue" ? "_blank" : undefined}
                        rel={item.label === "Symposium Venue" ? "noopener noreferrer" : undefined}
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social links revamped to round glass buttons */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialHeading}>Follow ACM AJCE</h4>
                <div className={styles.socialLinks} role="list" aria-label="Social media handles">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className={styles.socialLink}
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
            </div>

            {/* Google map embedding exact coordinates */}
            <div className={styles.mapWrap}>
              <iframe
                title="Amal Jyothi College of Engineering exact location coordinates"
                src="https://maps.google.com/maps?q=9.528418391898594,76.82238790151102&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="230"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing AJCE location coords"
              />
            </div>
          </motion.div>

          {/* Right Column - Message Form Card */}
          <motion.div className={styles.formCol} variants={itemVariants}>
            <div className={styles.formCard}>
              <h3 className={styles.formHeading}>Send Us a Message</h3>
              <p className={styles.formSubtext}>Fill out the form below and our organizing team will get back to you shortly.</p>

              {submitted ? (
                <div className={styles.successMsg} role="alert" aria-live="polite">
                  <span className={styles.successIcon}>✓</span>
                  <p>Message sent successfully! We&apos;ll reply soon.</p>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                  noValidate
                >
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={styles.input}
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={styles.input}
                      placeholder="your.email@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="What would you like to ask or discuss?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      aria-required="true"
                      rows={4}
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", padding: "6px 6px 6px 28px", marginTop: "10px" }}
                    aria-label="Submit contact form"
                  >
                    <span>Send Message</span>
                    <span className="btn-arrow">
                      <Send size={14} aria-hidden="true" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
