/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { StoreContext } from "../StoreContext";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddToCart = () => {
  // Use local state as fallback if StoreContext functions are not working
  const { 
    cartItems: contextCartItems, 
    homeProductData, 
    shopProductData, 
    removeFromCart, 
    increaseQuantity: contextIncrease, 
    decreaseQuantity: contextDecrease, 
    getTotalCartAmount 
  } = useContext(StoreContext);

  // Local state to manage cart items for demo purposes
  const [localCartItems, setLocalCartItems] = useState(contextCartItems || {});

  // Use context functions if available, otherwise use local state
  const increaseQuantity = (id) => {
    if (contextIncrease) {
      console.log(`Increasing quantity for ${id}`);
      contextIncrease(id);
    } else {
      setLocalCartItems((prev) => {
        const newItems = { ...prev, [id]: (prev[id] || 0) + 1 };
        console.log(`Local increase: ${id}, new quantity: ${newItems[id]}`);
        return newItems;
      });
    }
  };

  const decreaseQuantity = (id) => {
    if (contextDecrease) {
      console.log(`Decreasing quantity for ${id}`);
      contextDecrease(id);
    } else {
      setLocalCartItems((prev) => {
        if (prev[id] <= 1) return prev; // Prevent negative quantities
        const newItems = { ...prev, [id]: prev[id] - 1 };
        console.log(`Local decrease: ${id}, new quantity: ${newItems[id]}`);
        return newItems;
      });
    }
  };

  // Use context cartItems if available, otherwise local state
  const cartItems = contextCartItems || localCartItems;

  const navigate = useNavigate();
  const allProductData = [...homeProductData, ...shopProductData];

  return (
    <div className="mt-16 mb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
        <div className="flex items-center mt-2 text-xs sm:text-sm text-gray-500">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="text-gray-600 hover:text-black">Cart</span>
        </div>
      </div>

      {/* Cart Content */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-12 items-center text-gray-600 text-xs sm:text-sm font-medium py-3 sm:py-4 border-b">
              <div className="col-span-5">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>

            {/* Cart Items List */}
            {allProductData.map((data, index) => {
              if (cartItems[data._id] > 0) {
                return (
                  <div
                    key={data._id} // Use data._id instead of index for unique key
                    className="grid grid-cols-12 items-center py-4 sm:py-6 border-b last:border-b-0 group hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    {/* Product Image & Title */}
                    <div className="col-span-12 sm:col-span-5 flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                      <div className="relative">
                        <img
                          src={data.img}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
                          alt={data.name}
                        />
                        <div className="absolute -top-1.5 -right-1.5 bg-black text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          {cartItems[data._id]}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base text-gray-900 line-clamp-1">{data.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500 sm:hidden">
                          Rs {data.price} × {cartItems[data._id]}
                        </p>
                      </div>
                    </div>

                    {/* Product Price (Desktop) */}
                    <div className="hidden sm:block col-span-2 text-center text-gray-700 text-sm">
                      Rs {data.price}
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-12 sm:col-span-3 flex justify-center items-center mb-3 sm:mb-0">
                      <div className="flex items-center border border-gray-200 rounded-lg w-max">
                        <button
                          onClick={() => decreaseQuantity(data._id)}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 text-gray-600 hover:bg-gray-50 transition-colors text-xs sm:text-sm ${
                            cartItems[data._id] <= 1 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-label="Decrease quantity"
                          disabled={cartItems[data._id] <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-sm sm:text-base font-medium w-8 sm:w-10 text-center">
                          {cartItems[data._id]}
                        </span>
                        <button
                          onClick={() => increaseQuantity(data._id)}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-gray-600 hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                          aria-label="Increase quantity"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    {/* Total Price (Desktop) */}
                    <div className="hidden sm:block col-span-2 text-center font-semibold text-gray-900 text-sm">
                      Rs {(data.price * cartItems[data._id]).toFixed(2)}
                    </div>

                    {/* Remove Button */}
                    <div className="col-span-12 sm:col-span-1 flex justify-end sm:justify-center pt-2 sm:pt-0">
                      <button
                        onClick={() => removeFromCart(data._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200 group-hover:text-gray-600"
                        aria-label="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Total */}
                    <div className="col-span-12 sm:hidden flex justify-between items-center pt-2">
                      <span className="font-semibold text-sm text-gray-900">
                        Rs {(data.price * cartItems[data._id]).toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {/* Empty Cart Message */}
            {Object.keys(cartItems).length === 0 && (
              <div className="text-center py-10 sm:py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-gray-300 mb-3 sm:mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="inline-block px-5 sm:px-6 py-2 bg-black text-white rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Continue Shopping Link */}
          {Object.keys(cartItems).length > 0 && (
            <div className="mt-4 sm:mt-6">
              <Link
                to="/shop"
                className="flex items-center text-black text-sm sm:text-base hover:underline transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {/* Summary Section */}
        {Object.keys(cartItems).length > 0 && (
          <div className="lg:w-1/3">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 sticky top-4 sm:top-8">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">Rs {getTotalCartAmount().toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">
                    Rs {getTotalCartAmount() === 0 ? 0 : 2}
                  </p>
                </div>
                <div className="flex justify-between pt-3 sm:pt-4 border-t border-gray-200 text-sm sm:text-base">
                  <p className="text-gray-600">Estimated Tax</p>
                  <p className="font-medium">
                    Rs {(getTotalCartAmount() * 0.08).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center py-3 sm:py-4 border-t border-b border-gray-200 mb-4 sm:mb-6">
                <p className="font-bold text-gray-900 text-sm sm:text-base">Total</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900">
                  Rs {(getTotalCartAmount() === 0
                    ? 0
                    : (getTotalCartAmount() + 2 + getTotalCartAmount() * 0.08)).toFixed(2)}
                </p>
              </div>

              {/* Promo Code */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="promo-code"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo-code"
                    placeholder="Enter promo code"
                    className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-l-md focus:ring-black focus:border-black outline-none text-sm"
                  />
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700 transition-colors duration-200 text-sm">
                    Apply
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigate("/order")}
                className="w-full py-2.5 sm:py-3 bg-black text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>

              <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
                or{" "}
                <Link
                  to="/shop"
                  className="text-black font-medium hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;