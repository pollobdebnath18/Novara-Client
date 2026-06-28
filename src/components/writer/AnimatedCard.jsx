"use client";

import { motion } from "motion/react";

export default function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="
      rounded-xl
      bg-white/80
      border
      px-4
      py-3
      shadow-sm
      "
    >
      {children}
    </motion.div>
  );
}
