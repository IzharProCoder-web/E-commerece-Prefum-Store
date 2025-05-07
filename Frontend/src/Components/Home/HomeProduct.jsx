import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { StoreContext } from "../../StoreContext.jsx";

const HomeProduct = () => {
  const {
    homeProductData,
    addToCart,
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923129167292";
    const message = `I'm interested in the following product:\nName: ${selectedProduct.name}\nPrice: PKR ${selectedProduct.price}\nImage: ${selectedProduct.img}\nQuantity: ${quantity}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const heights = productInfoRefs.current.map(ref => ref?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white relative font-sans">
      {showFavMessage && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-xl z-50 animate-fadeInOut flex items-center text-sm sm:text-base">
          <FaHeart className="mr-1 sm:mr-2" />
          <span>{favMessage}</span>
        </div>
      )}

      <div className="mb-8 px-4 max-w-7xl mx-auto flex justify-between">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans md:ml-[130px] tracking-tight text-black">
          SUMMER DEALS
        </h3>
        <Link to="/shop" className="text-sm sm:text-base text-black hover:underline md:mr-[140px] mt-2 inline-block">
          View all
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:justify-center items-center overflow-x-scroll">
        {homeProductData.map((data, index) => (
          <div key={data._id} className="inline-block w-full h-[350px] sm:h-[450px] group relative max-w-[180px] mx-2">
            <div className="overflow-hidden h-[180px] sm:h-[300px] rounded-lg shadow-md">
              <Link to={`/product/${data._id}`} className="block h-full">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <button
                onClick={() => handleQuickAddClick(data)}
                className="flex justify-center items-center text-white absolute bg-red-500/80 w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] top-0 right-0 rounded-full shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300"
              >
                <FaPlus size={14} />
              </button>
              <button
                className="flex justify-center items-center text-white absolute bg-red-500/80 w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] top-[32px] lg:top-[32px] right-0 rounded-full shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300"
                onClick={() => handleHeartClick(data._id)}
                aria-label={favoriteItems[data._id] ? "Remove from favorites" : "Add to favorites"}
              >
                {favoriteItems[data._id] ? (
                  <FaHeart size={14} />
                ) : (
                  <FaRegHeart size={14} />
                )}
              </button>
            </div>
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
              <p className="text-red-500 text-sm sm:text-lg m sm:mt-1 mt-0 font-medium">
                PKR {data.price}
              </p>
              <del className="text-red-500 text-sm">PKR {data.originalPrice}</del>
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-[95vw] sm:max-w-4xl mx-auto relative flex flex-col sm:flex-row max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePopup}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-gray-700 text-lg sm:text-xl z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md"
              aria-label="Close product details"
            >
              <FaTimes />
            </button>
            <div className="w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-sans">
                {selectedProduct.name}
              </h2>
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  PKR {selectedProduct.price}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-base sm:text-lg text-gray-400 line-through ml-2 sm:ml-3">
                    PKR {selectedProduct.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {selectedProduct.description}
              </p>
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
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors mb-3 sm:mb-4 font-medium flex items-center justify-center text-sm sm:text-base"
              >
                Add to Cart - PKR {(selectedProduct.price * quantity).toFixed(2)}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 text-white py-2 sm:py-3 rounded-lg hover:bg-green-600 transition-colors mb-3 sm:mb-4 font-medium flex items-center justify-center text-sm sm:text-base"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.112-5.505 4.507-9.984 10.008-9.984 2.668 0 5.163 1.029 7.039 2.904 1.875 1.875 2.904 4.37 2.904 7.037 0 5.506-4.492 9.987-9.988 9.987m8.335-2.326z" />
                </svg>
                Order on WhatsApp
              </button>
              <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 flex items-center">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Spend PKR 1,000 for Free Shipping
              </div>
              <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 border-t pt-3 sm:pt-4">
                <p><strong className="text-gray-800">SKU:</strong> {selectedProduct.sku}</p>
                <p><strong className="text-gray-800">TYPE:</strong> {selectedProduct.type}</p>
                <p><strong className="text-gray-800">VENDOR:</strong> {selectedProduct.vendor}</p>
              </div>
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

      <div className="flex justify-center mt-8 sm:mt- px-4">
        <button
          onClick={() => navigate("/shop")}
          className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Explore Our Collection
        </button>
      </div>

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
        /* Default: Icons visible on smaller screens */
        .absolute.top-0.right-0,
        .absolute.top-[44px].right-0,
        .absolute.top-[32px].right-0 {
          opacity: 1;
          background-color: rgba(239, 68, 68, 0.8); /* bg-red-500/80 */
        }
        .absolute.top-0.right-0:hover,
        .absolute.top-[44px].right-0:hover,
        .absolute.top-[32px].right-0:hover,
        .absolute.top-0.right-0:active,
        .absolute.top-[44px].right-0:active,
        .absolute.top-[32px].right-0:active {
          background-color: #dc2626; /* bg-red-600 */
          transform: scale(0.95);
        }
        /* On laptops and larger (min-width: 1024px), icons hidden until hover */
        @media (min-width: 1024px) {
          .absolute.top-0.right-0,
          .absolute.top-[32px].right-0 {
            opacity: 0;
            background-color: rgba(239, 68, 68, 0.8); /* bg-red-500/80 */
          }
          .group:hover .absolute.top-0.right-0,
          .group:hover .absolute.top-[32px].right-0 {
            opacity: 1;
          }
          .absolute.top-0.right-0:hover,
          .absolute.top-[32px].right-0:hover,
          .absolute.top-0.right-0:active,
          .absolute.top-[32px].right-0:active {
            background-color: #dc2626; /* bg-red-600 */
            transform: scale(0.95);
          }
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #a0a0a0;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background-color: #e0e0e0;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default HomeProduct;