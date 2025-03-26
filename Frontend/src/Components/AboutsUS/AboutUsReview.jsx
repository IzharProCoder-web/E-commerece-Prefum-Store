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
    name: "john Doe",
    rating: 5,
    comment: "Amazing products and excellent customer service! Highly recommended.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great quality and fast shipping. Will definitely shop again!",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    comment: "Love the designs and the attention to detail. Perfect for my needs.",
  },
  {
    id: 4,
    name: "Bob Brown",
    rating: 5,
    comment: "Fantastic experience from start to finish. Thank you!",
  },
  {
    id: 5,
    name: "Sarah Williams",
    rating: 4,
    comment: "Consistently impressed with the quality and customer care.",
  },
  {
    id: 6,
    name: "Michael Davis",
    rating: 5,
    comment: "Exceptional products that exceeded my expectations in every way.",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-2xl font-bold text-gray-700">
        {review.name.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{review.name}</h3>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-xl ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      <div className="mt-auto text-sm text-gray-400">
        Verified Customer
      </div>
    </motion.div>
  );
};

const AboutUsReviewComp = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+')" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            el: '.review-pagination',
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-16"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}

          <div className="button-prev cursor-pointer absolute top-[40%] -left-4 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
            <FaArrowLeft className="text-lg text-gray-700" />
          </div>
          <div className="button-next cursor-pointer absolute top-[40%] -right-4 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
            <FaArrowRight className="text-lg text-gray-700" />
          </div>
        </Swiper>

        <div className="review-pagination flex justify-center gap-2 mt-8"></div>
      </div>
    </section>
  );
};

export default AboutUsReviewComp;