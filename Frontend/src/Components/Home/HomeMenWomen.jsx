import React from "react";

const HomeMenWomen = () => {
  return (
    <section className="flex flex-col md:flex-row mx-4 md:mx-10 text-white ">
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden group">
        {/* Background Image Layer */}
        <div
          style={{ backgroundImage: "url('./Image/Women-Collection.webp')" }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
        ></div>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#E6ADB8] opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
        {/* Overlay Content (Position Unchanged) */}
        <div className="bg-[#b0838ba0] w-[200px] md:w-[300px] h-[150px] md:h-[250px] absolute top-[150px]  sm:top-[120px] right-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-bold">Women Perfumes</h2>
            <button className="border-b-[2px] border-[#FFF] absolute bottom-[20px] right-[120px]">
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden group mt-4 md:mt-0">
        {/* Background Image Layer */}
        <div
          style={{ backgroundImage: "url('./Image/Men-Collection.webp')" }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
        ></div>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#E6ADB8] opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
        {/* Overlay Content (Position Unchanged) */}
        <div className="bg-[#ff7be5a1] w-[200px] md:w-[300px] h-[150px] md:h-[250px] top-[150px]  absolute sm:top-[120px] left-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-bold text-white">Men Perfumes</h2>
            <button className="border-b-[2px] border-[#FFF] absolute bottom-[20px] right-[120px]">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMenWomen;