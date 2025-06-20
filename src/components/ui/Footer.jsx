import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Straiver</h2>
          <p className="text-sm text-gray-400">Unlock your creative potential.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Features</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Straiver. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
