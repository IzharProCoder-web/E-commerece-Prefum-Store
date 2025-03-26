/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePopShowComp = ({ onClose }) => {
  // Disable background scrolling when the modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-[9999999] flex items-center justify-center bg-[#00000066] p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Main container with responsive sizing */}
        <motion.div
          className='bg-white w-full max-w-3xl max-h-[90vh] md:h-[480px] flex flex-col md:flex-row relative rounded-lg overflow-hidden'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Close Button - positioned absolutely */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-700 hover:text-[#ff7be5]'
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
          <div className='flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10 overflow-y-auto'>
            <h3 className='text-xl sm:text-2xl font-bold mb-3 md:mb-4'>Stay Styled, Stay Informed!</h3>
            <p className='text-gray-600 text-sm sm:text-base mb-4 md:mb-6'>
              Unlock Beauty Secrets and Exclusive Offers! Join our fashion community and be the first to know about the latest trends, exclusive collections, and insider deals.
            </p>
            <div className='mb-4 md:mb-6'>
              <input
                type='email'
                placeholder='Your email'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff7be5] text-sm sm:text-base'
              />
            </div>
            <button className='w-full bg-[#ff7be5] hover:bg-[#ff6ad9] text-white py-2 px-4 rounded transition duration-300 text-sm sm:text-base'>
              SUBSCRIBE
            </button>
          </div>

          {/* Right Section - Image (now properly preserved) */}
          <div className='flex-1 md:block hidden min-h-[200px] md:min-h-0 bg-[#ff7be5] relative overflow-hidden'>
            <img 
              src="../Image/newsletter.webp" 
              alt="Fashion newsletter"
              className='w-full h-full object-cover absolute inset-0'
              loading='lazy'
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePopShowComp;