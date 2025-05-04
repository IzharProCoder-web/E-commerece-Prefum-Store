/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUsLuxeComp = () => {
  return (
    <motion.section
      className="max-w-[1360px] mx-auto   flex flex-col gap-10 lg:flex-row justify-between items-center p-5 md:p-12 lg:p-24"
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
        <motion.img
          src="./Image/Aboust-us-img-2.webp"
          alt="Luxe Comfort"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          initial={{ opacity: 0, x: -50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.8, delay: 0.3 }} // Animation duration and delay
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm md:text-base text-[#ff7be5] mb-3 md:mb-4 font-[Jost] font-bold">
          Luxe Comfort, Everyday Glam
        </p>
        <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-bold font-[Gabarito]">
          Style that Speaks Comfort and Glamour
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
          Experience the luxury of comfort without compromising on glamour. Our
          fashion pieces seamlessly blend style and ease, ensuring you feel
          confident every day. Enjoy special discounts on chic and comfy looks.
        </p>
        <Link to="/shop">
          <button className="bg-[#000] duration-500 text-white py-2 md:py-3 px-6 md:px-10 rounded-full">
            Discover More
          </button>
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutUsLuxeComp;