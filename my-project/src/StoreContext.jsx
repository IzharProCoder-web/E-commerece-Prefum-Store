/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { homeProductData } from "./data.js"; // Adjust the import path as needed

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [favoriteItems, setFavoriteItems] = useState({}); // State for favorite items

  const addToCart = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity, // Add the selected quantity
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
    if (!cartItems || !homeProductData) return 0;

    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = homeProductData.find((product) => product._id === item);
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
  console.log("Added to favorites:", itemId); // Debugging
  console.log("Updated favoriteItems:", { ...favoriteItems, [itemId]: true }); // Debugging
};

// Remove from favorites
const removeFromFavorites = (itemId) => {
  setFavoriteItems((prev) => {
    const updatedFavorites = { ...prev };
    delete updatedFavorites[itemId]; // Remove the item from favorites
    return updatedFavorites;
  });
  console.log("Removed from favorites:", itemId); // Debugging
  console.log("Updated favoriteItems:", { ...favoriteItems, [itemId]: undefined }); // Debugging
};


  const contextValue = {
    homeProductData,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    favoriteItems, // Add favoriteItems to context
    addToFavorites, // Add addToFavorites to context
    removeFromFavorites, // Add removeFromFavorites to context
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;