import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-violet-600 tracking-wide">Straiver</h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#features" className="text-gray-700 hover:text-violet-600 transition">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-violet-600 transition">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-violet-600 transition">FAQ</a>
          <a href="#cta" className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
