// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import { RocketIcon, SmartphoneIcon, CodeIcon, QuoteIcon, HelpCircleIcon } from "lucide-react";

const features = [
  { icon: <RocketIcon className="w-6 h-6 text-violet-400" />, title: "Fast Setup", desc: "Launch your project in minutes with our easy-to-use components." },
  { icon: <SmartphoneIcon className="w-6 h-6 text-violet-400" />, title: "Responsive Design", desc: "Looks great on every screen — mobile, tablet, or desktop." },
  { icon: <CodeIcon className="w-6 h-6 text-violet-400" />, title: "Modern Stack", desc: "Powered by React, Tailwind CSS, and Framer Motion." },
];

const testimonials = [
  { name: "Anjali Rao", quote: "“Straiver UI saved me countless hours. The animations and design are top-notch.”" },
  { name: "Rahul Mehta", quote: "“I showcased this landing page to my professor — he thought it was fully hand-coded. Amazing!”" },
];

const faqs = [
  { q: "Is this template customizable?", a: "Yes, you can modify text, layout, colors, and animations easily." },
  { q: "Do I need to know Tailwind CSS?", a: "Basic knowledge helps, but you can learn quickly by tweaking this template." },
];

export default function App() {
  return (
    <main className="relative font-inter text-white overflow-x-hidden bg-slate-950 min-h-screen">

      {/* 🔮 Background Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-sky-400 rounded-full blur-3xl opacity-20 -z-10" />
      <div
        className="pointer-events-none fixed inset-0 -z-20 animate-bgShift"
        style={{
          background:
            "radial-gradient(500px at 30% 10%, rgba(94,135,255,.2), transparent 80%)," +
            "radial-gradient(600px at 80% 50%, rgba(212,78,255,.15), transparent 70%)," +
            "radial-gradient(800px at 50% 120%, rgba(0,209,255,.1), transparent 70%)",
        }}
      />

      {/* 🟣 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent drop-shadow"
        >
          Build Smarter, Launch Faster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base/relaxed md:text-lg/relaxed text-slate-300"
        >
          Elevate your portfolio with a production-grade React + Tailwind landing page that stuns evaluators.
        </motion.p>
        <motion.a
          href="#features"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
        >
          Explore Features
        </motion.a>
      </section>

      {/* ✅ Features */}
      <section id="features" className="px-6 py-20 bg-slate-900/40">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-2xl shadow hover:scale-[1.02] transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-violet-400 mb-2">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="px-6 py-20 bg-slate-950">
        <h2 className="text-3xl font-bold mb-10 text-center">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl flex flex-col gap-4">
              <QuoteIcon className="text-violet-500 w-5 h-5" />
              <p className="text-slate-300 italic">{t.quote}</p>
              <p className="text-sm text-right mt-auto text-slate-400">– {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📣 Call to Action */}
      <section className="text-center px-6 py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500">
        <h2 className="text-3xl font-bold mb-4">Ready to Impress?</h2>
        <p className="text-slate-100 mb-6">Use Straiver to build projects that turn heads and win marks.</p>
        <a href="#" className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-slate-100">
          Get Started Free
        </a>
      </section>

      {/* ❓ FAQ */}
      <section className="px-6 py-20 bg-slate-900/40">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-l-4 border-violet-500 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <HelpCircleIcon className="w-4 h-4 text-violet-300" />
                <h3 className="font-semibold text-violet-300">{faq.q}</h3>
              </div>
              <p className="text-slate-300 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👣 Footer */}
      <footer className="py-6 text-center text-sm text-slate-500 bg-slate-950">
        &copy; {new Date().getFullYear()} Straiver. Built by Shamanth with 💜 and React.
      </footer>
    </main>
  );
}


