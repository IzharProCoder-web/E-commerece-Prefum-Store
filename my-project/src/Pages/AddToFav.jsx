import React, { useContext } from "react";
import { StoreContext } from "../StoreContext"; // Adjust the import path as needed

const AddToFav = () => {
  const { favoriteItems, homeProductData } = useContext(StoreContext);

  return (
    <div className="mt-[100px] mb-10 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      {Object.keys(favoriteItems).length === 0 ? (
        <p className="text-center text-gray-600">Your favorites list is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeProductData.map((data) => {
            if (favoriteItems[data._id]) {
              return (
                <div
                  key={data._id}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mt-4">{data.name}</h2>
                  <p className="text-gray-500">{data.scents}</p>
                  <p className="text-gray-800 font-semibold mt-2">
                    ${data.price}
                  </p>
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