import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeProduct = () => {
  const homeProductData = [
    {
      img: "/Image/perfum-1.jpeg", // Update the path to match your public folder
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-2.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-3.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-4.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-5.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-6.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-7.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
    {
      img: "/Image/perfum-8.jpeg",
      scents: "Sweet Scents",
      name: "Vanilla Dream Eau de Parfum",
      price: "25$",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4">
          Explore Our Premium Fragrances
        </h3>
        <p className="text-lg text-gray-600">
          Discover unique scents at great prices.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".prev-btn",
            prevEl: ".next-btn",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop={true}
        >
          {homeProductData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300 relative group">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-64 object-cover rounded-lg mb-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Quick Add Button */}
                  <button className=" flex items-center absolute bottom-7  left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#ff7be5] hover:text-white">
                    + Quick Add
                  </button>
                </div>
                <p className="text-sm text-gray-500 hover:text-[#000] cursor-pointer uppercase tracking-widest">
                  {data.scents}
                </p>
                <h3 className="text-xl font-semibold text-[#000] hover:text-[#ff7be5] cursor-pointer mt-2">
                  {data.name}
                </h3>
                <p className="text-xl text-gray-500 hover:text-[#000] mt-4">
                  {data.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons with React Icons */}
        <div className=" next-btn absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
          <FaChevronLeft />
        </div>
        <div className="prev-btn  absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;