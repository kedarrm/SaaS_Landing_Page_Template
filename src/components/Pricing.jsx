import React from "react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$100",
      features: ["Up to 10 users", "Basic features", "Email support", "5GB storage", "Basic analytics"],
    },
    {
      name: "Professional",
      price: "$200",
      popular: true,
      features: ["Up to 50 users", "Advanced features", "Priority support", "50GB storage", "Advanced analytics", "Custom integrations"],
    },
    {
      name: "Enterprise",
      price: "$300",
      features: ["Unlimited users", "All features", "24/7 phone support", "Unlimited storage", "Custom analytics", "Dedicated manager"],
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-400">Pricing</h2>
        <p className="text-gray-100 text-sm mb-18">Choose the plan that fits your business.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl shadow border p-8 ${plan.popular ? "bg-white text-black border-white shadow-2xl -translate-y-10" : "bg-gray-900 border-gray-800"}`}
            >
              {plan.popular && (
                <div className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-xl inline-block mb-4">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.popular ? "text-gray-700" : "text-gray-500"}>/month</span>
              </div>
              <button
                className={`w-full py-3 rounded font-medium mb-6 transition cursor-pointer ${
                  plan.popular ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-300"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-2 text-sm text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <span className={`mr-2 ${plan.popular ? "text-black" : "text-white"}`}>•</span>
                    <span className={plan.popular ? "text-gray-700" : "text-gray-400"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
