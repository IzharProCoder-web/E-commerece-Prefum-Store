import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreContext";

const MainNavbar = ({ setShowLoginPop }) => {
  const { cartItems, favoriteItems } = useContext(StoreContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  // Calculate totals
  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  const getTotalFavoriteItems = () => Object.keys(favoriteItems).length;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsDropdownOpen(false);
    alert("Logged out successfully!");
    navigate("/");
  };

  // Handle protected route clicks
  const handleProtectedLinkClick = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginPop(true);
      // Store the intended path to redirect after login
      localStorage.setItem("redirectAfterLogin", path);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-evenly items-center bg-transparent hover:bg-white transition-all duration-500">
        {/* Logo */}
        <div className="w-[100px] p-0 m-0">
          <Link to="/">
            <div className="flex items-center justify-center relative">
              <img src="../Image/FAIZZIFY-LOGO.png" alt="Logo" className="" />
              <p className="absolute top-[40%] left-[70px] font-bold text-lg text-gray-800">
                FAIZIFFY
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-8 uppercase text-2xl">
            {["/", "/about", "/shop", "/contact", "/faq"].map((path, idx) => (
              <li key={idx}>
                {path === "/" || path === "/about" ? (
                  // Public routes (Home and About)
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-[#ff7be5]"
                          : "text-gray-700 hover:text-[#ff7be5]"
                      }`
                    }
                  >
                    {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
                  </NavLink>
                ) : (
                  // Protected routes
                  <NavLink
                    to={path}
                    onClick={(e) => handleProtectedLinkClick(e, path)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-[#ff7be5]"
                          : "text-gray-700 hover:text-[#ff7be5]"
                      }`
                    }
                  >
                    {path.slice(1).replace("-", " ")}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Icons and User Section */}
        <div className="flex gap-4 items-center relative">
          {/* Account Icon and User Name */}
          <div className="relative flex items-center gap-2">
            <svg
              onClick={
                isLoggedIn ? toggleDropdown : () => setShowLoginPop(true)
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer text-gray-600 hover:text-[#ff7be5] transition-colors"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>

            {isLoggedIn && (
              <span
                onClick={toggleDropdown}
                className="text-sm font-semibold text-gray-800 hover:text-[#ff7be5] cursor-pointer transition-colors"
              >
                {user.name || "User"}
              </span>
            )}

            {/* Dropdown Menu */}
            {isLoggedIn && isDropdownOpen && (
              <div className="absolute right-0 top-10 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 animate-fadeIn">
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
                  <span className="text-sm font-semibold text-gray-800">
                    {user.name || "User"}
                  </span>
                  <svg
                    onClick={closeDropdown}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer text-gray-600 hover:text-[#ff7be5] transition-colors"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
                <ul className="py-2 ">
                  <li>
                    <Link
                      to="/order"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ff7be5] transition-colors"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ff7be5] transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Favorite Icon */}
          <div className="relative">
            <Link
              to="/fav"
              onClick={(e) => handleProtectedLinkClick(e, "/fav")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer text-gray-600 hover:text-[#ff7be5] transition-colors"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              {getTotalFavoriteItems() > 0 && (
                <div className="absolute bg-pink-400 -bottom-1 -right-2 w-5 h-5 rounded-full text-center text-white text-xs flex items-center justify-center">
                  {getTotalFavoriteItems()}
                </div>
              )}
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <Link
              to="/cart"
              onClick={(e) => handleProtectedLinkClick(e, "/cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer text-gray-600 hover:text-[#ff7be5] transition-colors"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {getTotalCartItems() > 0 && (
                <div className="absolute bg-gray-200 -bottom-1 -right-2 w-5 h-5 rounded-full text-center text-gray-800 text-xs flex items-center justify-center">
                  {getTotalCartItems()}
                </div>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center p-4 bg-white shadow-sm sticky top-0 z-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="./Image/FAIZZIFY-LOGO.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="font-bold text-lg text-gray-800">FAIZIFFY</span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {/* Account Icon and User Name for Mobile */}
          <div className="relative flex items-center gap-1">
            <button
              onClick={
                isLoggedIn ? toggleDropdown : () => setShowLoginPop(true)
              }
              className="p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600 hover:text-[#ff7be5] transition-colors"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </button>

            {isLoggedIn && (
              <span
                onClick={toggleDropdown}
                className="text-xs font-semibold text-gray-800 hover:text-[#ff7be5] cursor-pointer transition-colors truncate max-w-[80px]"
              >
                {user.name || "User"}
              </span>
            )}

            {/* Mobile Dropdown */}
            {isLoggedIn && isDropdownOpen && (
              <div className="absolute right-0 top-10 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 animate-fadeIn">
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
                  <span className="text-sm font-semibold text-gray-800">
                    {user.name || "User"}
                  </span>
                  <svg
                    onClick={closeDropdown}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer text-gray-600 hover:text-[#ff7be5] transition-colors"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
                <ul className="py-2">
                  <li>
                    <Link
                      to="/order"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ff7be5] transition-colors"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ff7be5] transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Favorite Icon (Mobile) */}
          <Link
            to="/fav"
            onClick={(e) => handleProtectedLinkClick(e, "/fav")}
            className="p-1 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 hover:text-[#ff7be5] transition-colors"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            {getTotalFavoriteItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalFavoriteItems()}
              </span>
            )}
          </Link>

          {/* Cart Icon (Mobile) */}
          <Link
            to="/cart"
            onClick={(e) => handleProtectedLinkClick(e, "/cart")}
            className="p-1 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 hover:text-[#ff7be5] transition-colors"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {getTotalCartItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-gray-200 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalCartItems()}
              </span>
            )}
          </Link>

          {/* Hamburger Menu */}
          <button onClick={toggleMobileMenu} className="p-1 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 hover:text-[#ff7be5] transition-colors"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-16 overflow-y-auto transition-all duration-300">
            <div className="p-4">
              <ul className="space-y-4 uppercase">
                {["/", "/about", "/shop", "/contact", "/faq"].map(
                  (path, idx) => (
                    <li key={idx}>
                      {path === "/" || path === "/about" ? (
                        <NavLink
                          to={path}
                          className={({ isActive }) =>
                            `block py-2 px-4 rounded-lg text-sm font-medium ${
                              isActive
                                ? "bg-gray-100 text-[#ff7be5]"
                                : "text-gray-700 hover:bg-gray-50 hover:text-[#ff7be5]"
                            }`
                          }
                          onClick={toggleMobileMenu}
                        >
                          {path === "/"
                            ? "Home"
                            : path.slice(1).replace("-", " ")}
                        </NavLink>
                      ) : (
                        <NavLink
                          to={path}
                          onClick={(e) => {
                            handleProtectedLinkClick(e, path);
                            toggleMobileMenu();
                          }}
                          className={({ isActive }) =>
                            `block py-2 px-4 rounded-lg text-sm font-medium ${
                              isActive
                                ? "bg-gray-100 text-[#ff7be5]"
                                : "text-gray-700 hover:bg-gray-50 hover:text-[#ff7be5]"
                            }`
                          }
                        >
                          {path.slice(1).replace("-", " ")}
                        </NavLink>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MainNavbar;
