import React from "react";

const categories = [
  {
    name: "Summer",
    img: "../Image/perfum-1.jpeg",
    alt: "Summer perfume category",
  },
  {
    name: "Office",
    img: "../Image/perfum-2.jpg",
    alt: "Office perfume category",
  },
  {
    name: "Western",
    img: "../Image/perfum-3.jpg",
    alt: "Western perfume category",
  },
  {
    name: "Gifting",
    img: "../Image/perfum-4.jpg",
    alt: "Gifting perfume category",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 font-serif tracking-tight text-gray-900">
          EXPLORE BY CATEGORY
        </h2>
        <div className="overflow-x-scroll overflow-y-hidden py-4 text-center">
          <div className="inline-flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            {categories.map((category, index) => (
              <div key={index} className="inline-block text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                  <img
                    src={category.img}
                    alt={category.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <span className="block mt-4 text-xs sm:text-sm lg:text-base font-medium text-black uppercase tracking-wide">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive and Custom Styles */}
      <style jsx>{`
        .overflow-x-scroll {
          -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .w-32,
          .h-32 {
            width: 28vw !important;
            height: 28vw !important;
            min-width: 120px;
            min-height: 120px;
          }
          .space-x-4 {
            gap: 1rem;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .w-40,
          .h-40 {
            width: 30vw !important;
            height: 30vw !important;
            min-width: 140px;
            min-height: 140px;
          }
          .space-x-6 {
            gap: 1.5rem;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .w-48,
          .h-48 {
            width: 22vw !important;
            height: 22vw !important;
            min-width: 160px;
            min-height: 160px;
          }
          .space-x-8 {
            gap: 2rem;
          }
        }
        @media (min-width: 1025px) {
          .container {
            max-width: 1280px;
          }
          .w-56,
          .h-56 {
            width: 20vw !important;
            height: 20vw !important;
            min-width: 180px;
            min-height: 180px;
          }
          .space-x-8 {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductCategories;