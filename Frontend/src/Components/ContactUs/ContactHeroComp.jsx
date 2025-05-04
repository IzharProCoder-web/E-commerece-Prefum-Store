/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactHeroComp = () => {
  return (
    <motion.section
      className="flex flex-col gap-8 lg:flex-row justify-between items-center p-5 md:p-12 lg:py-10 lg:px-20 xl:px-32"
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
        <motion.img
          src="./Image/Contact-Us-img1.webp"
          alt="Luxe Comfort"
          className="w-full max-w-[500px] lg:max-w-none"
          initial={{ opacity: 0, x: -50 }} // Initial state (hidden)
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.8, delay: 0.3 }} // Animation duration and delay
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm md:text-base text-[#ff7be5] mb-3 md:mb-4 font-[Jost] font-bold">
          Timeless Elegance, Modern Charm
        </p>
        <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-bold font-[Gabarito]">
          Indulge in Timeless Classics with a Modern Twist
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
          Embrace the allure of timeless fashion with our collection of modern classics. From essential basics to statement pieces, redefine elegance with a contemporary touch.
        </p>
        <Link to="/shop">
          <button className="bg-[#000]  duration-500 text-white py-2 md:py-3 px-6 md:px-10 rounded-full">
            Discover More
          </button>
        </Link>
      </div>
    </motion.section>
  );
};

export default ContactHeroComp;