/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUsHeroComp = () => {
  return (
    <motion.section
      className="max-w-[1360px] mx-auto flex flex-col lg:flex-row justify-between items-center p-5 md:p-12 lg:p-24"
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Text Section */}
      <div className="text-center w-full lg:w-1/2 mb-10 lg:mb-0">
        <p className="text-sm md:text-base text-black mb-3 md:mb-4 font-[Jost] font-bold">
          Our Passion for Perfume
        </p>
        <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-bold font-[Gabarito]">
          Crafting Memories with Every Scent
        </h3>
        <Link to="/shop">
          <button className="bg-[#000] duration-500 text-white py-2 md:py-3 px-6 md:px-10 rounded-full">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <motion.img
          src="./Image/Aboust-us-img-1.webp"
          alt="About Us"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          initial={{ opacity: 0, x: 50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.8, delay: 0.3 }} // Animation duration and delay
        />
      </div>
    </motion.section>
  );
};

export default AboutUsHeroComp;