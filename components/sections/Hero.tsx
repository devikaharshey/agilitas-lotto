//Hero Section
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const blockRef = useRef(null);
  const isInView = useInView(blockRef, {
    once: false,
    margin: "-100px",
  });

  return (
    <>
      <section
        className="relative w-full h-[404px] sm:h-[500px] md:h-screen overflow-hidden"
        id="about-us"
      >
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center z-0 hidden md:block"
          priority
        />

        <Image
          src="/hero-mobile.png"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center z-0 block md:hidden"
          priority
        />

        <div className="z-10 absolute top-[30%] right-4 sm:right-6 md:inset-0 md:flex md:items-center md:justify-end md:px-12 lg:px-24">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold drop-shadow-xl text-right leading-tight max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-none">
            A Whole Lotto Joy
          </h1>
        </div>
      </section>

      <div
        ref={blockRef}
        className="relative w-full h-[100px] sm:h-[140px] md:h-[190px] z-20 -mt-[100px] sm:-mt-[100px] md:-mt-[50px] overflow-hidden"
      >
        <div className="relative w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute right-0 top-0 h-full w-[85%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[1181px] z-10"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              backgroundColor: "#002E2E",
            }}
          >
            <div className="absolute inset-0 left-[6%] sm:left-[10%] md:left-[120px] flex items-center px-8 sm:px-6 md:px-12 lg:px-20">
              <p className="font-medium text-white text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-[85%] md:max-w-[800px]">
                Lotto is stepping into its new era with Agilitas as its compass.
                <br />A journey that is familiar, reborn with a new purpose.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 top-0 h-full w-[15%] sm:w-[12%] md:w-[20%] lg:w-[221px] z-20"
            style={{
              clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
              backgroundColor: "#001FFF",
            }}
          />
        </div>
      </div>
    </>
  );
}
