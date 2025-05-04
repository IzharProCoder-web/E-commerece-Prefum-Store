import React, { useContext } from "react";
import { StoreContext } from "../StoreContext";
import { Link, useNavigate } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, homeProductData, shopProductData, removeFromCart, getTotalCartAmount } =
  useContext(StoreContext);

  const navigate = useNavigate();
  const allProductData = [...homeProductData, ...shopProductData];
  return (
    <div className="mt-[80px] mb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <Link to="/" className="text-[#ff7be5] hover:text-[#e56acf]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Cart</span>
        </div>
      </div>

      {/* Cart Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-12 items-center text-gray-600 text-sm font-medium py-4 border-b">
              <div className="col-span-5">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
              <div className="col-span-1"></div>
            </div>

            {/* Cart Items List */}
            {allProductData.map((data, index) => {
              if (cartItems[data._id] > 0) {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-12 items-center py-6 border-b last:border-b-0 group hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    {/* Product Image & Title */}
                    <div className="col-span-12 sm:col-span-5 flex items-center space-x-4 mb-4 sm:mb-0">
                      <div className="relative">
                        <img
                          src={data.img}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                          alt={data.name}
                        />
                        <div className="absolute -top-2 -right-2 bg-[#ff7be5] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          {cartItems[data._id]}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{data.name}</p>
                        <p className="text-sm text-gray-500 sm:hidden">
                          ${data.price} × {cartItems[data._id]}
                        </p>
                      </div>
                    </div>

                    {/* Product Price (Desktop) */}
                    <div className="hidden sm:block col-span-2 text-center text-gray-700">
                      ${data.price}
                    </div>

                    {/* Quantity (Desktop) */}
                    <div className="hidden sm:block col-span-2 text-center text-gray-700">
                      {cartItems[data._id]}
                    </div>

                    {/* Total Price (Desktop) */}
                    <div className="hidden sm:block col-span-2 text-center font-semibold text-gray-900">
                      ${data.price * cartItems[data._id]}
                    </div>

                    {/* Remove Button */}
                    <div className="col-span-12 sm:col-span-1 flex justify-end sm:justify-center pt-4 sm:pt-0">
                      <button
                        onClick={() => removeFromCart(data._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200 group-hover:text-gray-600"
                        aria-label="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      <span className="font-semibold text-gray-900">
                        ${data.price * cartItems[data._id]}
                      </span>
                    </div>
                  </div>
                );
              }
            })}

            {/* Empty Cart Message */}
            {Object.keys(cartItems).length === 0 && (
              <div className="text-center py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-300 mb-4"
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
                <p className="text-gray-600 mb-4 text-lg">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="inline-block px-6 py-2 bg-[#000] text-white rounded-lg transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Continue Shopping Link */}
          {Object.keys(cartItems).length > 0 && (
            <div className="mt-6">
              <Link
                to="/shop"
                className="flex items-center text-[#000] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
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
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">${getTotalCartAmount()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">
                    ${getTotalCartAmount() === 0 ? 0 : 2}
                  </p>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <p className="text-gray-600">Estimated Tax</p>
                  <p className="font-medium">
                    ${(getTotalCartAmount() * 0.08).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 mb-6">
                <p className="font-bold text-gray-900">Total</p>
                <p className="text-xl font-bold text-gray-900">
                  $
                  {getTotalCartAmount() === 0
                    ? 0
                    : (getTotalCartAmount() + 2 + getTotalCartAmount() * 0.08).toFixed(2)}
                </p>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label
                  htmlFor="promo-code"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo-code"
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-[#ff7be5] focus:border-[#ff7be5] outline-none"
                  />
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700 transition-colors duration-200">
                    Apply
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigate("/order")}
                className="w-full py-3 bg-black text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                or{" "}
                <Link
                  to="/shop"
                  className="text-[#000]  font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
        
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;