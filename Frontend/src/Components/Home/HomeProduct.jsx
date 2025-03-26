import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { StoreContext } from "../../StoreContext.jsx";

const HomeProduct = () => {
  const {
    addToCart,
    homeProductData,
    addToFavorites,
    favoriteItems,
    removeFromFavorites,
  } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showFavMessage, setShowFavMessage] = useState(false);
  const [favMessage, setFavMessage] = useState("");
  const navigate = useNavigate();

  const handleQuickAddClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct._id, quantity);
    closePopup();
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

  const handleHeartClick = (productId) => {
    if (favoriteItems[productId]) {
      removeFromFavorites(productId);
      setFavMessage("Removed from favorites");
    } else {
      addToFavorites(productId);
      setFavMessage("Added to favorites");
    }
    
    setShowFavMessage(true);
    setTimeout(() => {
      setShowFavMessage(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-white relative">
      {/* Favorite Message Notification */}
      {showFavMessage && (
        <div className="fixed top-20 right-4 bg-[#ff7be5] text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fadeInOut">
          {favMessage}
        </div>
      )}

      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4">
          Explore Our Premium Fragrances
        </h3>
        <p className="text-lg text-gray-600">
          Discover unique scents at great prices.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".prev-btn",
            prevEl: ".next-btn",
          }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
            1200: {
              slidesPerView: 4.5,
            },
          }}
          loop={true}
        >
          {homeProductData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="w-[255px] h-[400px] mx-auto sm:mr-[10px] group">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Link to={`/product/${data._id}`}>
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  {/* Heart Icon (Favorite Button) */}
                  <button
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => handleHeartClick(data._id)}
                  >
                    {favoriteItems[data._id] ? (
                      <FaHeart className="text-xl text-[#ff7be5]" />
                    ) : (
                      <FaRegHeart className="text-xl text-gray-600" />
                    )}
                  </button>
                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleQuickAddClick(data)}
                    className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-white text-black xl:px-4 md:px-4 px-3 py-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 hover:bg-[#ff7be5] hover:text-white"
                  >
                    + Quick Add
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center mt-[10px]">
                  <p className="text-[#666] hover:text-black cursor-pointer font-[Jost] text-[14px]">
                    {data.scents}
                  </p>
                  <Link to={`/product/${data._id}`}>
                    <p className="font-[Jost] font-semibold text-[18px] mt-[8px]">
                      {data.name}
                    </p>
                  </Link>
                  <p className="text-[#666] font-[Jost] text-[18px] mt-[10px] hover:text-black cursor-pointer">
                    ${data.price}
                  </p>
                </div>
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
          <div className="bg-white py-8 max-w-4xl w-full mx-4 sm:mx-8 relative flex flex-col sm:flex-row sm:h-auto h-[600px] overflow-y-auto sm:overflow-visible">
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
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full"
              >
                {[1, 2, 3].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={selectedProduct.img}
                      alt={`${selectedProduct.name} - Slide ${index + 1}`}
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </SwiperSlide>
                ))}
                {/* Custom Navigation Buttons */}
                <div className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
                  <FaChevronLeft />
                </div>
                <div className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 rounded-[50%] z-10 cursor-pointer">
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
                <div className="flex justify-center px-3 sm:px-8 py-1 items-center bg-white border-2 border-[#0000000a] gap-4 sm:gap-2">
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
                <Link to="/cart">
                  <button
                    onClick={handleAddToCart}
                    className="w-full sm:w-auto bg-[#ff7be5] text-white px-6 py-2 hover:bg-[#875c7f] transition-colors duration-300"
                  >
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

      {/* See More Products Button */}
      <div className="flex items-center justify-center mt-[60px]">
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#ff7be5] hover:bg-white text-[#fff] hover:text-[#ff7be5] px-7 py-3 rounded-[10px] hover:shadow-2xl hover:border-[1px] hover:border-[#ff7be5] duration-300"
        >
          See More Products
        </button>
      </div>

      {/* Add this style tag for the animation */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HomeProduct;