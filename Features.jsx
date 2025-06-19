// Features Section for Straiver UI
// Designed by: Shamanth G Raikar | June 2025

import { motion } from "framer-motion";
import { BookOpen, CheckSquare, FileText } from 'lucide-react';
import Features from './Features';


const features = [
  {
    title: "Smart Notes Assistant",
    description: "Get instant summaries of your handwritten or typed notes.",
    icon: <BookOpen className="h-8 w-8 text-indigo-500 drop-shadow" />,
  },
  {
    title: "Daily Planner",
    description: "Plan lectures, submissions, and deadlines — all in one view.",
    icon: <CheckSquare className="h-8 w-8 text-emerald-500 drop-shadow" />,
  },
  {
    title: "Career Toolkit",
    description: "Build resumes and track internships with smart templates.",
    icon: <FileText className="h-8 w-8 text-rose-500 drop-shadow" />,
  },
];


function Features() {
  return (
    <section className="bg-white py-16 px-6">
     
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Why Straiver Makes Student Life Easier 🚀
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
      {features.map((feature, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.25 }}
    className="bg-gray-100 p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300"
  >
    <div className="flex justify-center mb-4">{feature.icon}</div>
    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </motion.div>
))}

        
        
      </div>
      <p className="text-center mt-10 text-sm text-gray-400">
      More exciting tools coming soon to Straiver 🚧
      </p>

    </section>
  );
}

export default Features;
<Features />

