import React from "react";

const HomeMenWomen = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 mx-4 md:mx-10 text-white">
      {/* Women's Section */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden group rounded-lg shadow-xl">
        {/* Background Image Layer */}
        <div
          style={{ backgroundImage: "url('./Image/Women-Collection.webp')" }}
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-2 tracking-wider">FOR HER</h2>
          <p className="text-5xl md:text-6xl font-serif italic mb-4">ScadeUSlavies</p>
          <p className="text-xl md:text-2xl tracking-widest mb-6">CATCH22</p>
          <button className="px-8 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 uppercase tracking-wider font-medium">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Men's Section */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden group rounded-lg shadow-xl">
        {/* Background Image Layer */}
        <div
          style={{ backgroundImage: "url('./Image/Men-Collection.webp')" }}
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-2 tracking-wider">FOR HIM</h2>
          <p className="text-5xl md:text-6xl font-serif italic mb-4">ScadeUSlavies</p>
          <p className="text-xl md:text-2xl tracking-widest mb-6">CATCH22</p>
          <button className="px-8 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 uppercase tracking-wider font-medium">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMenWomen;