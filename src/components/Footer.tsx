import { Heart } from "lucide-react";

const CONTACT = {
  phone: "+91 63818 10189",
  email: "contact@envidoxsolutions.com",
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Envidox Solutions
            </h2>
            <p className="text-gray-600">
              Making reality ridiculously fun since 2024. Reality is overrated anyway.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">All Worlds</a></li>
              <li><a href="#" className="hover:text-gray-900">New Releases</a></li>
              <li><a href="#" className="hover:text-gray-900">Top Rated</a></li>
              <li><a href="#" className="hover:text-gray-900">Coming Soon</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Press Kit</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Community</a></li>
              <li><a href="#" className="hover:text-gray-900">Discord</a></li>
              <li><a href="#" className="hover:text-gray-900">Bug Reports</a></li>
            </ul>
          </div>

        </div>

        {/* Centered Contact */}
        <div className="mt-12 text-center space-y-3">
          <div className="text-lg font-semibold text-gray-900">
            Get in touch
          </div>
          <div className="text-gray-600">
            {CONTACT.phone}
          </div>
          <div className="text-gray-600 break-all">
            {CONTACT.email}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> by Envidox
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Terms</a>
            <a href="#" className="hover:text-gray-800">Cookies</a>
          </div>

          <div>© 2025 Envidox Solutions</div>
        </div>

      </div>
    </footer>
  );
}
