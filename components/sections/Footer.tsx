//Footer Section
"use client";

import { Compass, Instagram, LinkedinIcon, Youtube } from "lucide-react";
import Image from "next/image";
import { motion, useInView, easeInOut } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: easeInOut },
    },
  });

  return (
    <footer className="text-white text-sm mt-30 overflow-hidden" ref={ref}>
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="bg-[#0A0A0A] w-full"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row py-12 px-4 sm:px-6 lg:px-8 gap-12">
          <motion.div
            variants={fadeIn(0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-col gap-6 lg:w-1/3"
          >
            <Image
              src="/logo-main.png"
              alt="Agilitas"
              width={180}
              height={60}
              className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
            />
            <div className="flex items-center gap-4 text-white flex-wrap">
              <span className="text-white text-lg whitespace-nowrap">
                Follow us
              </span>
              <Link
                href="https://www.linkedin.com/company/agilitas-sport/"
                target="_blank"
              >
                <LinkedinIcon size={22} />
              </Link>
              <Link
                href="https://www.instagram.com/agilitas_sports/"
                target="_blank"
              >
                <Instagram size={22} />
              </Link>
              <Youtube size={22} />
            </div>
            <h2 className="text-white text-lg lg:whitespace-nowrap">
              Comprehensively building the entire value chain from manufacturing
              to retail
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-8 lg:w-1/3 text-md md:text-lg text-white"
          >
            <div className="flex flex-col gap-6">
              <a href="#about-us" className="hover:underline whitespace-nowrap">
                About Us
              </a>
              <a
                href="#what-we-do"
                className="hover:underline whitespace-nowrap"
              >
                What we do
              </a>
              <a
                href="#inside-agilitas"
                className="hover:underline whitespace-nowrap"
              >
                Inside Agilitas
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <a
                href="#join-the-team"
                className="hover:underline whitespace-nowrap"
              >
                Join the Team
              </a>
              <a href="#media" className="hover:underline whitespace-nowrap">
                Media
              </a>
              <a href="#" className="hover:underline whitespace-nowrap">
                Blogs (Coming Soon)
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-700 pt-6 lg:pt-0 lg:pl-12"
          >
            <h1 className="text-xl mb-6 whitespace-nowrap">
              Stay in the Loop. Move with Us.
            </h1>
            <div className="flex flex-col md:flex-row">
              {/* Email */}
              <div className="mb-6 md:mb-0 md:w-1/2">
                <span className="font-medium block">Email</span>
                <a
                  href="mailto:info@agilitas.in"
                  className="underline text-white break-all"
                >
                  info@agilitas.in
                </a>
              </div>

              <div className="flex flex-col gap-2 md:w-1/2 md:ml-12">
                <div>
                  <span className="font-medium block">Corporate address</span>
                  <address className="not-italic text-white leading-relaxed">
                    Roshini Tech Hub,
                    <br />
                    PFS Club House,
                    <br />
                    Marathahalli Main Rd,
                    <br />
                    Lakshminarayana Pura,
                    <br />
                    EPIP Zone, Chinnapanna Halli,
                    <br />
                    Bengaluru, Karnataka 560037
                  </address>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 underline text-white mt-2"
                >
                  <Compass width={14} height={14} />
                  Get directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn(0.5)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="bg-white"
      >
        <div className="max-w-[1280px] mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-start text-black text-lg gap-2">
          <span>© 2025 Agilitas All rights reserved.</span>
          <div className="space-x-2">
            <a href="#" className="underline">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
