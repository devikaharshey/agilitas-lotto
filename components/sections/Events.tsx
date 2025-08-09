"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type Event = {
  title: string;
  date: string;
  desc: string;
  img: string;
};

//Event Card
function EventCard({ event, isFirst }: { event: Event; isFirst: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      style={{
        clipPath: "polygon(0 0, 86% 0, 100% 100%, 14% 100%)",
        marginLeft: isFirst ? "0" : undefined,
      }}
      className={`relative flex-shrink-0 shadow-lg overflow-visible bg-[#1D1BFB] ${
        isFirst ? "ml-0" : "md:-ml-7 sm:ml-0"
      }`}
      id="join-the-team"
    >
      <motion.div
        className={`
          w-[280px] h-[210px] min-w-[240px]
          sm:w-[350px] sm:h-[265px] sm:min-w-[300px]
          md:w-[400px] md:h-[300px] md:min-w-[340px]
          lg:w-[450px] lg:h-[340px] lg:min-w-[380px]
          relative px-3 sm:px-4 md:px-8
        `}
        style={{ clipPath: "polygon(0 0, 86% 0, 100% 100%, 14% 100%)" }}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image
          src={event.img}
          alt={event.title}
          fill
          className="object-cover pointer-events-none"
        />

        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-5 -5 110 110"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="0,0 86,0 100,100 14,100"
            stroke="#0099ff"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
          />
        </motion.svg>
      </motion.div>

      <div
        className="
          absolute bottom-6
          left-12
          sm:left-10
          md:left-20
          right-auto
          max-w-[75%]
          text-white flex flex-col items-start justify-center gap-1 sm:gap-2 text-left
        "
        style={{
          textShadow: `
            8px 8px 20px rgba(0, 0, 0, 0.85),
            -8px 8px 20px rgba(0, 0, 0, 0.85),
            8px -8px 20px rgba(0, 0, 0, 0.85),
            -8px -8px 20px rgba(0, 0, 0, 0.85),
            0 0 32px rgba(0, 0, 0, 0.75)
          `,
        }}
      >
        <h3 className="text-sm sm:text-xl md:text-3xl">{event.title}</h3>
        <p className="text-sm sm:text-xl md:text-3xl">{event.date}</p>
        <p className="text-[10px] sm:text-[13px] md:text-[15px] opacity-90">
          {event.desc}
        </p>
      </div>
    </motion.div>
  );
}

//"Events" Section
export default function Events() {
  const events: Event[] = [
    {
      title: "Run Club Meetup",
      date: "Jun 25, 10 am",
      desc: "Join local runners for a 5K, gear trials, and post-run smoothies.",
      img: "/events/run.png",
    },
    {
      title: "Custom Kicks Day",
      date: "Jun 26, 6 PM",
      desc: "Design your pair. Add your name. Walk out with a one-of-one.",
      img: "/events/kicks.png",
    },
    {
      title: "Football Weekend",
      date: "Jun 28-29, 11 am",
      desc: "Join us for skill challenges, mini matches, & the launch of our latest turf-ready kicks.",
      img: "/events/football.png",
    },
  ];

  return (
    <section className="bg-white py-14">
      <h2 className="text-center text-4xl font-bold mb-10">Coming Soon</h2>

      <div className="flex overflow-x-auto px-4 md:px-0 md:justify-center overflow-y-hidden md:overflow-x-visible scrollbar-hidden">
        {events.map((event, idx) => (
          <EventCard key={idx} event={event} isFirst={idx === 0} />
        ))}
      </div>
    </section>
  );
}
