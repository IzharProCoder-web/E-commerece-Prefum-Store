import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContextProvider from "../src/StoreContext"; // Import the StoreContextProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContextProvider> {/* Wrap the App with StoreContextProvider */}
    <App />
  </StoreContextProvider>
);