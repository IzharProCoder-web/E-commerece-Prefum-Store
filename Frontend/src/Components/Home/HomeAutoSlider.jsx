/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const HomeAutoSlider = () => {
  const sliderContent = [
    "Faziffy Perfumes",
    "Natural Fragrances",
    "Premium Scents",
    "Luxury Collections"
  ];

  return (
    <div className="mt-2 overflow-hidden whitespace-nowrap py-4">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...sliderContent, ...sliderContent].map((text, index) => (
          <React.Fragment key={index}>
            <p className="text-[40px] pr-24 font-bold 
               text-white 
               [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
              {text}
            </p>
            <div className="w-2 h-2 rounded-full bg-black" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeAutoSlider;