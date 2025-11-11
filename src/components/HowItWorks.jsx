import React from "react";

export default function HowItWorks() {
    const steps = [
        { title: "Sign Up", description: "Create your account in seconds" },
        { title: "Customize", description: "Tailor the platform to your needs" },
        { title: "Launch", description: "Start achieving your goals today" },
    ];

    return (
        <section id="how-it-works" className="py-20 px-4 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-400">How It Works</h2>
                    <p className="text-gray-100 text-sm">
                        Explain how to get started with your product in 3 simple steps.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                            <div className="text-3xl font-bold mb-3">{i + 1}</div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
