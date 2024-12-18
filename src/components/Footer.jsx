import React from "react";

import TSOC from '../assets/TCSOC_Hollow_White 1.svg';
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 max-w-[1280px] mx-auto mb-5 rounded-xl">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <img src={TSOC} alt="Timechain Logo" className="h-10" />
            <p className="text-lg font-light">
              Apply now to join us for an unforgettable summer!
            </p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 flex items-center gap-2">
              Apply Now <span>&#8595;</span>
            </button>
          </div>

          {/* TSoC Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">TSoC</h3>
            <ul className="space-y-2 text-sm">
              <li>Code of Conduct</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>How it works</li>
              <li>Mentors</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Community</li>
              <li>Projects</li>
              <li>Supporters</li>
              <li>2023 Programme</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Subscribe to the Timechain Summer of Code (TSOC)
            </h3>
            <div className="flex items-center border-2 border-white rounded-lg py-2 px-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 rounded-l-md text-black focus:outline-none bg-blue-500"
              />
              <button className="bg-yellow-400 px-4 rounded-lg p-2 hover:bg-yellow-500 text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-blue-400 mt-8 pt-4 text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Legal</a>
          </div>
          <div>
            <p>© 2023 TIMECHAIN LABS All Rights Reserved</p>
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Twitter">
              ✕
            </a>
            <a href="#" aria-label="LinkedIn">
              🔗
            </a>
            <a href="#" aria-label="Instagram">
              📸
            </a>
            <a href="#" aria-label="Discord">
              💬
            </a>
            <a href="#" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
