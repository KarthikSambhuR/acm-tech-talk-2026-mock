"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Speakers from "@/components/Speakers/Speakers";
import Schedule from "@/components/Schedule/Schedule";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
