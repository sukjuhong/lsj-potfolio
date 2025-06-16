"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkSection() {
  return (
    <div className="h-full flex flex-col gap-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        대표작
      </motion.h1>
      <div className="flex gap-x-4 p-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-[400px] h-[600px]"
        >
          <Image
            src="/posters/poster_1.jpg"
            alt="영화 포스터"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 aspect-video bg-black/10 rounded-lg flex items-center justify-center"
        >
          <p className="text-lg text-gray-600">영상 준비중...</p>
        </motion.div>
      </div>
    </div>
  );
}
