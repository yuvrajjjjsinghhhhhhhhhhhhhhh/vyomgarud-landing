import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-[#0f1214]">
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="text-5xl md:text-6xl font-extrabold text-white"
      >
        Vyom<span className="text-[#ff7b00]">Garud</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-lg text-gray-300 max-w-2xl"
      >
        Precision-engineered UAV systems built for mission-critical operations.
        Reliable autonomy and hardened performance when it matters most.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#contact"
          className="bg-[#ff7b00] text-black px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:bg-[#ffa53e] transition"
        >
          Request Demo
        </a>
        <a
          href="#capabilities"
          className="border border-gray-600 text-gray-200 px-6 py-3 rounded-lg text-sm hover:bg-white hover:text-black transition"
        >
          Explore
        </a>
      </motion.div>
    </section>
  );
}
