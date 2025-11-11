import React from "react";

export default function Benefits() {
  const benefits = [
    { title: "Automated Workflows", description: "Save time with intelligent automation" },
    { title: "Real-time Analytics", description: "Make data-driven decisions instantly" },
    { title: "Seamless Integration", description: "Connect with your favorite tools" },
    { title: "Advanced Security", description: "Enterprise-grade protection" },
    { title: "Team Collaboration", description: "Work better together" },
    { title: "24/7 Support", description: "We're here when you need us" },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-400">Benefits</h2>
          <p className="text-gray-100 text-sm mb-4">
            Focus on how it helps users instead of listing raw features.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-gray-900 border-gray-800 rounded-xl hover:shadow-2xl p-6 hover:border hover:border-gray-700 transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
