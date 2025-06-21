import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arjun R.",
      feedback: "This platform saved me tons of time! Super easy and reliable.",
    },
    {
      name: "Sneha K.",
      feedback: "Beautiful design and smooth animations. Loved the experience!",
    },
    {
      name: "Rahul S.",
      feedback: "Highly recommend this for anyone starting out in tech.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">What Users Say</h2>
        <p className="text-gray-600 text-lg mb-12">
          Hear feedback from some of our early users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white border rounded-2xl shadow p-6"
            >
              <p className="text-gray-700 mb-4 italic">“{t.feedback}”</p>
              <h3 className="text-blue-800 font-semibold">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
