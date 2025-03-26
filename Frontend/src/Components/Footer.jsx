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
    <footer className="bg-[#FAF5F2] text-black py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <address className="space-y-4 not-italic">
            <h3 className="text-xl font-bold">FAZIFFY</h3>
            <p className="text-black">
              58 White St., New York
              <br />
              <a
                href="mailto:cosmecos_company@mail.com"
                className="hover:text-white"
              >
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
            <div className="grid grid-cols gap-4">
              <div className="space-y-2 flex flex-col">
                <a href="/" className="text-black " aria-label="Home">
                  Home Pages
                </a>
                <a href="/contact " className=" " aria-label="Other Pages">
                  Contact Pages
                </a>
                <p className=" " aria-label="Portfolio">
                  Portfolio
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-2 rounded   ring-2 ring-purple-500 placeholder:text-zinc-950"
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
        <div className="border-t border-black text-black mt-8 pt-8 text-center ">
          <p>© 2025 Faziffy Theme</p>
          <p>
            <a
              href="/terms"
              className="hover:text-white"
              aria-label="Terms and Conditions"
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
