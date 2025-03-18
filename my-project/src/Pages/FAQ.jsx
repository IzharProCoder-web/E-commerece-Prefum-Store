import React, { useState } from "react";
import { faqs } from "../data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);



  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore common questions about our perfumes, shipping, returns, and more.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-medium text-gray-800">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-gray-600 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
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
                </span>
              </button>
              {activeIndex === index && (
                <div className="pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;