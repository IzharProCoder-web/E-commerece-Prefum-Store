/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AboutUsQuestionComp = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-[16px] font-bold text-center mb-6 text-[#ff7be5]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          QUESTIONS?
        </motion.h2>

        <motion.p
          className="text-4xl font-bold text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Send us an email
        </motion.p>

        <motion.form
          className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Name and Email Fields */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="w-full sm:w-1/2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-[#ff7be5] placeholder-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-[#ff7be5] placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-[#ff7be5] placeholder-gray-400"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-[#ff7be5] placeholder-gray-400"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#000]  text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              SEND
            </button>
          </div>
        </motion.form>
      </div>

      {/* Footer Text */}
      <p className="text-center mt-[30px] text-[#999] px-6">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          className="cursor-pointer border-b border-[#55555575] text-[#555555d2]"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          className="cursor-pointer border-b text-[#555555de] border-[#55555575]"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </section>
  );
};

export default AboutUsQuestionComp;