"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import TitleSection from "./components/TitleSection";
import CareerSection from "./components/CareerSection";
import WorkSection from "./components/WorkSection";
import MoreWorksSection from "./components/MoreWorksSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto py-12">
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
          <TitleSection />
        </SwiperSlide>
        <SwiperSlide>
          <CareerSection />
        </SwiperSlide>
        <SwiperSlide>
          <WorkSection />
        </SwiperSlide>
        <SwiperSlide>
          <MoreWorksSection />
        </SwiperSlide>
        <SwiperSlide>
          <ContactSection />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
