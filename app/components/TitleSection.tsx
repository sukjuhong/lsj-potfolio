'use client';

import { motion } from "framer-motion";

export default function TitleSection() {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        이성연 portfolio
      </motion.h1>
    </div>
  );
} 