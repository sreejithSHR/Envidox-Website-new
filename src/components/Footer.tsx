import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/50 bg-white/50 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-gray-900 mb-4">Envidox Solutions</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Making reality ridiculously fun since 2024. Reality is overrated anyway.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">All Worlds</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Coming Soon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Bug Reports</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> by Fun enthusiasts in Envidox
            </div>

            <p className="text-gray-500">
              © 2025 Envidox Solutions. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
