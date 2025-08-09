//Navbar Component
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About us", id: "about-us" },
  { label: "What we do", id: "what-we-do" },
  { label: "Inside Agilitas", id: "inside-agilitas" },
  { label: "Join the team", id: "join-the-team" },
  { label: "Media", id: "media" },
];

export default function Navbar({
  sectionRefs,
  scrollContainerRef,
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  scrollContainerRef: React.RefObject<HTMLElement | null>;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about-us");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      let currentId = active;
      const scrollPos = scrollContainer.scrollTop;
      const navbarHeight = document.querySelector("nav")?.clientHeight || 0;

      for (const item of navItems) {
        const ref = sectionRefs[item.id];
        if (ref?.current) {
          const sectionTop = ref.current.offsetTop - navbarHeight - 50;
          if (scrollPos >= sectionTop) {
            currentId = item.id;
          }
        }
      }
      if (currentId !== active) {
        setActive(currentId);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, active, scrollContainerRef]);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);

    setTimeout(() => {
      const ref = sectionRefs[id];
      if (ref?.current) {
        const scrollContainer = document.querySelector("main");
        const navbarHeight = document.querySelector("nav")?.clientHeight || 0;

        if (scrollContainer) {
          scrollContainer.scrollTo({
            top: ref.current.offsetTop - navbarHeight - 10,
            behavior: "smooth",
          });
        }
      }
    }, 50);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[9999] mt-6 mx-auto 
                 max-w-[90%] md:max-w-screen-xl 
                 bg-black md:bg-black/50 bg-opacity-60 
                 px-6 sm:px-10 py-3 flex items-center justify-between md:justify-evenly 
                 backdrop-blur-sm shadow-lg"
    >
      <div className="flex items-center gap-15 flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Agilitas Logo"
          width={120}
          height={32}
          priority
        />
        <div className="hidden lg:block w-px h-6 bg-gray-300" />
      </div>

      {!isMobile && (
        <ul className="flex gap-6 md:gap-10 text-white text-sm md:text-base font-light relative">
          {navItems.map((item) => (
            <li key={item.id} className="relative px-1">
              <button
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </button>
              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#42FF00] rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      )}

      {isMobile && menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 py-6 px-6 space-y-4 text-white text-base font-light">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer ${
                  active === item.id ? "text-[#42FF00] font-medium" : ""
                }`}
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
