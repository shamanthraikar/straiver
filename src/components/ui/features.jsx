import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Fast Setup",
      description: "Get started in minutes with easy configuration.",
    },
    {
      title: "Responsive Design",
      description: "Optimized for mobile, tablet, and desktop views.",
    },
    {
      title: "Secure & Reliable",
      description: "Your data is protected with top-grade security.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Powerful Features</h2>
        <p className="text-gray-600 text-lg mb-12">
          Discover what makes our platform exceptional and effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
