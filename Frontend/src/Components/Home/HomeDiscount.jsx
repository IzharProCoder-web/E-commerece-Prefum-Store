import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Import an arrow icon

const HomeDiscount = () => {
  return (
    <section className='mt-10 bg-[#F5EDE9] flex flex-col justify-center items-center gap-y-[20px] py-[100px]'>
      {/* Heading */}
      <div className='text-center ' >
        <h3 className=' font-[Gabarito]  text-2xl sm:text-4xl font-bold mb-[20px] font-poppins'>
          Subscribe now and receive 10% off your first order!
        </h3>
      </div>

      {/* Email Input and Button */}
      <div className='flex bg-white px-6 py-3 rounded-full w-full max-w-[500px]'>
        <input
          type='text'
          placeholder='Your email'
          className='flex-1 bg-transparent outline-none placeholder-gray-500 text-lg'
        />
        <button className='bg-[#ff7be5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#db73c6] transition-colors flex items-center gap-2'>
          SUBSCRIBE <FiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HomeDiscount;