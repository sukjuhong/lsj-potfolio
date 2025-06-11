'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkSection() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] w-full"
          >
            <Image
              src="/posters/poster_1.jpg"
              alt="영화 포스터"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/10 aspect-video rounded-lg flex items-center justify-center"
          >
            <p className="text-lg text-gray-600">영상 준비중...</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 