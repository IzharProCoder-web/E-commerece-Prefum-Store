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
    <footer className="bg-black text-white py-8 sm:py-12 ">
      <div className="">
        <div className="flex flex-wrap md:justify-between justify-start md:items-center items-start gap-10 px-4  md:px-15">
          {/* Company Info */}
          <address className="space-y-3 not-italic">
            <h3 className="text-lg  font-bold">FAZIFFY</h3>
            <p className="text-gray-300 text-sm  leading-relaxed">
              Pakistan 
              <br />
              <a
                href="Faiziffy@gmail.com"
                className="hover:text-indigo-400 transition-colors duration-200"
                aria-label="Email us at Faiziffy@gmail.com"
              >
               Faiziffy@gmail.com
              </a>
              <br />
              <a
                href="tel:+92 312 9167293"
                className="hover:text-indigo-400 transition-colors duration-200"
                aria-label="Call us at +92 312 9167293"
              >
                +92 312 9167293
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
                className="bg-black text-white py-2 px-4 rounded text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white border-2 border-white "
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