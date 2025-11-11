import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="w-8 h-8 bg-gray-200 rounded mb-4"></div>
          <p className="text-gray-600 text-xs">
            Include logo, links, newsletter/email signup
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Copyright, Privacy policy, social media icons
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-sm">Menu</h5>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                <Twitter size={18} /> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white flex items-center gap-2">
                <Youtube size={18} /> Youtube
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-sm">Legal</h5>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-sm">Newsletter</h5>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-900 rounded px-4 py-2 text-sm flex-1 focus:outline-2 focus:border-gray-100"
            />
            <button className="bg-gray-200 text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
