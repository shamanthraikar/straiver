import React from "react";
import { motion } from "framer-motion";
const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 rounded bg-blue-600 text-white" {...props}>
    {children}
  </button>
);



export default function Cta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-white p-8 rounded-xl shadow-md mt-10"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-gray-600 mb-6">Join us now and explore the experience.</p>
      <Button>Get Started</Button>
    </motion.section>
  );
}

