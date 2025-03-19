/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { contactFaq } from "../../data.js";
import { motion, AnimatePresence } from "framer-motion";

const ContactFaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-[100px] bg-white  px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore common questions about our perfumes, shipping, returns, and more.
        </p>
        <div className="space-y-4">
          {contactFaq.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl font-medium text-gray-800">
                  {faq.question}
                </span>
                <motion.span
                  className={`text-gray-600`}
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-6 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFaqComp;