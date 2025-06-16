"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2020",
    content: [
      "군인의 품격 인터뷰 촬영, 비하인드 촬영",
      "떡갈비 연구소 브랜드 사진 촬영",
      "JOA사진학원 시간강사 3개월",
    ],
  },
  {
    year: "2020~2021",
    content: ["김재훈스튜디오 현장지원 어시스트 1년"],
  },
  {
    year: "2021",
    content: ["라이팅그래피 조수 1년"],
  },
  {
    year: "2022",
    content: ["콘텐츠 진홍원 전시 CROSSED THE LINE 조명 감독"],
  },
  {
    year: "2020~2022",
    content: ["상업 광고 연출팀, 제작팀, 촬영팀, 조명팀 다수"],
  },
  {
    year: "2019~2023",
    content: [
      "단편영화 그림, 처음만난사이, 탈나다 조감독",
      "단편영화 Recipe, IN DREAM, 수범이, 3개월 촬영감독",
    ],
  },
  {
    year: "2020~2023",
    content: [
      "단편영화 HARVEST, 종지부는 사랑으로 찍어요 외 10개 이상 조명감독",
      "M/V 사랑거지 조명감독 외 10개 이상 작품 참여",
    ],
  },
];

export default function CareerSection() {
  return (
    <div className="h-full flex flex-col gap-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        경력
      </motion.h2>
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-w-full bg-white/10 overflow-hidden"
        >
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-lg font-semibold">
                기간
              </th>
              <th className="px-6 py-4 text-left text-lg font-semibold">
                활동 내용
              </th>
            </tr>
          </thead>
          <tbody>
            {timelineItems.map((item) => (
              <tr key={item.year} className="border-t border-white/20">
                <td className="px-6 py-4 align-top whitespace-nowrap font-medium text-base w-32">
                  {item.year}
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc ml-4 space-y-1">
                    {item.content.map((text, i) => (
                      <li key={i} className="text-base">
                        {text}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
      </motion.table>
    </div>
  );
}
