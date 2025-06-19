import { motion } from "framer-motion";
import Features from "./Features.jsx";
import Testimonials from "./Testimonials.jsx";
import Cta from "./Cta.jsx";
import Faq from "./Faq.jsx";
import { TextReveal } from "magic-ui";




function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 to-blue-200 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        
        <TextReveal>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Straiver: Your AI Productivity Partner
      </h1>
</TextReveal>

        <p className="text-lg text-gray-700 mb-6">
          Organize, learn, and grow with our intelligent student dashboard.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition">
          Get Started
        </button>
      </motion.div>
      <Features />
<Testimonials />
<Cta />
<Faq />



    </main>
  );
}

export default App;
