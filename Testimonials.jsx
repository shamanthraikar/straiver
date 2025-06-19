import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Vanshika ",
    role: "2nd Year, NITK",
    feedback: "Straiver helped me stay on top of my assignments and build a great resume in no time!",
  },
  {
    name: "Rohan Das",
    role: "3rd year, CSE",
    feedback: "This dashboard made my college life so much easier!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">What Students Say 📣</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
