import React from "react";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-400">Ready to Get Started?</h2>
        <p className="text-gray-100 text-sm mb-8">Start your free trial today. No credit card required.</p>
        <button className="bg-gray-300 cursor-pointer text-black px-10 py-4 rounded text-lg font-medium hover:bg-gray-500 transition">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
