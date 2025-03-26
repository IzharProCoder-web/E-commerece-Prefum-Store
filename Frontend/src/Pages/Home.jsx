import React, { useState, useEffect } from 'react';
import HomeHeroComp from '../Components/Home/HomeHeroComp';
import HomeProduct from '../Components/Home/HomeProduct';
import HomePopShowComp from '../Components/Home/HomePopShowComp';
import HomeAutoSlider from '../Components/Home/HomeAutoSlider';
import HomeMenWomen from '../Components/Home/HomeMenWomen';
import HomeFragrance from '../Components/Home/HomeFragrance';

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  // Show the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopUp(false);
  };

  return (
    <div>
      {showPopUp && <HomePopShowComp onClose={handleClosePopup} />}
      <HomeHeroComp />
      <HomeAutoSlider />
      <HomeProduct />
      <HomeMenWomen />
      <HomeFragrance />
    </div>
  );
};

export default Home;