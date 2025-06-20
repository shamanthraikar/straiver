import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/ui/Navbar.jsx";
import Features from "./components/ui/features.jsx";
import Testimonials from "./components/ui/Testimonials.jsx";
import Cta from "./components/ui/cta.jsx";
import Faq from "./components/ui/Faq.jsx";
import Footer from "./components/ui/Footer.jsx";

export default function App() {
  return (
    <main className="relative font-sans bg-gradient-to-br from-white via-indigo-100 to-purple-200 text-gray-800 overflow-hidden">

      {/* 🔵 Blurred Gradient Circles (background decoration) */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-indigo-300 rounded-full blur-3xl opacity-30 z-0" />

      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🎯 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-28">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-purple-700 mb-4"
        >
          Build Smarter, Launch Faster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl"
        >
          Elevate your startup with our modern UI/UX components. Fully responsive, clean, and designed for speed.
        </motion.p>

        <motion.a
          href="#features"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition"
        >
          Explore Features
        </motion.a>
      </section>

      {/* ✅ Sections */}
      <section className="relative z-10" id="features">
        <Features />
      </section>

      <section className="relative z-10 bg-white py-16 px-6">
        <Testimonials />
      </section>

      <section className="relative z-10 bg-indigo-50 py-16 px-6">
        <Cta />
      </section>

      <section className="relative z-10 bg-white py-16 px-6">
        <Faq />
      </section>

      <Footer />
    </main>
  );
}
