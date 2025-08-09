//The HomePage
"use client";

import { useRef } from "react";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import JoinMovement from "@/components/sections/JoinMovement";
import LottoScroll from "@/components/sections/LottoScroll";
import Tradition from "@/components/sections/Tradition";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    "about-us": useRef<HTMLElement>(null),
    "what-we-do": useRef<HTMLElement>(null),
    "inside-agilitas": useRef<HTMLElement>(null),
    "join-the-team": useRef<HTMLElement>(null),
    media: useRef<HTMLElement>(null),
  };

  return (
    <main
      ref={mainRef}
      className="h-screen overflow-y-auto scrollbar-hidden relative"
    >
      <Navbar sectionRefs={sectionRefs} scrollContainerRef={mainRef} />

      <section ref={sectionRefs["about-us"]}>
        <Hero />
      </section>

      <section ref={sectionRefs["what-we-do"]}>
        <Tradition />
      </section>

      <section ref={sectionRefs["inside-agilitas"]}>
        <LottoScroll />
      </section>

      <section ref={sectionRefs["join-the-team"]}>
        <Events />
      </section>

      <section ref={sectionRefs["media"]}>
        <JoinMovement />
      </section>

      <Footer />
    </main>
  );
}
