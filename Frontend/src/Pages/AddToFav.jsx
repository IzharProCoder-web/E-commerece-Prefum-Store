/* eslint-disable no-unused-vars */
import React, { useContext, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../StoreContext';
import { FaHeart, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const AddToFav = () => {
  const { 
    favoriteItems, 
    allProductData, 
    removeFromFavorites
  } = useContext(StoreContext);

  const [notification, setNotification] = useState({
    show: false,
    message: ""
  });

  // Memoize favorite products to prevent unnecessary recalculations
  const favoriteProducts = React.useMemo(() => {
    const uniqueIds = new Set();
    return (allProductData?.filter(product => {
      if (!product || !favoriteItems[product._id] || uniqueIds.has(product._id)) {
        return false;
      }
      uniqueIds.add(product._id);
      return true;
    }) || []);
  }, [allProductData, favoriteItems]);

  // Memoized handler for removing favorites
  const handleRemoveFavorite = useCallback((productId) => {
    removeFromFavorites(productId);
    setNotification({
      show: true,
      message: "Removed from favorites"
    });
    const timer = setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
    return () => clearTimeout(timer);
  }, [removeFromFavorites]);

  const EmptyState = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center py-16"
    >
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-pink-50 flex items-center justify-center">
          <FaHeart className="text-4xl text-[#ff7be5]" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">No favorites yet</h2>
        <p className="text-gray-600 mb-6">
          Save your favorite products by clicking the heart icon while shopping
        </p>
        <Link 
          to="/shop" 
          className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Browse Products
        </Link>
      </div>
    </motion.div>
  );

  const ProductCard = ({ product }) => {
    if (!product) return null;

    return (
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative"
      >
        <div className="relative h-64 overflow-hidden group">
          <Link to={`/product/${product._id}`} className="block h-full">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
          
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              onClick={() => handleRemoveFavorite(product._id)}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Remove from favorites"
            >
              <FaHeart className="text-xl text-[#ff7be5]" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <Link to={`/product/${product._id}`}>
            <h3 className="font-semibold text-lg mb-1 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-gray-900">Rs {product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-gray-400 text-sm line-through">
                  Rs {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative min-h-[60vh]">
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <FaHeart /> {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8">
        <Link 
          to="/shop" 
          className="flex items-center text-[#625d5d] hover:text-[#000] mb-4 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Shop
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
        <p className="text-gray-600 mt-2">
          {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'} saved
        </p>
      </div>
      
      {favoriteProducts.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {favoriteProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AddToFav;