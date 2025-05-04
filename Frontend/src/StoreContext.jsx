/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { homeProductData, shopProductData, bestSellerProductData } from "./data.js"; // Adjust the import path as needed

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [favoriteItems, setFavoriteItems] = useState({}); // State for favorite items

  const addToCart = (productId, quantity) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity
    }));
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    if (!cartItems || (!homeProductData && !shopProductData)) return 0;
  
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = homeProductData.find((product) => product._id === item) || 
                      shopProductData.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  
// Add to favorites
const addToFavorites = (itemId) => {
  setFavoriteItems((prev) => ({
    ...prev,
    [itemId]: true, // Mark the item as favorite
  }));

};

// Remove from favorites
const removeFromFavorites = (itemId) => {
  setFavoriteItems((prev) => {
    const updatedFavorites = { ...prev };
    delete updatedFavorites[itemId]; // Remove the item from favorites
    return updatedFavorites;
  });

};


const contextValue = {
  homeProductData,
  bestSellerProductData,
  shopProductData,
  cartItems,
  addToCart,
  removeFromCart,
  getTotalCartAmount,
  favoriteItems,
  addToFavorites,
  removeFromFavorites,
  allProductData: [...homeProductData, ...shopProductData], // Add this line
};

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;