'use client';

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2020",
    content: [
      "군인의 품격 인터뷰 촬영, 비하인드 촬영",
      "떡갈비 연구소 브랜드 사진 촬영",
      "JOA사진학원 시간강사 3개월"
    ],
    position: "left"
  },
  {
    year: "2020~2021",
    content: [
      "김재훈스튜디오 현장지원 어시스트 1년"
    ],
    position: "right"
  },
  {
    year: "2021",
    content: [
      "라이팅그래피 조수 1년"
    ],
    position: "left"
  },
  {
    year: "2022",
    content: [
      "콘텐츠 진홍원 전시 CROSSED THE LINE 조명 감독"
    ],
    position: "right"
  },
  {
    year: "2020~2022",
    content: [
      "상업 광고 연출팀, 제작팀, 촬영팀, 조명팀 다수"
    ],
    position: "left"
  },
  {
    year: "2019~2023",
    content: [
      "단편영화 그림, 처음만난사이, 탈나다 조감독",
      "단편영화 Recipe, IN DREAM, 수범이, 3개월 촬영감독"
    ],
    position: "right"
  },
  {
    year: "2020~2023",
    content: [
      "단편영화 HARVEST, 종지부는 사랑으로 찍어요 외 10개 이상 조명감독",
      "M/V 사랑거지 조명감독 외 10개 이상 작품 참여"
    ],
    position: "left"
  }
];

export default function CareerSection() {
  return (
    <div className="min-h-screen flex flex-col gap-y-8 items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8"
      >
        경력
      </motion.h2>
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300/30 -translate-x-1/2 z-0" />
        {/* Timeline items vertically */}
        <div className="flex flex-col space-y-12 relative z-10">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-full"
            >
              {item.position === "left" ? (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white/10 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                      {item.content.map((text, i) => (
                        <p key={i} className="text-lg">{text}</p>
                      ))}
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-white shadow flex-shrink-0" />
                  <div className="w-1/2 pl-8"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-white shadow flex-shrink-0" />
                  <div className="w-1/2 pl-8">
                    <div className="bg-white/10 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                      {item.content.map((text, i) => (
                        <p key={i} className="text-lg">{text}</p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 