/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePopShowComp = ({ onClose }) => {
  // Disable background scrolling when the modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    // Cleanup: Re-enable background scrolling when the modal is closed
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className='fixed h-screen inset-0 z-[9999999] flex items-center justify-center bg-[#00000066]'
        initial={{ opacity: 0 }} // Fade in the background
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Scale and Fade Animation Container */}
        <motion.div
          className='bg-white max-w-3xl w-full h-[480px] flex relative'
          initial={{ scale: 0.8, opacity: 0 }} // Start small and transparent
          animate={{ scale: 1, opacity: 1 }} // Scale up and fade in
          exit={{ scale: 0.8, opacity: 0 }} // Scale down and fade out
          transition={{ duration: 0.3, ease: 'easeOut' }} // Animation settings
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-8 right-6 text-[#fff] hover:text-[#ff7be5] focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {/* Left Section - Text and Form */}
          <div className='flex-1 flex flex-col justify-center py-8 px-10'>
            <h3 className='text-2xl font-bold mb-4'>Stay Styled, Stay Informed!</h3>
            <p className='text-gray-600 mb-6'>
              Unlock Beauty Secrets and Exclusive Offers! Join our fashion community and be the first to know about the latest trends, exclusive collections, and insider deals.
            </p>
            <div className='mb-6'>
              <input
                type='email'
                placeholder='Your email'
                className='w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7be5]'
              />
            </div>
            <button className='w-full bg-[#ff7be5] text-white py-2 px-4 transition duration-300'>
              SUBSCRIBE
            </button>
          </div>

          {/* Right Section - Image */}
          <div className='flex-1 bg-[url("../Image/newsletter.webp")] bg-no-repeat bg-cover'>
            {/* Image is set as a background using Tailwind CSS */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePopShowComp;