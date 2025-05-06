// import React, { useState, useEffect } from 'react';
import React from 'react';
import HomeHeroComp from '../Components/Home/HomeHeroComp';
import HomeProduct from '../Components/Home/HomeProduct';
// import HomePopShowComp from '../Components/Home/HomePopShowComp';
import HomeAutoSlider from '../Components/Home/HomeAutoSlider';
import HomeMenWomen from '../Components/Home/HomeMenWomen';
import BestSellers from '../Components/Home/BestSellers';
import ProductCategories from '../Components/Home/HomeCategory';
import PolicyFeatures from '../Components/Home/PolicyFeatures';
import PerfumeCollection from '../Components/Home/PerfumeCollection';

const Home = () => {
  // const [showPopUp, setShowPopUp] = useState(true);

  // // Show the popup after 5 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopUp(true);
  //   }, 5000); // 5000 milliseconds = 5 seconds

  //   // Cleanup the timer when the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  // // Function to close the popup
  // const handleClosePopup = () => {
  //   setShowPopUp(false);
  // };

  return (
    <div className='overflow-hidden '>
      {/* {showPopUp && <HomePopShowComp onClose={handleClosePopup} />} */}
      <HomeHeroComp />
      <HomeAutoSlider />
      <HomeProduct />
      <HomeMenWomen />
      <BestSellers />
      <ProductCategories />
      <PolicyFeatures />
      <PerfumeCollection/>
    </div>
  );
};

export default Home;