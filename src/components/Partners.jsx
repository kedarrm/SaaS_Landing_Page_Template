import React from "react";

export default function Partners({ partners }) {
  return (
    <section className="py-12 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold  text-gray-400 mb-2">Our Partners</h2>
        <p className="text-center text-gray-200 mb-8">Trusted by enterprises at</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((_, i) => (
            <div key={i} className="w-16 h-16 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
