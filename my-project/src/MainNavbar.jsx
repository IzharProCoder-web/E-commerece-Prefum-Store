import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink instead of Link

const Navbar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="hidden justify-evenly items-center  bg-transparent hover:bg-white duration-1000 md:flex">
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
        <div className="w-[100px] p-0 m-0 ">
          <Link to="/">
            {" "}
            <img src="./Image/FAIZZIFY-LOGO.png" alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-[30px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")} // Add active class
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")} // Add active class
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "active" : "")} // Add active class
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")} // Add active class
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")} // Add active class
              >
                Contact
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
            <div className="absolute bg-pink-300 -bottom-[5px] -right-[8px] w-[20px] rounded-[50%] text-center text-white">
              <p>0</p>
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
            <div className="absolute bottom-[3px] -right-[20px] w-[20px] rounded-[50%] text-center ">
              <p>(0)</p>
            </div>
           </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex  justify-between items-center p-[20px] bg-transparent hover:bg-white duration-1000 ">
        {/* Search Bar */}
        <div
          className={`absolute  top-0 left-0 bg-white w-full text-center py-[24px]  z-30 ${
            isSearchBarOpen ? "block slide-down" : "hidden slide-up"
          }`}
        >
          <div className="flex  items-center gap-[70px]">
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
              className="lucide lucide-x cursor-pointer absolute right-0"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>

          <div className="flex  items-center border-b-[1px] border-[#41414199] py-1">
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

        {/* Hamburger Menu */}
        <div className="cursor-pointer" onClick={toggleMobileMenu}>
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
        </div>

        {/* Logo */}
        <div>
          <img
            src="./Image/FAIZZIFY-LOGO.png"
            alt="Logo"
            className="w-[70px] sm:w-[100px]"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-[15px] sm:gap-[15px]">
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
            <div className="absolute bg-pink-300 -bottom-[5px] -right-[8px] w-[20px] rounded-[50%] text-center text-white">
              <p>0</p>
            </div>
          </div>

          <div className="relative">
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
            <div className="absolute bottom-[0px] -right-[20px] w-[20px] rounded-[50%] text-center ">
              <p>(0)</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[0px] left-0 w-full bg-white transition-all z-30 duration-1000 ${
            isMobileMenuOpen ? "  block slide-down" : " slide-up hidden"
          } `}
        >
          {/* Cross SVG to Close Mobile Menu */}
          <div className="flex justify-end p-[20px] ">
            <svg
              onClick={toggleMobileMenu}
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-[20px] p-[20px] ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMobileMenu}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMobileMenu}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
