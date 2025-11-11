import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded shadow-xl"></div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How it works</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            <button className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-500 transition font-medium cursor-pointer">
              CTA
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#features" className="block py-2 text-gray-300 hover:text-white">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-300 hover:text-white">How it works</a>
            <a href="#pricing" className="block py-2 text-gray-300 hover:text-white">Pricing</a>
            <a href="#faq" className="block py-2 text-gray-300 hover:text-white">FAQ</a>
            <button className="w-full bg-white text-black px-6 py-2 rounded mt-2 font-medium">CTA</button>
          </div>
        </div>
      )}
    </nav>
  );
}
