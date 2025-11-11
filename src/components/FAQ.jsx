import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel anytime. You'll have access until the end of your billing period." },
    { q: "What payment methods do you accept?", a: "We accept credit cards, PayPal, and bank transfers for enterprise plans." },
    { q: "Is there a free trial available?", a: "Yes! We offer a 14-day free trial with full access to all features." },
    { q: "Do you offer refunds?", a: "We provide a 30-day money-back guarantee if you’re not satisfied." },
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-400">Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-850 transition cursor-pointer"
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            {openFaq === i && <div className="px-6 pb-4 text-gray-400 text-sm">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
