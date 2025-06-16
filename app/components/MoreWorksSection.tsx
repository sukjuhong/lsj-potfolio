"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const works = [
  {
    id: 1,
    title: "작품 1",
    color: "bg-blue-500",
    line: "top",
  },
  {
    id: 2,
    title: "작품 2",
    color: "bg-green-500",
    line: "top",
  },
  {
    id: 3,
    title: "작품 3",
    color: "bg-purple-500",
    line: "top",
  },
  {
    id: 4,
    title: "작품 4",
    color: "bg-yellow-500",
    line: "top",
  },
  {
    id: 5,
    title: "작품 5",
    color: "bg-red-500",
    line: "top",
  },
  {
    id: 6,
    title: "작품 6",
    color: "bg-pink-500",
    line: "middle",
  },
  {
    id: 7,
    title: "작품 7",
    color: "bg-indigo-500",
    line: "middle",
  },
  {
    id: 8,
    title: "작품 8",
    color: "bg-orange-500",
    line: "middle",
  },
  {
    id: 9,
    title: "작품 9",
    color: "bg-teal-500",
    line: "middle",
  },
  {
    id: 10,
    title: "작품 10",
    color: "bg-cyan-500",
    line: "middle",
  },
  {
    id: 11,
    title: "작품 11",
    color: "bg-emerald-500",
    line: "bottom",
  },
  {
    id: 12,
    title: "작품 12",
    color: "bg-violet-500",
    line: "bottom",
  },
  {
    id: 13,
    title: "작품 13",
    color: "bg-rose-500",
    line: "bottom",
  },
  {
    id: 14,
    title: "작품 14",
    color: "bg-sky-500",
    line: "bottom",
  },
  {
    id: 15,
    title: "작품 15",
    color: "bg-lime-500",
    line: "bottom",
  },
];

const ITEM_WIDTH = 256;
const GAP = 16;

const InfiniteScroll = ({
  direction,
  items,
}: {
  direction: "left" | "right";
  items: typeof works;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedItems = [...items, ...items, ...items];
  const duplicatedWidth = duplicatedItems.length * (ITEM_WIDTH + GAP);
  const moveBy = duplicatedWidth / 3; // 실제 보여줄 구간 길이

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className={`flex gap-x-4 ${
          direction === "right" ? "flex-row-reverse" : ""
        }`}
        initial={{ x: direction === "left" ? -2 * moveBy : 2 * moveBy }}
        animate={{ x: direction === "left" ? -moveBy : moveBy }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((work, index) => (
          <Link href={`/works/${work.id}`} key={`${work.id}-${index}`}>
            <motion.div
              className={`
                w-64 h-42
                ${work.color} rounded-lg shadow-lg
                flex items-center justify-center cursor-pointer
              `}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white text-xl font-bold">{work.title}</h3>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default function MoreWorksSection() {
  const topWorks = works.filter((work) => work.line === "top").slice(0, 5);
  const middleWorks = works
    .filter((work) => work.line === "middle")
    .slice(0, 5);
  const bottomWorks = works
    .filter((work) => work.line === "bottom")
    .slice(0, 5);

  return (
    <div className="h-full flex flex-col gap-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        작품 목록
      </motion.h1>
      <div className="flex flex-col gap-y-8">
        <InfiniteScroll direction="right" items={topWorks} />
        <InfiniteScroll direction="left" items={middleWorks} />
        <InfiniteScroll direction="right" items={bottomWorks} />
      </div>
    </div>
  );
}
