// src/components/HomeProduct.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { StoreContext } from "../../StoreContext.jsx";

const HomeProduct = () => {
  const { addToCart, homeProductData } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleQuickAddClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleAddToCart = () => {
    addToCart(homeProductData.name);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

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
              <div className="bg-white shadow-sm text-center hover:shadow-md transition-shadow duration-300 relative group">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover mb-6 cursor-pointer"
                    onClick={() => handleQuickAddClick(data)} // Add onClick event here
                  />
                  {/* Heart Icon (Favorite Button) */}
                  <button
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => navigate("/fav")} // Redirect to /fav page
                  >
                    <CiHeart className="text-xl text-gray-600 hover:text-[#ff7be5]" />
                  </button>
                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleQuickAddClick(data)}
                    className="flex items-center absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-white text-black xl:px-6 md:px-4 px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 hover:bg-[#ff7be5] hover:text-white"
                  >
                    + Quick Add
                  </button>
                </div>
                <p className="text-sm text-gray-500 hover:text-[#000] cursor-pointer uppercase tracking-widest">
                  {data.scents}
                </p>
                <Link to="/product">
                  <h3 className="text-xl font-semibold text-[#000] hover:text-[#ff7be5] cursor-pointer mt-2">
                    {data.name}
                  </h3>
                </Link>
                <p className="text-xl text-gray-500 hover:text-[#000] mt-4">
                  {data.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons with React Icons */}
        <div className="next-btn absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
          <FaChevronLeft />
        </div>
        <div className="prev-btn absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
          <FaChevronRight />
        </div>
      </div>

      {/* Pop-up Window */}
      {showPopup && (
        <div className="fixed inset-0 bg-[#333333f1] flex items-center justify-center z-50 p-4">
          <div className="bg-white py-8 rounded-lg max-w-4xl w-full mx-4 sm:mx-8 relative flex flex-col sm:flex-row sm:h-auto h-[600px] overflow-y-auto sm:overflow-visible">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-0 sm:top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {/* Left Side - Image Slider */}
            <div className="sm:w-1/2 sm:pr-8 flex items-center justify-center">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                loop={true} // Enable continuous loop
                spaceBetween={10}
                slidesPerView={1}
                className="w-full"
              >
                {/* Duplicate the same image multiple times for the slide effect */}
                {[1, 2, 3].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={selectedProduct.img} // Same image for all slides
                      alt={`${selectedProduct.name} - Slide ${index + 1}`}
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </SwiperSlide>
                ))}
                {/* Custom Navigation Buttons */}
                <div className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
                  <FaChevronLeft />
                </div>
                <div className=" next-btn absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
                  <FaChevronRight />
                </div>
              </Swiper>
            </div>

            {/* Right Side - Details */}
            <div className="sm:w-1/2 flex flex-col justify-center p-4 sm:p-0">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-500 mb-4">
                {selectedProduct.description}
              </p>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-[#000]">
                  {selectedProduct.price}
                </span>
                <span className="text-xl text-gray-400 line-through ml-2">
                  {selectedProduct.originalPrice}
                </span>
              </div>

              {/* Quantity Selector and Add to Cart Button */}
              <div className="flex sm:flex-row flex-col sm:items-center gap-3 mb-4">
                <div className="flex justify-center px-3 sm:px-8 py-1 items-center bg-white border-2 border-[#000] gap-4 sm:gap-2 rounded-full">
                  <button
                    onClick={handleDecrement}
                    className="hover:text-[#ff7be5] text-lg"
                  >
                    -
                  </button>
                  <p className="text-lg">{quantity}</p>
                  <button
                    onClick={handleIncrement}
                    className="hover:text-[#ff7be5] text-lg"
                  >
                    +
                  </button>
                </div>
                <Link to="/cart ">
                  <button  onClick={handleAddToCart} className="w-full sm:w-auto  bg-[#ff7be5] text-white px-6 py-2 rounded-full hover:bg-[#e56acf] transition-colors duration-300">
                    ADD TO CART
                  </button>
                </Link>
              </div>

              {/* Free Shipping Message */}
              <p className="text-sm text-gray-500 mb-4 cursor-pointer hover:text-black">
                Spend $1,000.00 for Free Shipping
              </p>

              {/* Product Details */}
              <div className="text-sm text-gray-500">
                <p>
                  <strong>SKU:</strong> {selectedProduct.sku}
                </p>
                <p>
                  <strong>TYPE:</strong> {selectedProduct.type}
                </p>
                <p>
                  <strong>VENDOR:</strong> {selectedProduct.vendor}
                </p>
              </div>

              {/* View Details Link */}
              <Link to="/product">
                <button className="mt-4 text-sm text-[#ff7be5] hover:underline">
                  View details
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center mt-[60px]">
        <button className="bg-[#ff7be5] hover:bg-white text-[#fff] hover:text-[#ff7be5] px-7 py-3 rounded-[10px] hover:shadow-2xl hover:border-[1px] hover:border-[#ff7be5] duration-300">
          See More Products
        </button>
      </div>
    </section>
  );
};

export default HomeProduct;