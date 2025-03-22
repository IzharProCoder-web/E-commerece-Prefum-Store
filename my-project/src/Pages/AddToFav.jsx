import React, { useContext } from "react";
import { StoreContext } from "../StoreContext"; // Adjust the import path as needed

const AddToFav = () => {
  const { favoriteItems, homeProductData } = useContext(StoreContext);

  return (
    <div className="mt-[100px] mb-10 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">
        Your Favorites
      </h1>
      {Object.keys(favoriteItems).length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your favorites list is empty. Start adding some items!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeProductData.map((data) => {
            if (favoriteItems[data._id]) {
              return (
                <div
                  key={data._id}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-full h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                   
                   
                  </div>

                  {/* Product Details */}
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-black transition-colors duration-200">
                      {data.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{data.scents}</p>
                    <p className="text-gray-800 font-semibold mt-2">
                      ${data.price}
                    </p>
                  </div>

                  {/* Add to Cart Button (Optional) */}
                  <button className="w-full mt-4 bg-[#ff7be5] text-white py-2 px-4 rounded-lg hover:bg-[#ff5cd8] transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default AddToFav;