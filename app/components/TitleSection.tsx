"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function TitleSection() {
  return (
    <div className="min-h-full flex flex-col items-start justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("이성연 포트폴리오").start();
          }}
        />
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        직업
      </motion.p>
    </div>
  );
}
