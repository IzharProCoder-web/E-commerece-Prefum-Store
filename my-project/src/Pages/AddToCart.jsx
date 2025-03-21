import React, { useContext } from "react";
import { StoreContext } from "../StoreContext"; // Adjust the import path as needed
import { Link, useNavigate } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, homeProductData, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-[100px] mb-10 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      {/* Cart Items */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Table Header */}
        <div className="flex items-center text-[#666] text-sm sm:text-base py-4 border-b font-medium">
          <div className="flex-1">Item</div>
          <div className="flex-1">Title</div>
          <div className="flex-1">Price</div>
          <div className="flex-1">Quantity</div>
          <div className="flex-1">Total</div>
          <div className="flex-1 text-right">Remove</div>
        </div>

        {/* Cart Items List */}
        {homeProductData.map((data, index) => {
          if (cartItems[data._id] > 0) {
            return (
              <div
                key={index}
                className="flex items-center py-4 border-b hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Product Image */}
                <div className="flex-1">
                  <img
                    src={data.img}
                    className="w-[50px] h-[50px] object-cover rounded-lg"
                    alt={data.name}
                  />
                </div>

                {/* Product Title */}
                <div className="flex-1">
                  <p className="font-medium">{data.name}</p>
                </div>

                {/* Product Price */}
                <div className="flex-1">
                  <p className="text-gray-700">${data.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex-1">
                  <p className="text-gray-700">{cartItems[data._id]}</p>
                </div>

                {/* Total Price */}
                <div className="flex-1">
                  <p className="text-gray-700 font-semibold">
                    ${data.price * cartItems[data._id]}
                  </p>
                </div>

                {/* Remove Button */}
                <div className="flex-1 text-right">
                  <button
                    onClick={() => removeFromCart(data._id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          }
        })}

        {/* Empty Cart Message */}
        {Object.keys(cartItems).length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <Link
              to="/shop"
              className="text-sm text-[#ff7be5] hover:text-[#e56acf] transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Cart Totals and Promo Code */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Cart Totals */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Cart Totals</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-[#555]">
              <p>SubTotal</p>
              <p className="font-semibold">$ {getTotalCartAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery fee </p>
              <p className="font-semibold">
                ${getTotalCartAmount() === 0 ? 0 : 2}
              </p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-[#555]">
              <p>Total</p>
              <p className="font-semibold">
                $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="w-full mt-6 bg-[#ff7be5] text-white py-3 rounded-md hover:bg-[#e56acf] transition-colors duration-200"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Promo Code</h2>
          <p className="text-[#555] mb-4">
            If you have a promo code, enter it here
          </p>
          <div className="flex justify-between items-center bg-[#eaeaea] rounded-md p-2">
            <input
              type="text"
              placeholder="Promo Code"
              className="bg-transparent pl-2 border-none outline-none w-[70%]"
            />
            <button className="w-[150px] px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;