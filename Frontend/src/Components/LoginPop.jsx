import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const LoginPop = ({ setShowLoginPop }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [currState, setCurrState] = useState("Login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const url = currState === "Login"
      ? "http://localhost:8000/perfume/login"
      : "http://localhost:8000/perfume/signup";
    const payload = currState === "Login"
      ? { email, password }
      : { name, email, password };

    try {
      const response = await axios.post(url, payload);
      if (response.data.success) {
        if (currState === "Login") {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          setShowLoginPop(false);
          alert("Login successful!");
        } else {
          alert("Signup successful! Please log in.");
          setCurrState("Login");
          setName("");
          setEmail("");
          setPassword("");
        }
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong!";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#3c3a3abf] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => setShowLoginPop(false)}
          className="absolute right-[10px] top-[10px] text-[#000] hover:text-gray-700 text-3xl"
          aria-label="Close login popup"
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">{currState}</h2>
        <form onSubmit={handleSubmit}>
          {currState === "Sign Up" && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000]"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000]"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#000] text-white py-2 rounded-lg  transition-colors duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading
              ? "Loading..."
              : currState === "Login"
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        {currState === "Login" ? (
          <p className="mt-4 text-center">
            Create a new account?{" "}
            <button
              onClick={() => setCurrState("Sign Up")}
              className="text-[#686565] font-medium hover:underline focus:outline-none"
            >
              Sign Up
            </button>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button
              onClick={() => setCurrState("Login")}
              className="text-[#686565] font-medium hover:underline focus:outline-none"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPop;