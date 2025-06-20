import React from "react";

export default function Features() {
  const features = [
    {
      title: "Smart Dashboard",
      description: "Track your progress, tasks, and deadlines all in one place.",
    },
    {
      title: "AI-Powered Assistant",
      description: "Let AI help you organize, plan, and study efficiently.",
    },
    {
      title: "Seamless Integration",
      description: "Connect with tools like Notion, Google Calendar, and more.",
    },
  ];

  return (
    <section id="features" className="py-12 bg-white rounded-xl shadow-sm">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-medium text-violet-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
