import React from "react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Take your projects to the next level with our easy-to-use platform.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition">
          Join Now
        </button>
      </motion.div>
    </section>
  );
}
