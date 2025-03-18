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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <address className="space-y-4 not-italic">
            <h3 className="text-xl font-bold">COSMECOS</h3>
            <p className="text-gray-400">
              58 White St., New York
              <br />
              <a href="mailto:cosmecos_company@mail.com" className="hover:text-white">
                cosmecos_company@mail.com
              </a>
              <br />
              <a href="tel:+180098745698" className="hover:text-white">
                +1 (800) 987 456 98
              </a>
            </p>
          </address>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="/" className="text-gray-400 hover:text-white" aria-label="Home">
                  Home Pages
                </a>
                <a href="/other" className="text-gray-400 hover:text-white" aria-label="Other Pages">
                  Other Pages
                </a>
                <a href="/portfolio" className="text-gray-400 hover:text-white" aria-label="Portfolio">
                  Portfolio
                </a>
              </div>
              <div className="space-y-2">
                <a href="/blog" className="text-gray-400 hover:text-white" aria-label="Blog">
                  Blog Posts
                </a>
                <a href="/shop" className="text-gray-400 hover:text-white" aria-label="Shop">
                  Shop Products
                </a>
                <a href="/contact" className="text-gray-400 hover:text-white" aria-label="Contact">
                  Contacts
                </a>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Email for subscription"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
                aria-label="Subscribe"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Cosmecos Theme</p>
          <p>
            <a href="/terms" className="hover:text-white" aria-label="Terms and Conditions">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;