import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaSearch,
  FaFilter,
  FaShoppingCart,
} from "react-icons/fa";
import { GiPerfumeBottle, GiPriceTag } from "react-icons/gi";
import { StoreContext } from "../StoreContext";

const Shop = () => {
  const navigate = useNavigate();
  const {
    shopProductData,
    addToCart,
    favoriteItems,
    addToFavorites,
    removeFromFavorites,
  } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showFavNotification, setShowFavNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 25;

  const perfumeCategories = [
    "Floral",
    "Woody",
    "Fresh",
    "Oriental",
    "Citrus",
    "Aromatic",
    "Spicy",
    "Fruity",
  ];

  const perfumeSizes = ["30ml", "50ml", "100ml", "200ml"];

  // Filter and sort products
  const filteredPerfumes = shopProductData
    .filter((perfume) => {
      const matchesSearch =
        perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        perfume.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice =
        perfume.price >= priceRange[0] && perfume.price <= priceRange[1];
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(perfume.scents);
      const matchesSize =
        selectedSizes.length === 0 || selectedSizes.includes(perfume.size);
      return matchesSearch && matchesPrice && matchesCategory && matchesSize;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredPerfumes.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPerfumes.length / productsPerPage);

  // Toggle filters
  const toggleFilter = (filter, setFilter, value) => {
    if (filter.includes(value)) {
      setFilter(filter.filter((item) => item !== value));
    } else {
      setFilter([...filter, value]);
    }
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  // Add to cart with notification
  const handleAddToCart = (productId) => {
    addToCart(productId, 1);
    setNotificationMessage("Item added to cart!");
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  // Toggle favorite with notification
  const toggleFavorite = (productId) => {
    if (favoriteItems[productId]) {
      removeFromFavorites(productId);
      setNotificationMessage("Removed from favorites");
    } else {
      addToFavorites(productId);
      setNotificationMessage("Added to favorites");
    }
    setShowFavNotification(true);
    setTimeout(() => setShowFavNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notifications */}
      {showCartNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-fade-in-out">
          <FaShoppingCart /> {notificationMessage}
        </div>
      )}
      
      {showFavNotification && (
        <div className="fixed top-20 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <FaHeart /> {notificationMessage}
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Premium Fragrance Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover scents that define your personality and style
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, notes or description..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
            />
          </div>

          <div className="flex gap-4">
            <select
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1); // Reset to first page when sorting changes
              }}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">New Arrivals</option>
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
            >
              <FaFilter /> Filters
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Filter */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <GiPriceTag /> Price Range
              </h3>
              <div className="flex items-center gap-4 mb-2">
                <span>${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => {
                    setPriceRange([priceRange[0], parseInt(e.target.value)]);
                    setCurrentPage(1); // Reset to first page when price range changes
                  }}
                  className="w-full"
                />
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <GiPerfumeBottle /> Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {perfumeCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      toggleFilter(
                        selectedCategories,
                        setSelectedCategories,
                        category
                      )
                    }
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedCategories.includes(category)
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-semibold mb-3">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {perfumeSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      toggleFilter(selectedSizes, setSelectedSizes, size)
                    }
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedSizes.includes(size)
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product Count */}
        <div className="mb-4 text-gray-600">
          Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredPerfumes.length)} of {filteredPerfumes.length} products
          {(selectedCategories.length > 0 ||
            selectedSizes.length > 0 ||
            priceRange[1] < 300) && (
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedSizes([]);
                setPriceRange([0, 300]);
                setCurrentPage(1);
              }}
              className="ml-4 text-pink-500 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((perfume) => (
            <div
              key={perfume._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative">
                {/* Product Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={perfume.img}
                    alt={perfume.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#00000039] bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => navigate(`/product/${perfume._id}`)}
                      className="bg-white text-pink-500 px-4 py-2 rounded-lg font-medium"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {perfume.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {perfume.isBestSeller && (
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      BESTSELLER
                    </span>
                  )}
                  {perfume.stock < 10 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      LOW STOCK
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(perfume._id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label={
                    favoriteItems[perfume._id] 
                      ? "Remove from favorites" 
                      : "Add to favorites"
                  }
                >
                  {favoriteItems[perfume._id] ? (
                    <FaHeart className="text-pink-500" />
                  ) : (
                    <FaRegHeart className="text-gray-600 hover:text-pink-500" />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3
                   onClick={() => navigate(`/product/${perfume._id}`)}
                   className="font-semibold text-lg hover:text-pink-500 transition-colors cursor-pointer">
                    {perfume.name}
                  </h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {perfume.size}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-2">{perfume.scents}</p>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {perfume.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(perfume.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    ({perfume.reviews})
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">${perfume.price}</span>
                    {perfume.originalPrice && (
                      <span className="ml-2 text-gray-400 text-sm line-through">
                        ${perfume.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(perfume._id)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-1"
                  >
                    <FaShoppingCart size={14} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPerfumes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No perfumes match your search criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setPriceRange([0, 300]);
                setSelectedCategories([]);
                setSelectedSizes([]);
                setCurrentPage(1);
              }}
              className="mt-4 text-pink-500 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredPerfumes.length > productsPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded-lg ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 border rounded-lg ${
                    currentPage === number
                      ? "bg-pink-500 text-white"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded-lg ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;