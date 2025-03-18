import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const LoginPop = ({ setShowLoginPop }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currState, setCurrState] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className={`fixed  inset-0 bg-[#3c3a3abf] bg-opacity-50 flex items-center justify-center z-50 p-4`}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setShowLoginPop(false)}
          className=" absolute right-[10px] top-[10px]  text-[#000] hover:text-gray-700 text-3xl"
        >
          <IoMdClose />
        </button>

        {/* Login Form */}
        <h2 className="text-2xl font-bold mb-6 text-center">{currState}</h2>
        <form onSubmit={handleSubmit}>
       {currState === "Login" ? <></> :  <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="Enter Your Full Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5]"
              placeholder="Enter your email"
              required
            />
          </div>}

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7be5]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff7be5] text-white py-2 rounded-lg hover:bg-[#e56acf] transition-colors duration-300"
          >
            {currState === "Login" ? "Login" : "Create Account"}
          </button>
        </form>

        {currState === "Login" ? (
          <p className="mt-4">
            Create A New Account{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className=" cursor-pointer text-[#ff7be5]"
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="mt-4">
            Already have an Account{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="cursor-pointer text-[#ff7be5]"
            >
              LogIn
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPop;