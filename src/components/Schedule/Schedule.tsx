"use client";

import { motion, type Variants } from "framer-motion";
import { Clock, User, Terminal, Coffee, Mic, Sparkles } from "lucide-react";
import styles from "./Schedule.module.css";

type SessionType = "Talk" | "Workshop" | "Panel" | "Break";

interface Session {
  time: string;
  title: string;
  speaker?: string;
  type: SessionType;
  description?: string;
}

const sessions: Session[] = [
  {
    time: "09:00 AM",
    title: "Inauguration & Welcome Address",
    speaker: "ACM AJCE Faculty Advisor",
    type: "Talk",
    description: "Official inauguration of ACM TechTalk 2026 with a welcome address and keynote introduction.",
  },
  {
    time: "09:45 AM",
    title: "Building for Scale: Lessons from Google",
    speaker: "Arjun Krishnaswamy",
    type: "Talk",
    description: "Deep dive into distributed system design patterns used at Google-scale infrastructure.",
  },
  {
    time: "11:00 AM",
    title: "The Future of AI: From Research to Reality",
    speaker: "Priya Nambiar",
    type: "Talk",
    description: "Exploring how cutting-edge AI research translates into real-world products and services.",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break & Networking",
    type: "Break",
    description: "Connect with fellow attendees, speakers, and industry professionals.",
  },
  {
    time: "01:30 PM",
    title: "Hands-On: Ethical Hacking Workshop",
    speaker: "Rajesh Menon",
    type: "Workshop",
    description: "Interactive workshop covering penetration testing basics, CTF challenges, and real-world security scenarios.",
  },
  {
    time: "03:00 PM",
    title: "Open Panel: Tech Careers in 2026",
    speaker: "All Speakers",
    type: "Panel",
    description: "An open Q&A panel discussion on career paths, emerging tech trends, and advice for students.",
  },
  {
    time: "04:30 PM",
    title: "Closing Ceremony & Awards",
    speaker: "ACM AJCE Chapter",
    type: "Talk",
    description: "Certificates, prizes, and closing remarks from the organizing committee.",
  },
];

const typeIcons: Record<SessionType, React.ComponentType<{ size?: number; className?: string }>> = {
  Talk: Mic,
  Workshop: Terminal,
  Panel: Sparkles,
  Break: Coffee,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Schedule() {
  return (
    <section id="schedule" className={styles.schedule} aria-label="Event schedule">
      <div className={`container ${styles.inner}`}>
        <div className="section-header">
          <span className="section-label">Interactive Timeline</span>
          <h2>
            A Day of <span className="serif-italic">Discovery</span>
          </h2>
          <p>
            Packed with inspiring talks, hands-on workshops, and invaluable
            networking sessions on August 13, 2026.
          </p>
        </div>

        <motion.div
          className={styles.timelineContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sessions.map((session, i) => {
            const Icon = typeIcons[session.type];
            return (
              <motion.div
                key={i}
                className={styles.timelineRow}
                variants={itemVariants}
              >
                {/* Left Side: Time block */}
                <div className={styles.timeBlock}>
                  <div className={styles.timeIndicator}>
                    <Clock size={14} className={styles.timeIcon} />
                    <span>{session.time}</span>
                  </div>
                </div>

                {/* Central Track & Indicator Node */}
                <div className={styles.trackColumn}>
                  <div className={`${styles.node} ${styles[session.type.toLowerCase()]}`}>
                    <Icon size={16} />
                  </div>
                  <div className={styles.line} />
                </div>

                {/* Right Side: Glassmorphic Session Card */}
                <div className={styles.cardColumn}>
                  <article className={styles.card}>
                    <div className={styles.cardHeader}>
                      <span className={`${styles.typeBadge} ${styles[session.type.toLowerCase() + "Badge"]}`}>
                        {session.type}
                      </span>
                    </div>

                    <h3 className={styles.title}>{session.title}</h3>

                    {session.speaker && (
                      <div className={styles.speakerBlock}>
                        <User size={14} className={styles.speakerIcon} />
                        <span className={styles.speakerName}>{session.speaker}</span>
                      </div>
                    )}

                    {session.description && (
                      <p className={styles.description}>{session.description}</p>
                    )}
                  </article>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
