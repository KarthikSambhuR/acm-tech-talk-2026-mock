"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_DATE = new Date("2026-08-13T09:00:00+05:30");

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.countUnit}>
      <span className={styles.countValue}>{String(value).padStart(2, "0")}</span>
      <span className={styles.countLabel}>{label}</span>
    </div>
  );
}

const MARQUEE_ITEMS = [
  "Artificial Intelligence",
  "Distributed Systems",
  "Zero-Trust Security",
  "Cloud Native",
  "Web3 Infrastructure",
  "Next-Gen DevOps",
  "ACM TechTalk 2026",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home" aria-label="Hero section">
      <div className={styles.aura} aria-hidden="true" />

      <div className={styles.largeTitleContainer}>
        <motion.h1 
          className={styles.hugeTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>ACM</span>
          <span>TECHTALK</span>
        </motion.h1>
      </div>

      <div className={`${styles.heroContainer} container`}>
        <div className={styles.contentGrid}>
          <div className={styles.leftSide}>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Where Ideas <span className="serif-italic">Spark</span> Innovation
            </motion.p>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join Kerala&apos;s flagship technical symposium for a deep dive into intelligent systems, cyber resilience, distributed scale, and the people building tomorrow&apos;s web.
            </motion.p>

            <motion.div
              className={styles.meta}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.metaBadge}>
                <Calendar className={styles.metaIcon} size={16} aria-hidden="true" />
                <span>August 13, 2026</span>
              </div>
              <div className={styles.metaBadge}>
                <MapPin className={styles.metaIcon} size={16} aria-hidden="true" />
                <span>AJCE, Kerala</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                className="btn-primary"
                onClick={scrollToContact}
                aria-label="Register for ACM TechTalk 2026"
              >
                <span>Register Now</span>
                <span className="btn-arrow">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </button>

              <button
                className={styles.learnMoreButton}
                onClick={scrollToAbout}
                aria-label="Learn more about the event"
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              className={styles.countdown}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              aria-label="Countdown to event"
            >
              <p className={styles.countdownLabel}>Starts in</p>
              <div className={styles.countdownUnits}>
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className={styles.countSep} aria-hidden="true">:</span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className={styles.countSep} aria-hidden="true">:</span>
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
                <span className={styles.countSep} aria-hidden="true">:</span>
                <CountdownUnit value={timeLeft.seconds} label="Secs" />
              </div>
            </motion.div>
          </div>

          <div className={styles.rightStage} aria-hidden="true">
            <div className={styles.orbitRing} />
          </div>
        </div>
      </div>

      <div className={styles.absoluteRobot}>
        <div className={styles.robotWrapper}>
          <Image
            src="/robot.webp"
            alt="TechTalk Robot Mascot"
            width={750}
            height={900}
            className={styles.robotImg}
            priority
          />
          <div className={styles.robotShadow} />
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <svg viewBox="0 0 1400 300" className={styles.wavyMarquee}>
          <defs>
            <linearGradient id="marqueeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#30a9dd" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {/* Thick Background Looping Ribbon */}
          <path
            className={styles.wavyBackgroundPath}
            d="M-50 220C100 120 313 273 479 237L526 226C565 218 620 180 630 130 643 58 560 47 525 70 490 91 382 229 624 220L670 220C800 220 950 120 1100 220 1220 300 1360 140 1500 220"
          />
          {/* Thin track line on top of ribbon */}
          <path
            id="rollercoasterPath"
            className={styles.wavyPath}
            d="M-50 220C100 120 313 273 479 237L526 226C565 218 620 180 630 130 643 58 560 47 525 70 490 91 382 229 624 220L670 220C800 220 950 120 1100 220 1220 300 1360 140 1500 220"
          />
          <text className={styles.wavyText}>
            <textPath href="#rollercoasterPath" startOffset="0%">
              {MARQUEE_ITEMS.join("  ✦  ") + "  ✦  " + MARQUEE_ITEMS.join("  ✦  ") + "  ✦  " + MARQUEE_ITEMS.join("  ✦  ")}
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="35s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
