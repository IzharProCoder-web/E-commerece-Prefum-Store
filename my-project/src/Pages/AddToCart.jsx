import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext'; // Adjust the import path as needed

const AddToCart = () => {
  const { cartItems, homeProductData, removeFromCart } = useContext(StoreContext);

  console.log("Cart Items:", cartItems); // Log cartItems
  console.log("Home Product Data:", homeProductData); // Log homeProductData

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        {Object.keys(cartItems).length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {Object.keys(cartItems).map((itemId) => {
              const product = homeProductData.find((p) => p._id === itemId);
              if (!product) {
                console.error(`Product with ID ${itemId} not found.`);
                return null; // Skip rendering this item
              }
              return (
                <li key={itemId} className="flex items-center border-b pb-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="ml-6 flex-1">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">{product.scents}</p>
                    <p className="text-gray-600">Quantity: {cartItems[itemId]}</p>
                    <p className="text-lg font-bold">
                      ${(product.price * cartItems[itemId]).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(itemId)} // Call removeFromCart with itemId
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Total Price and Checkout Button */}
        {Object.keys(cartItems).length > 0 && (
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Total</h3>
              <p className="text-xl font-bold">
                $
                {Object.keys(cartItems).reduce((total, itemId) => {
                  const product = homeProductData.find((p) => p._id === itemId);
                  if (product) {
                    return total + product.price * cartItems[itemId];
                  }
                  return total;
                }, 0).toFixed(2)}
              </p>
            </div>
            <button
              className="w-full bg-[#ff7be5] text-white py-3 rounded-lg mt-6 hover:bg-[#e56acf] transition-colors duration-300"
              onClick={() => {
                // Add logic for checkout
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;