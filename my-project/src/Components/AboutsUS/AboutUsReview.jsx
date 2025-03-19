/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing products and excellent customer service! Highly recommended.",
    avatar: "/Image/product-1.jpg", // Use correct path from the public folder
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great quality and fast shipping. Will definitely shop again!",
    avatar: "/Image/product-2.jpg", // Use correct path from the public folder
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    comment: "Love the designs and the attention to detail. Perfect for my needs.",
    avatar: "/Image/product-3.jpg", // Use correct path from the public folder
  },
  {
    id: 4,
    name: "Bob Brown",
    rating: 5,
    comment: "Fantastic experience from start to finish. Thank you!",
    avatar: "/Image/product-1.jpg", // Use correct path from the public folder
  },
];

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={review.avatar}
        alt={review.name}
        className="w-20 h-20 rounded-full mb-6"
      />
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{review.name}</h3>
      <div className="flex mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-2xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600">{review.comment}</p>
    </motion.div>
  );
};

const AboutUsReviewComp = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-[Jost] font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={30}
          loop={true} // Enable endless sliding
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3s delay
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on desktops
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="button-prev cursor-pointer absolute top-[50%] left-0 z-20">
            <FaArrowLeft className="text-2xl text-gray-800" />
          </div>
          <div className="button-next cursor-pointer absolute top-[50%] right-0 z-20">
            <FaArrowRight className="text-2xl text-gray-800" />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUsReviewComp;