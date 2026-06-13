"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";
import styles from "./Speakers.module.css";

const speakers = [
  {
    id: 1,
    name: "Arjun Krishnaswamy",
    designation: "Senior Software Engineer",
    company: "Google India",
    image: "/speaker1.webp",
    bio: "10+ years crafting scalable distributed systems. Core contributor to multiple open-source projects at Google.",
    topics: ["Cloud Architecture", "Distributed Systems"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 2,
    name: "Priya Nambiar",
    designation: "AI Research Lead",
    company: "Microsoft Research",
    image: "/speaker2.webp",
    bio: "Pioneer in applied machine learning and NLP. Former researcher at IIT Madras with 20+ published papers.",
    topics: ["Machine Learning", "NLP"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Rajesh Menon",
    designation: "Chief Security Officer",
    company: "InfoSec Labs",
    image: "/speaker3.webp",
    bio: "Ethical hacker turned CSO. Helps Fortune 500 companies build impenetrable security architectures.",
    topics: ["Cybersecurity", "Zero Trust"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Dr. Anjali Bose",
    designation: "Quantum Research Scientist",
    company: "IBM Quantum Labs",
    image: "/speaker2.webp",
    bio: "Passionate about computing algorithms. Working to bridge the gap between classical complexity theory and quantum states.",
    topics: ["Quantum Computing", "Cryptography"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 5,
    name: "Siddarth Nair",
    designation: "VP of Engineering",
    company: "Razorpay India",
    image: "/speaker1.webp",
    bio: "Architects scalable digital transaction networks handling millions of real-time queries.",
    topics: ["Financial Tech", "API Integration"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 6,
    name: "Meera Joseph",
    designation: "Developer Relations Advocate",
    company: "AWS India",
    image: "/speaker3.webp",
    bio: "Enjoys teaching cloud computing and container orchestration. Promotes modern DevOps best practices.",
    topics: ["AWS Systems", "DevOps Culture"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    id: 7,
    name: "Gautham S",
    designation: "Core Architect",
    company: "Ethereum Foundation",
    image: "/speaker1.webp",
    bio: "Designing protocols for high-throughput consensus engines and decentralized data layers.",
    topics: ["Smart Contracts", "Consensus Models"],
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(3);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="speakers" className={styles.speakers} aria-label="Speakers">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">Featured Speakers</span>
          <h2>
            Voices That <span className="serif-italic">Inspire</span>
          </h2>
          <p>
            Learn from the best: industry leaders, researchers, and innovators
            who are shaping the future of technology.
          </p>
        </motion.div>

        {/* Curved Arch Deck Carousel */}
        <div className={styles.carouselContainer}>
          {speakers.map((speaker, index) => {
            const diff = index - activeIndex;
            const isActive = index === activeIndex;
            const zIndex = 10 - Math.abs(diff);
            const opacity = isActive ? 1 : 0.65;
            
            // Curved transformation
            const transform = `translateX(${diff * 220}px) rotateY(${diff * -24}deg) translateZ(${Math.abs(diff) * -80}px) translateY(${Math.abs(diff) * 20}px)`;

            return (
              <div
                key={speaker.id}
                className={styles.cardWrapper}
                style={{ transform, zIndex, opacity }}
                onClick={() => setActiveIndex(index)}
              >
                <article className={`${styles.card} ${isActive ? styles.cardActive : ""}`}>
                  {/* Image takes full-bleed top portion */}
                  <div className={styles.imageWrap}>
                    <Image
                      src={speaker.image}
                      alt={`Portrait of ${speaker.name}`}
                      width={360}
                      height={250}
                      className={styles.image}
                      priority={index === 1}
                    />
                    <div className={styles.imageGlow} aria-hidden="true" />
                  </div>

                  {/* Info holds text body underneath */}
                  <div className={styles.info}>
                    <h3 className={styles.name}>{speaker.name}</h3>
                    <p className={styles.designation}>{speaker.designation}</p>
                    <p className={styles.company}>{speaker.company}</p>
                    <p className={styles.bio}>{speaker.bio}</p>

                    {/* Topics */}
                    <div className={styles.topics}>
                      {speaker.topics.map((t) => (
                        <span key={t} className={styles.topic}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Socials using brand icons */}
                    <div className={styles.social}>
                      <a href={speaker.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                        <FaLinkedinIn />
                      </a>
                      <a href={speaker.twitter} className={styles.socialLink} aria-label="Twitter">
                        <FaXTwitter />
                      </a>
                      <a href={speaker.github} className={styles.socialLink} aria-label="GitHub">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Center Controls */}
        <div className={styles.navigation}>
          <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous Speaker">
            <ChevronLeft size={20} />
          </button>
          <button className={styles.navBtn} onClick={handleNext} aria-label="Next Speaker">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
