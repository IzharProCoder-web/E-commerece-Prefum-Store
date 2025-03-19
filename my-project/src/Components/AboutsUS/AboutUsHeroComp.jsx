import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsHeroComp = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center p-5 md:p-12 lg:p-24'>
      {/* Text Section */}
      <div className='text-center  w-full lg:w-1/2 mb-10 lg:mb-0'>
        <p className='text-sm md:text-base text-black mb-3 md:mb-4 font-jost font-bold'>
          Our Passion for Perfume
        </p>
        <h3 className='mb-4 md:mb-6 text-2xl md:text-4xl font-bold font-gabarito'>
          Crafting Memories with Every Scent
        </h3>
        <Link to="/shop">
          <button className='bg-[#ff7be5] hover:bg-[#ce72bc] duration-500 text-white py-2 md:py-3 px-6 md:px-10 rounded-full'>
            Shop Now
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
        <img
          src='./public/Image/Aboust-us-img-1.webp'
          alt='About Us'
          className='w-full max-w-xs md:max-w-md lg:max-w-lg'
        />
      </div>
    </section>
  );
};

export default AboutUsHeroComp;