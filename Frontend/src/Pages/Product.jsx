/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaArrowLeft,
  FaHeart // Added filled heart icon
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    homeProductData,
    shopProductData,
    addToCart,
    addToFavorites,
    removeFromFavorites,
    favoriteItems,
    cartItems,
  } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [message, setMessage] = useState(""); // Added for showing messages

  useEffect(() => {
    const allProducts = [...(shopProductData || []), ...(homeProductData || [])];
    if (id && allProducts.length) {
      const foundProduct = allProducts.find((item) => item._id === id);
      setProduct(foundProduct);
    }
  }, [homeProductData, shopProductData, id]);

  // Function to show temporary messages
  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2000); // Clear message after 2 seconds
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      setIsAddingToCart(true);
      addToCart(product._id, quantity);
      showMessage("Added to cart successfully!");

      setTimeout(() => {
        setIsAddingToCart(false);
      }, 1000);
    }
  };

  const handleHeartClick = () => {
    if (!product) return;

    if (favoriteItems[product._id]) {
      removeFromFavorites(product._id);
      showMessage("Removed from favorites");
    } else {
      addToFavorites(product._id);
      showMessage("Added to favorites");
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-xl">Loading product details...</div>
      </div>
    );
  }

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      {/* Message Display */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-black "
        >
          <FaArrowLeft className="mr-2" />
          Back to Products
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8 p-6">
          <div className="lg:w-1/2">
            <div className="sticky top-4">
              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={{
                  nextEl: ".product-next-btn",
                  prevEl: ".product-prev-btn",
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full relative mb-4 rounded-lg overflow-hidden"
              >
                {[product.img, product.img, product.img].map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-auto max-h-[500px] object-contain cursor-zoom-in"
                    />
                  </SwiperSlide>
                ))}
                <div className="product-prev-btn absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-3 shadow-md z-10 rounded-full cursor-pointer hover:bg-white transition-all">
                  <FaChevronLeft className="text-gray-700" />
                </div>
                <div className="product-next-btn absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md z-10 cursor-pointer hover:bg-white transition-all">
                  <FaChevronRight className="text-gray-700" />
                </div>
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[FreeMode]}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="thumbnail-swiper"
              >
                {[product.img, product.img, product.img, product.img].map(
                  (img, index) => (
                    <SwiperSlide key={index}>
                      <div className="border-2 border-transparent   overflow-hidden transition-all cursor-pointer">
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-30 object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">
                <span className=" cursor-pointer">Home</span> /
                <span className=" cursor-pointer"> Products</span> /
                <span> {product.name}</span>
              </div>

              <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>

              <div className="flex items-center mb-3">
                <div className="flex mr-2">{renderRatingStars(product.rating || 4.5)}</div>
                <span className="text-sm text-gray-500">(24 reviews)</span>
              </div>

              <p className="text-gray-600 mb-4 font-medium">{product.scents}</p>

              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through ml-3">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-3  text-[#000] px-2 py-1 rounded text-sm font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {product.sizes && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 border rounded-md hover:border-[#ff7be5] hover:text-[#ff7be5] transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Updated Favorite Button */}
            <button
              onClick={handleHeartClick}
              className="flex items-center gap-2 mb-6 p-3 border border-gray-200 rounded-md hover:bg-gray-50 w-full justify-center transition-colors"
            >
              {favoriteItems[product._id] ? (
                <FaHeart className="text-2xl text-[#ff7be5]" /> // Filled heart with specified color
              ) : (
                <CiHeart className="text-2xl text-gray-600" /> // Outline heart
              )}
              <span className="font-medium">
                {favoriteItems[product._id] ? "Saved to favorites" : "Add to favorites"}
              </span>
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-200 rounded-md w-full sm:w-auto">
                <button
                  onClick={handleDecrement}
                  className="px-4 py-3 text-lg hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-6 py-2 text-center w-12">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-4 py-3 text-lg hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-md transition-colors ${
                  isAddingToCart
                    ? "bg-green-500 text-white"
                    : "bg-[#000] hover:bg-[#d45fb8] text-white"
                }`}
              >
                {isAddingToCart ? (
                  "Added!"
                ) : (
                  <>
                    <CiShoppingCart className="text-xl" />
                    ADD TO CART - ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-gray-700">SKU:</span>{" "}
                  {product.sku || "N/A"}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Category:</span>{" "}
                  {product.type || "N/A"}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Brand:</span>{" "}
                  {product.vendor || "N/A"}
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Stock:</span>
                  <span className="ml-1 text-green-600">
                    In Stock ({product.stock || 10}+)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              {["Facebook", "Twitter", "Pinterest"].map((social) => (
                <button
                  key={social}
                  className="text-gray-500 hover:text-[#000] transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 pb-12 px-6">
          <div className="flex border-b border-gray-200 mb-6">
            {["description", "reviews", "shipping"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm mr-2 ${
                  activeTab === tab
                    ? "text-[#000] border-b-2 border-[#000]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="prose max-w-none">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="text-gray-700 mb-4">
                  {product.description || "No detailed description available."}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {product.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  )) ||
                    [
                      "High-quality fragrance",
                      "Long-lasting scent",
                      "Premium ingredients",
                      "Elegant packaging",
                    ].map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">{renderRatingStars(4.5)}</div>
                        <span className="text-sm font-medium">John D.</span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">Great product!</h4>
                      <p className="text-gray-600 text-sm">
                        "I love this fragrance! It lasts all day and gets me compliments."
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        Reviewed on April 15, 2023
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Shipping & Returns</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Shipping Policy</h4>
                    <p className="text-gray-700">
                      We offer free standard shipping on orders over $50. Orders
                      are processed within 1-2 business days and delivered within
                      3-5 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Return Policy</h4>
                    <p className="text-gray-700">
                      If you're not completely satisfied, you may return unopened
                      items within 30 days of delivery for a full refund.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 px-6">
          <h3 className="text-xl font-bold mb-6">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {homeProductData.slice(0, 4).map((item) => (
              <div
                key={item._id}
                className="group cursor-pointer"
                onClick={() => navigate(`/product/${item._id}`)}
              >
                <div className="relative overflow-hidden mb-2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (favoriteItems[item._id]) {
                        removeFromFavorites(item._id);
                        showMessage("Removed from favorites");
                      } else {
                        addToFavorites(item._id);
                        showMessage("Added to favorites");
                      }
                    }}
                  >
                    {favoriteItems[item._id] ? (
                      <FaHeart className="text-xl text-[#ff7be5]" />
                    ) : (
                      <CiHeart className="text-xl text-gray-600" />
                    )}
                  </button>
                </div>
                <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                <p className="text-[red] font-medium">Rs {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Product;