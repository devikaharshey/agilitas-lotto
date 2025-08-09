"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

type Card = {
  img: string;
  text: string;
  href?: string;
};

const cardVariants = {
  rest: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -8 },
};

const svgVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

//Parallelogram Card
function ParallelogramCard({ card }: { card: Card }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("rest");
    }
  }, [inView, controls]);

  return (
    <motion.a
      href={card.href ?? "#"}
      ref={ref}
      initial="rest"
      animate={controls}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden flex-shrink-0 cursor-pointer select-none w-full sm:w-[90vw] sm:max-w-[600px] lg:w-[calc(50%-0.5rem)]"
      style={{
        clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%)",
        aspectRatio: "16 / 9",
        minWidth: "280px",
      }}
    >
      <Image
        src={card.img}
        alt={card.text}
        fill
        className="object-cover pointer-events-none"
        style={{ clipPath: "inherit" }}
      />

      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        variants={svgVariants}
        transition={{ duration: 0.3 }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          points="14,0 100,0 86,100 0,100"
          stroke="#FF6000"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        />
      </motion.svg>

      <div
        className="
          absolute inset-0 flex items-center justify-center px-8
          pointer-events-none
        "
        style={{
          textShadow: `
            3px 3px 6px rgba(0, 0, 0, 0.9),
            -3px 3px 6px rgba(0, 0, 0, 0.9),
            3px -3px 6px rgba(0, 0, 0, 0.9),
            -3px -3px 6px rgba(0, 0, 0, 0.9)
          `,
        }}
      >
        <h3
          className="
            text-white text-lg sm:text-lg md:text-2xl
            text-center underline decoration-white decoration-2 underline-offset-4
            max-w-xs sm:max-w-none
          "
          style={{ wordBreak: "break-word", whiteSpace: "normal" }}
        >
          {card.text}
        </h3>
      </div>
    </motion.a>
  );
}

//"Join Movement" Section
export default function JoinMovement() {
  const [isMobile, setIsMobile] = useState(false);

  const cards: Card[] = [
    {
      img: "/join/join1.png",
      text: "DISCOVER WHERE YOU FIT IN",
      href: "#discover",
    },
    {
      img: !isMobile ? "/join/join2.png" : "/join/join2-mobile.png",
      text: "VIBE WITH CREATORS WHO GET IT",
      href: "#vibe",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="py-14 px-4 sm:px-8 lg:px-16 max-w-[1200px] mx-auto"
      id="media"
    >
      <h2 className="text-center text-3xl font-bold mb-3">Join the movement</h2>
      <p className="text-center mb-10 text-sm sm:text-base max-w-xl mx-auto">
        The next era is in motion - are you in?
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-y-6 sm:gap-x-10 lg:gap-x-3">
        {cards.map((card, idx) => (
          <ParallelogramCard key={idx} card={card} />
        ))}
      </div>
    </section>
  );
}
