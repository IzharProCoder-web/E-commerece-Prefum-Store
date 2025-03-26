import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink instead of Link
import { StoreContext } from "./StoreContext";

const MainNavbar = ({ setShowLoginPop }) => {
  const { cartItems, favoriteItems } = useContext(StoreContext); // Access cartItems and favoriteItems from context
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate the total number of items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  // Calculate the total number of favorite items
  const getTotalFavoriteItems = () => {
    return Object.keys(favoriteItems).length;
  };

  const openSearchBar = () => {
    setIsSearchBarOpen(true);
  };

  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden  justify-evenly items-center bg-transparent hover:bg-white duration-1000 md:flex">
        {/* Search Bar */}
        <div
          className={`absolute top-0 bg-white w-full text-center py-[24px] px-[250px] z-30 ${
            isSearchBarOpen ? "block slide-down" : "hidden slide-up"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="text-[#41414199] text-[12px]">
              WHAT ARE YOU LOOKING FOR?
            </p>
            <svg
              onClick={closeSearchBar}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#41414199"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>

          <div className="flex justify-center items-center border-b-[1px] border-[#41414199] py-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-2xl text-black placeholder:text-black outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#41414199"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className="w-[100px] p-0 m-0">
          <Link to="/">
            <div className="flex items-center justify-center relative">
              <img src="../Image/FAIZZIFY-LOGO.png" alt="Logo" className="" />
              <p className="absolute top-[40%] left-[70px] font-bold">
                FAIZIFFY
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-[30px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex gap-[15px]">
          <svg
            onClick={openSearchBar}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <svg
            onClick={() => setShowLoginPop(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>

          <div className="relative">
            <Link to="/fav">
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
                className="cursor-pointer"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              {/* Display the total number of favorite items */}
              <div className="absolute bg-pink-300 -bottom-[5px] -right-[8px] w-[20px] rounded-[50%] text-center text-white">
                <p>{getTotalFavoriteItems()}</p>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Link to="/cart">
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
                className="cursor-pointer"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {/* Display the total number of items in the cart */}
              <div className="absolute bottom-[1px] -right-[20px] w-[20px] rounded-[50%] text-center">
                <p>({getTotalCartItems()})</p>
              </div>
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
            <span className=" font-bold text-lg">FAIZIFFY</span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button onClick={openSearchBar} className="p-1">
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
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <button onClick={() => setShowLoginPop(true)} className="p-1">
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
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </button>

          <Link to="/fav" className="p-1 relative">
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
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            {getTotalFavoriteItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-300 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalFavoriteItems()}
              </span>
            )}
          </Link>

          <Link to="/cart" className="p-1 relative">
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
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Search Bar */}
        {isSearchBarOpen && (
          <div className="absolute top-0 left-0 w-full bg-white p-4 shadow-md z-30">
            <div className="flex items-center border-b border-gray-300 pb-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none text-lg"
              />
              <button onClick={closeSearchBar} className="ml-2 text-gray-500">
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
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-16 overflow-y-auto">
            <div className="p-4">
              <ul className="space-y-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => 
                      `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-100 font-medium' : ''}`
                    }
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => 
                      `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-100 font-medium' : ''}`
                    }
                    onClick={toggleMobileMenu}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) => 
                      `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-100 font-medium' : ''}`
                    }
                    onClick={toggleMobileMenu}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => 
                      `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-100 font-medium' : ''}`
                    }
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) => 
                      `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-100 font-medium' : ''}`
                    }
                    onClick={toggleMobileMenu}
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MainNavbar;