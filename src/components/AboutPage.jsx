import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-[#0f1214]">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-white mb-8"
      >
        About <span className="text-[#ff7b00]">VyomGarud</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-3xl text-gray-300 leading-relaxed"
      >
        VyomGarud is a pioneer in UAV systems for defense and industrial use.
        Our drones are built for precision, endurance, and reliability in
        mission-critical operations. With cutting-edge flight technology,
        autonomous navigation, and real-time analytics, we redefine aerial
        intelligence.
      </motion.p>
    </section>
  );
}
