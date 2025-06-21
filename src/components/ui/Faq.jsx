import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is Straiver?",
    answer: "Straiver is a modern platform designed to help users build and launch UI projects easily using the latest tools like Vite, React, and Tailwind.",
  },
  {
    question: "Is it beginner friendly?",
    answer: "Absolutely. The platform is made with beginners in mind, offering a smooth learning curve and clean components.",
  },
  {
    question: "Can I use this for free?",
    answer: "Yes! You can start building and experimenting with all features for free.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 cursor-pointer shadow-sm hover:shadow-md transition"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

