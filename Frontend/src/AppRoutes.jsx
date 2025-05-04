import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import AddToCart from "./Pages/AddToCart";
import AddToFav from "./Pages/AddToFav";
import LoginPop from "./Components/LoginPop";
import TopNavbar from "./TopNabar";
import MainNavbar from "./MainNavbar";
import FAQ from "./Pages/FAQ";
import Footer from "./Components/Footer";
import Order from "./Pages/Order";

const AppRoutes = () => {
  const [showLoginPop, setShowLoginPop] = useState(false);
  return (
    <>
      {showLoginPop ? <LoginPop setShowLoginPop={setShowLoginPop} /> : <></>}
      <TopNavbar />
      <MainNavbar setShowLoginPop={setShowLoginPop} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/fav" element={<AddToFav />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;