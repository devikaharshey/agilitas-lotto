//Lotto Scroll Section
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function LottoScrollSection() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: topRowRef, inView: topRowInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: bottomRowRef, inView: bottomRowInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      className="w-full flex flex-col lg:flex-row bg-black text-white"
      id="inside-agilitas"
    >
      <motion.div
        ref={textRef}
        variants={fadeUp}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        className="flex-1 flex items-center justify-center p-8 lg:p-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-md">
          Agilitas is turning up the volume on Lotto’s presence and creating
          momentum across markets. In India, it’s not just part of the
          conversation—it’s writing the whole playbook.
        </h2>
      </motion.div>

      <div className="flex-1 flex flex-col">
        <motion.div
          ref={topRowRef}
          variants={fadeUp}
          initial="hidden"
          animate={topRowInView ? "visible" : "hidden"}
          className="grid grid-cols-[326fr_517fr] w-full h-full max-h-[50%] min-h-[150px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/lotto/lotto1.png"
              alt="Lotto shoe 1"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/lotto/lotto2.png"
              alt="Lotto shoe 2"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          ref={bottomRowRef}
          variants={fadeUp}
          initial="hidden"
          animate={bottomRowInView ? "visible" : "hidden"}
          className="grid grid-cols-[517fr_326fr] w-full h-full max-h-[50%] min-h-[150px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/lotto/lotto3.png"
              alt="Lotto shoe 3"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/lotto/lotto4.png"
              alt="Lotto shoe 4"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
