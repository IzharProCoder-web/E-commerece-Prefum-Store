import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { StoreContext } from "../../StoreContext.jsx";

const BestSellers = () => {
  const {
    addToCart,
    bestSellerProductData,
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
  const productInfoRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

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

  useEffect(() => {
    if (bestSellerProductData) {
      const heights = productInfoRefs.current.map(ref => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [bestSellerProductData]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white relative font-sans">
      {/* Favorite Message Notification */}
      {showFavMessage && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-xl z-50 animate-fadeInOut flex items-center text-sm sm:text-base">
          <FaHeart className="mr-1 sm:mr-2" />
          <span>{favMessage}</span>
        </div>
      )}

      <div className="mb-8 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans ml-12 tracking-tight">
          TOP PICKS
        </h3>
      </div>

      {/* Product Slider */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1536: {
              slidesPerView: 4.5,
              spaceBetween: 24,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          loop={false}
          className="!overflow-visible !mx-auto"
        >
          {bestSellerProductData?.map((data, index) => (
            <SwiperSlide key={index} className="!w-[130px] sm:!w-[200px] mb-8">
              <div className="w-full h-[300px] sm:h-[350px] group relative max-w-[180px]">
                {/* Image Container */}
                <div className="relative overflow-hidden h-[180px] sm:h-[300px] rounded-lg shadow-md">
                  <Link to={`/product/${data._id}`} className="block h-full">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  {/* Heart Icon (Favorite Button) */}
                  <button
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition-all duration-300 hover:scale-110"
                    onClick={() => handleHeartClick(data._id)}
                    aria-label={favoriteItems[data._id] ? "Remove from favorites" : "Add to favorites"}
                  >
                    {favoriteItems[data._id] ? (
                      <FaHeart className="text-lg sm:text-xl text-pink-500" />
                    ) : (
                      <FaRegHeart className="text-lg sm:text-xl text-gray-600 hover:text-pink-500" />
                    )}
                  </button>

                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleQuickAddClick(data)}
                    className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-[10px] sm:text-[13px] text-white bg-black p-[2px] sm:px-1 py-1 rounded-lg transition-all duration-300 opacity-100 group-hover:opacity-100"
                  >
                    <FaPlus className="sm:mr-1" size={12} />
                    Quick Add
                  </button>
                </div>

                {/* Product Info */}
                <div
                  ref={el => productInfoRefs.current[index] = el}
                  style={{ minHeight: `${maxHeight}px` }}
                  className="mt-4 sm:mt-5 font-sans px-2 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-black hover:text-black cursor-pointer text-[16px] uppercase truncate">
                      {data.scents}
                    </p>
                    <Link to={`/product/${data._id}`}>
                      <h3 className="font-sans text-gray-500 sm:text-[14px] font-semibold sm:mt-2 truncate">
                        {data.name}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-red-500 text-sm sm:text-lg mt-1 sm:mt-2 font-medium">
                      ${data.price.toFixed(2)}
                    </p>
                    <del className="text-red-500 text-sm ml-2">${data.originalPrice}</del>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pop-up Window */}
      {showPopup && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-[95vw] sm:max-w-4xl mx-auto relative flex flex-col sm:flex-row max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700 text-lg sm:text-xl z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md"
              aria-label="Close product details"
            >
              <FaTimes />
            </button>

            {/* Left Side - Image Slider */}
            <div className="w-full sm:w-1/2 h-64 sm:h-auto">
              <Swiper
                modules={[EffectFade]}
                loop={true}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                className="h-full rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none overflow-hidden"
              >
                {[1, 2, 3].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={selectedProduct.img}
                      alt={`${selectedProduct.name} - Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Side - Details */}
            <div className="w-full sm:w-1/2 flex flex-col p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-sans">
                {selectedProduct.name}
              </h2>

              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${selectedProduct.price.toFixed(2)}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-base sm:text-lg text-gray-400 line-through ml-2 sm:ml-3">
                    ${selectedProduct.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {selectedProduct.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg w-max">
                  <button
                    onClick={handleDecrement}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-base sm:text-lg font-medium w-10 sm:w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors mb-3 sm:mb-4 font-medium flex items-center justify-center text-sm sm:text-base"
                aria-label={`Add ${selectedProduct.name} to cart`}
              >
                Add to Cart - ${(selectedProduct.price * quantity).toFixed(2)}
              </button>

              {/* Free Shipping Message */}
              <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 flex items-center">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Spend $1,000 for Free Shipping
              </div>

              {/* Product Details */}
              <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 border-t pt-3 sm:pt-4">
                <p>
                  <strong className="text-gray-800">SKU:</strong> {selectedProduct.sku}
                </p>
                <p>
                  <strong className="text-gray-800">TYPE:</strong> {selectedProduct.type}
                </p>
                <p>
                  <strong className="text-gray-800">VENDOR:</strong> {selectedProduct.vendor}
                </p>
              </div>

              {/* View Details Link */}
              <Link
                to={`/product/${selectedProduct._id}`}
                className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-black hover:underline flex items-center"
              >
                View full details
                <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* See More Products Button */}
      <div className="flex justify-center mt-5 sm:mt-20 px-4">
        <button
          onClick={() => navigate("/shop")}
          className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
          aria-label="Explore shop collection"
        >
          Explore Our Collection
        </button>
      </div>

      {/* Animation and Scrollbar style */}
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
        @media (max-width: 767px) {
          .group:hover .absolute.bottom-3 {
            opacity: 1 !important;
          }
        }
        @media (min-width: 768px) {
          .absolute.bottom-3 {
            opacity: 0;
          }
          .group:hover .absolute.bottom-3 {
            opacity: 1 !important;
          }
        }
        @media (max-width: 360px) {
          .swiper-slide {
            width: 140px !important;
          }
        }
        @media (min-width: 1536px) {
          .swiper-container {
            max-width: 1440px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default BestSellers;