import React from "react";

const HomeFragrance = () => {
  return (
    <section className="my-[50px]  flex flex-col lg:flex-row relative ">
      {/* Left Section: Text Content */}
      <div className="bg-[#F4EFE9] text-black flex flex-col items-start w-full lg:w-[70%] h-[500px] pt-[60px] xl:pl-[100px] xl:pr-[450px] lg:pl-[70px] lg:pr-[300px] sm:p-0 px-4">
        <p className="text-[#ff7be5] text-[14px] font-[Jost] tracking-widest">
          O U R F R A G R A N C E J O U R N E Y
        </p>
        <h3 className="py-4 text-4xl font-bold font-[Gabarito]">
          Crafting Scents with Passion and Precision
        </h3>
        <p className="font-[Jost] text-[16px] py-[10px]">
          At Odora, we believe that every fragrance tells a story. Our journey
          began with a passion for creating unique and memorable scents that
          capture the essence of life's special moments.
        </p>
        <p className="font-[Jost] text-[16px] py-[10px]">
          Quality is at the heart of everything we do at Odora. We are dedicated
          to offering a curated selection of the world's finest perfumes sourced
          from renowned.
        </p>
        <button className="bg-[#ff7be5] text-white rounded-full px-[30px] py-[10px] my-[10px] font-[Jost]">
          DISCOVER NOW
        </button>
      </div>

      {/* Right Section: Images */}
      <div className="w-full lg:w-[30%] ">
      <div className="lg:absolute lg:top-[40px] bottom-0   right-0">
          <img
            src="./Image/Aboust-us-img-1.webp"
            alt="About Us Image"
            className=" xl:w-[550px] lg:w-[400px] w-full"
          />
        </div>
        <div className="absolute lg:top-[100px] top-[300px] xl:right-[450px] lg:right-[300px]">
          <img
            src="./Image/filler5.webp"
            alt="Filler Image"
            className="xl:w-[250px] lg:w-[150px] lg:block hidden h-auto"
          />
        </div>
       
      </div>
    </section>
  );
};

export default HomeFragrance;