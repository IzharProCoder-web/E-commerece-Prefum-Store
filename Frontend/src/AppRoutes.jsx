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
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  404 - Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Oops! The page you’re looking for doesn’t exist.
                </p>
                <a
                  href="/"
                  className="px-4 py-2 bg-brown-600 text-black rounded hover:bg-brown-700 transition"
                >
                  Go Back Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;