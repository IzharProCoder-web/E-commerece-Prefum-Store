/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MoveRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HomeHeroComp = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section className="relative">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #FF7BE5; width: 10px; height: 10px; margin: 0 5px;"></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={() => {
          controls.set({ y: 50, opacity: 0 });
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
          });
        }}
      >
        <SwiperSlide>
          <div
            className="cursor-pointer h-[600px] bg-cover bg-center flex flex-col items-start justify-center w-full font-['Gabarito'] sm:pl-[10%] pl-10 sm:pr-[50%]"
            style={{ backgroundImage: "url('/Image/hero-banner-2.jpg')" }}
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              className="text-start font-bold text-[40px] md:text-[40px] xl:text-[50px] text-[#222222]"
            >
              Discover new scents for every occasion.
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              className="text-[#414141] text-[16px] sm:text-[20px] md:text-[24px] mt-4"
            >
              15% Off on Seasonal Fragrances
            </motion.p>
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              className="mt-[30px] flex gap-[10px] items-center bg-[#000] px-[30px] py-[10px] rounded-[10px] text-white font-bold"
            >
              Explore <MoveRight className="w-5 h-5" />
            </motion.button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeHeroComp;