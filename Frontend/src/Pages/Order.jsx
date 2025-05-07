import React, { useContext } from "react";
import { StoreContext } from "../StoreContext"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { cartItems, homeProductData, shopProductData, getTotalCartAmount, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const allProductData = [...homeProductData, ...shopProductData];

  const generateEmailBill = () => {
    const items = allProductData
      .filter((data) => cartItems[data._id] > 0)
      .map(
        (data) => `
          <tr style="border-bottom: 1px solid #e5e7eb; padding: 16px 0;">
            <td style="padding: 8px;">
              <img src="${data.img}" alt="${data.name}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px;" />
            </td>
            <td style="padding: 8px; font-weight: 500; color: #1f2937;">${data.name}</td>
            <td style="padding: 8px; color: #4b5563;">Rs ${data.price}</td>
            <td style="padding: 8px; color: #4b5563;">x${cartItems[data._id]}</td>
            <td style="padding: 8px; font-weight: 600; color: #1f2937;">Rs ${(
              data.price * cartItems[data._id]
            ).toFixed(2)}</td>
          </tr>
        `
      )
      .join("");

    const subtotal = getTotalCartAmount();
    const deliveryFee = subtotal === 0 ? 0 : 200;
    const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

    return `
      <html>
        <body style="font-family: Arial, sans-serif; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 16px;">
          <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 24px;">Order Confirmation</h2>
          <p style="color: #4b5563; margin-bottom: 16px;">Thank you for your order! Below is your bill summary.</p>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Order Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <thead>
              <tr style="background-color: #f9fafb; text-align: left;">
                <th style="padding: 8px;"></th>
                <th style="padding: 8px;">Product</th>
                <th style="padding: 8px;">Price</th>
                <th style="padding: 8px;">Quantity</th>
                <th style="padding: 8px;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${items}
            </tbody>
          </table>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #4b5563;">Subtotal</span>
              <span style="font-weight: 600;">Rs ${subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: #4b5563;">Delivery Fee</span>
              <span style="font-weight: 600;">Rs ${deliveryFee.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: 600;">
              <span>Total</span>
              <span>Rs ${total.toFixed(2)}</span>
            </div>
          </div>
          <p style="color: #4b5563; margin-top: 24px;">For any questions, contact us at support@example.com.</p>
        </body>
      </html>
    `;
  };

  const handlePlaceOrder = () => {
    // Generate and log email bill
    const emailBill = generateEmailBill();
    console.log("Sending bill to itzizharkhan2@gmail.com:");
    console.log(emailBill);

    // Clear the cart
    clearCart();

    // Show success message and redirect
    alert("Order placed successfully!");
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="mt-[100px] mb-10 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Order Summary</h1>

      {/* Order Details */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Shipping and Payment */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Shipping Information</h2>

          {/* Shipping Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input
                type="text"
                placeholder="123 Main St"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  placeholder="NY"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                placeholder="10001"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>
          </form>

          {/* Payment Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Payment Details</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="text-gray-600">Payment Method: Cash on Delivery</p>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-semibold text-lg"
          >
            Place Order
          </button>
        </div>

        {/* Right Side - Order Items */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Order</h2>
          <div className="space-y-6">
            {allProductData.map((data) => {
              if (cartItems[data._id] > 0) {
                return (
                  <div
                    key={data._id}
                    className="flex items-center justify-between py-4 border-b border-gray-100"
                  >
                    {/* Product Image and Details */}
                    <div className="flex items-center gap-4">
                      <img
                        src={data.img}
                        className="w-16 h-16 object-cover rounded-lg"
                        alt={data.name}
                      />
                      <div>
                        <p className="font-medium text-gray-800">{data.name}</p>
                        <p className="text-sm text-gray-500">{data.scents}</p>
                        <p className="text-sm text-gray-600">Price: Rs {data.price}</p>
                      </div>
                    </div>

                    {/* Quantity and Total Price */}
                    <div className="flex items-center gap-4">
                      <p className="text-gray-700">x{cartItems[data._id]}</p>
                      <p className="text-gray-800 font-semibold">
                        Rs {(data.price * cartItems[data._id]).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Order Totals */}
          <div className="mt-8">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p className="font-semibold">Rs {getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="flex justify-between text-gray-700">
              <p>Delivery fee</p>
              <p className="font-semibold">Rs {getTotalCartAmount() === 0 ? 0 : 200}</p>
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="flex justify-between text-gray-800">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">
                Rs {(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;