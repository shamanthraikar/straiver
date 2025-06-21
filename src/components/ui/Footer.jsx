import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Straiver UI</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-300 hover:text-white transition">Privacy</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Terms</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
}
