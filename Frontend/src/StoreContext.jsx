/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";
import { homeProductData, shopProductData, bestSellerProductData } from "./data.js"; // Adjust the import path as needed

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Assume userId is passed or retrieved from an authentication system
  const [userId, setUserId] = useState(null); // Replace with actual auth logic
  const cartStorageKey = userId ? `cartItems_${userId}` : "cartItems_guest";
  const favoriteStorageKey = userId ? `favoriteItems_${userId}` : "favoriteItems_guest";

  // Initialize state from local storage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem(cartStorageKey);
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavorites = localStorage.getItem(favoriteStorageKey);
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  // Save cartItems to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
  }, [cartItems, cartStorageKey]);

  // Save favoriteItemsgrimace to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(favoriteStorageKey, JSON.stringify(favoriteItems));
  }, [favoriteItems, favoriteStorageKey]);

  // Function to handle user login
  const loginUser = (newUserId) => {
    setUserId(newUserId);
    // Load user-specific cart and favorites
    const userCart = localStorage.getItem(`cartItems_${newUserId}`);
    const userFavorites = localStorage.getItem(`favoriteItems_${newUserId}`);
    setCartItems(userCart ? JSON.parse(userCart) : {});
    setFavoriteItems(userFavorites ? JSON.parse(userFavorites) : {});
  };

  // Function to handle user logout
  const logoutUser = () => {
    setUserId(null);
    // Optionally clear guest data or keep it
    setCartItems({});
    setFavoriteItems({});
    localStorage.removeItem("cartItems_guest");
    localStorage.removeItem("favoriteItems_guest");
  };

  const addToCart = (productId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity,
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
        let itemInfo =
          homeProductData.find((product) => product._id === item) ||
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
      [itemId]: true,
    }));
  };

  // Remove from favorites
  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prev) => {
      const updatedFavorites = { ...prev };
      delete updatedFavorites[itemId];
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
    allProductData: [...homeProductData, ...shopProductData],
    loginUser,
    logoutUser,
    userId,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;