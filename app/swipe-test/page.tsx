"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Mousewheel } from "swiper/modules";

export default function SwiperTestPage() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Mousewheel]}
      className="h-screen"
    >
      <SwiperSlide>
        <div className="h-full" style={{ backgroundColor: "#f8b195" }}>
          Page 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full" style={{ backgroundColor: "#f67280" }}>
          Page 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full" style={{ backgroundColor: "#c06c84" }}>
          Page 3
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
