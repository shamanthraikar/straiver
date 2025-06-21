import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Straiver</h1>
      <ul className="flex space-x-4 text-gray-600 font-medium">
        <li>Home</li>
        <li>Features</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}




