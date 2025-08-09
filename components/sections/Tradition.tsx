//Tradition Section
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Sport & Swagger",
    desc: "Function first, fashion–always.",
    image: "/cards/card-1.png",
  },
  {
    title: "Culture in Motion",
    desc: "Rewriting culture through rhythm, rebellion and raw expression.",
    image: "/cards/card-2.png",
  },
  {
    title: "Live in Motion",
    desc: "Made to move in all the ways that feel like you.",
    image: "/cards/card-3.png",
  },
];

export default function Tradition() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="w-full px-6 md:px-20 py-20 bg-white text-black text-center"
      id="what-we-do"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className={isMobile ? "mb-10" : "mb-16"}
      >
        {isMobile ? (
          <>
            <h2 className="text-3xl font-semibold">Our vision for Lotto</h2>
            <p className="text-base text-gray-600 mt-2">
              Reignite a legacy brand with new energy, rooted in:
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Tradition in Transition
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              Reimagining a legacy fit to move with you
            </p>
          </>
        )}
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-12">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-start w-full sm:w-[300px] md:w-[320px] xl:w-[360px] cursor-pointer"
          >
            <motion.div
              className="relative w-full aspect-[7/8]"
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <motion.div
                className="relative w-full aspect-[7/8] group"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div
                  className="w-full h-full"
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover pointer-events-none"
                  />
                </div>

                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="-5 -5 110 110"
                  preserveAspectRatio="none"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <defs>
                    <filter
                      id="glow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="2.5" result="blur" />{" "}
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <polygon
                    points="10,0 100,0 90,100 0,100"
                    stroke="#FF004F"
                    strokeWidth="1.5"
                    fill="none"
                    filter="url(#glow)"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>

            <div className="mt-6 w-[250px] text-center mx-auto md:mx-10">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
