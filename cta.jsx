// Cta.jsx
import { motion } from "framer-motion";
import { MagicButton } from "magic-ui";


export default function Cta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16 px-6 text-center rounded-xl shadow-md mt-20 mx-4 border border-gray-200"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Built by students, for students 🧠
      </h2>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        Straiver is designed to help you manage notes, deadlines, and your resume — all in one place. It's simple, free, and made to reduce your college chaos.
      </p>
     
      <MagicButton
  className="mt-4"
  direction="right"
  borderRadius="1.5rem"
  href="#"
>
  Try Straiver — No Sign Up Needed
</MagicButton>

    </motion.section>
  );
}
