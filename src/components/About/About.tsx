"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Users, Mic, GraduationCap, Award } from "lucide-react";
import styles from "./About.module.css";

const stats = [
  { icon: <Mic size={24} />, value: "10+", label: "Expert Speakers" },
  { icon: <Users size={24} />, value: "500+", label: "Attendees" },
  { icon: <GraduationCap size={24} />, value: "8+", label: "Sessions" },
  { icon: <Award size={24} />, value: "5+", label: "Years of ACM AJCE" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className={styles.about} aria-label="About the event">
      <div className={`container ${styles.inner}`}>
        {/* Text column */}
        <motion.div
          className={styles.textCol}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={itemVariants}>
            About the Event
          </motion.span>

          <motion.h2 className={styles.heading} variants={itemVariants}>
            Where Technology{" "}
            <span className="serif-italic">Meets</span> Ambition
          </motion.h2>

          <motion.p className={styles.body} variants={itemVariants}>
            ACM TechTalk 2026 is the flagship annual technical symposium hosted
            by the ACM Student Chapter at Amal Jyothi College of Engineering,
            Kanjirappally. It is a premier platform for students, professionals,
            and tech enthusiasts to converge, collaborate, and celebrate
            innovation.
          </motion.p>

          <motion.p className={styles.body} variants={itemVariants}>
            This year's edition promises a curated lineup of talks from industry
            veterans, hands-on workshops, and exciting networking opportunities
            , all designed to ignite curiosity and foster the next generation of
            technology leaders in Kerala and beyond.
          </motion.p>

          <motion.div className={styles.highlights} variants={itemVariants}>
            {["Industry Expert Talks", "Hands-On Workshops", "Networking Sessions", "Q&A Panels"].map(
              (h) => (
                <div className={styles.highlightItem} key={h}>
                  <span className={styles.checkIcon} aria-hidden="true">✦</span>
                  <span>{h}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Stats column */}
        <motion.div
          className={styles.statsCol}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              variants={itemVariants}
            >
              <div className={styles.statIcon} aria-hidden="true">
                {stat.icon}
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
