import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechStart", text: "This platform transformed how we work. Incredible results in just 3 months!" },
    { name: "Michael Chen", role: "Product Manager", text: "The best investment we made this year. Our productivity increased by 200%." },
    { name: "Emily Rodriguez", role: "Founder, GrowthCo", text: "Outstanding support and features. Couldn’t imagine running our business without it." },
  ];

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-400">Loved by People Worldwide</h2>
        <p className="text-gray-100 text-sm mb-12">Here’s what our customers have to say.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-6">
              <div className="flex mb-4 justify-center">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-white">★</span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 text-sm italic">"{t.text}"</p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
