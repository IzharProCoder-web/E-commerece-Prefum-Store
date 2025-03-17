import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import TopNavbar from "./TopNabar";
import MainNavbar from "./MainNavbar";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <MainNavbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;