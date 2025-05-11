import React from "react";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    // Handle subscription logic here (e.g., API call)
    console.log("Subscribed with:", email);
    e.target.reset();
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {/* Company Info */}
          <address className="space-y-3 not-italic">
            <h3 className="text-lg sm:text-xl font-bold">FAZIFFY</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              58 White St., New York
              <br />
              <a
                href="mailto:cosmecos_company@mail.com"
                className="hover:text-indigo-400 transition-colors duration-200"
                aria-label="Email us at cosmecos_company@mail.com"
              >
                cosmecos_company@mail.com
              </a>
              <br />
              <a
                href="tel:+180098745698"
                className="hover:text-indigo-400 transition-colors duration-200"
                aria-label="Call us at +1 (800) 987 456 98"
              >
                +1 (800) 987 456 98
              </a>
            </p>
          </address>

          {/* Useful Links */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold">Useful Links</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                className="text-gray-300 text-sm sm:text-base hover:text-indigo-400 transition-colors duration-200"
                aria-label="Go to Home page"
              >
                Home Pages
              </a>
              <a
                href="/contact"
                className="text-gray-300 text-sm sm:text-base hover:text-indigo-400 transition-colors duration-200"
                aria-label="Go to Contact page"
              >
                Contact Pages
              </a>
              <a
                href="/portfolio"
                className="text-gray-300 text-sm sm:text-base hover:text-indigo-400 transition-colors duration-200"
                aria-label="View Portfolio"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold">Subscribe</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <label htmlFor="email" className="sr-only">
                Email for subscription
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-2 sm:p-3 rounded bg-black text-white text-sm sm:text-base border border-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  transition-all duration-200 w-full"
                aria-label="Enter your email to subscribe"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded text-sm sm:text-base font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300 text-xs sm:text-sm">
          <p>© 2025 Faziffy Theme. All rights reserved.</p>
          <p>
            <a
              href="/terms"
              className="hover:text-indigo-400 transition-colors duration-200"
              aria-label="View Terms and Conditions"
            >
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;