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
import HomeDiscount from "../src/Components/Home/HomeDiscount";
import ProtectedRoute from "./Components/ProtectedRoute";


const AppRoutes = () => {
  const [showLoginPop, setShowLoginPop] = useState(false);
  return (
    <>
      {showLoginPop ? <LoginPop setShowLoginPop={setShowLoginPop} /> : <></>}
      <TopNavbar />
      <MainNavbar setShowLoginPop={setShowLoginPop} />
      <Routes>
        {/* Public routes - anyone can access */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected routes - need login */}
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <AddToCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fav"
          element={
            <ProtectedRoute>
              <AddToFav />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <ProtectedRoute>
              <FAQ />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
      </Routes>
      <HomeDiscount />

      <Footer />
    </>
  );
};

export default AppRoutes;
