import React, { useContext } from "react";
import { StoreContext } from "../StoreContext"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { cartItems, homeProductData, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Logic to place the order (e.g., API call)
    alert("Order placed successfully!");
    navigate("/"); // Redirect to home page after placing the order
  };

  return (
    <div className="mt-[100px] mb-10 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Order Summary</h1>

      {/* Order Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Shipping and Payment */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Shipping Information
          </h2>

          {/* Shipping Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="123 Main St"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  placeholder="NY"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="10001"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5] focus:border-transparent transition-all"
              />
            </div>
          </form>

          {/* Payment Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Payment Details
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="text-gray-600">
                Payment integration can be added here (e.g., Stripe, PayPal).
              </p>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-[#000] text-white py-3 rounded-lg  transition-colors duration-200 font-semibold text-lg"
          >
            Place Order
          </button>
        </div>

        {/* Right Side - Order Items */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Your Order
          </h2>
          <div className="space-y-6">
            {homeProductData.map((data, index) => {
              if (cartItems[data._id] > 0) {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-gray-100"
                  >
                    {/* Product Image and Name */}
                    <div className="flex items-center gap-4">
                      <img
                        src={data.img}
                        className="w-16 h-16 object-cover rounded-lg"
                        alt={data.name}
                      />
                      <div>
                        <p className="font-medium text-gray-800">{data.name}</p>
                        <p className="text-sm text-gray-500">{data.scents}</p>
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center gap-4">
                      <p className="text-gray-700">x{cartItems[data._id]}</p>
                      <p className="text-gray-800 font-semibold">
                        ${data.price * cartItems[data._id]}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* Order Totals */}
          <div className="mt-8">
            <div className="flex justify-between text-gray-700">
              <p>SubTotal</p>
              <p className="font-semibold">$ {getTotalCartAmount()}</p>
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="flex justify-between text-gray-700">
              <p>Delivery fee </p>
              <p className="font-semibold">
                ${getTotalCartAmount() === 0 ? 0 : 2}
              </p>
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="flex justify-between text-gray-800">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">
                $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;