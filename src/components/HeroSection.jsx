import React from "react";

export default function HeroSection() {
    return (
        <section className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-gray-400 mb-4">TAGLINE GOES HERE</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-neutral-300">Title/Heading</h1>
                    <p className="text-lg text-gray-400 mb-8">
                        Mention Key Problem / What you sell / Make it clearly understandable
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-neutral-200 text-black px-8 py-3 font-medium hover:bg-gray-400 transition rounded-3xl shadow-2xl cursor-pointer">
                            Primary CTA
                        </button>
                        <button className="border border-gray-600 text-white px-8 py-3 cursor-pointer hover:bg-gray-900 transition font-medium rounded-3xl">
                            Secondary CTA
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full h-112 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center">
                        <p className="text-gray-600">
                            Product video or screenshot of your software goes here
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
