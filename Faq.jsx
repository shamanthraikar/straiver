import { useState } from "react";

const questions = [
  {
    q: "Is Straiver free to use?",
    a: "Yes, Straiver is completely free for students. No sign-up required to try basic features.",
  },
  {
    q: "Will there be more tools in the future?",
    a: "Yes! We're planning to add flashcards, exam reminders, and study plans soon.",
  },
];

export default function Faq() {
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions 🙋‍♀️</h2>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <Toggle key={index} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}

function Toggle({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md p-4 cursor-pointer border border-gray-200"
      onClick={() => setOpen(!open)}
    >
      <h3 className="font-semibold text-lg">{question}</h3>
      {open && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
}
