import { MessageCircle, Globe, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] bg-[#050505] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex items-center justify-center">
                <span className="text-black font-bold text-lg leading-none">W</span>
              </div>
              <span className="font-bold text-xl tracking-wider text-white">
                WOORI
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The premier Web3 campaign platform combining entertainment, exclusive NFTs, and real-world utility for token holders.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Movie</a></li>
              <li><a href="#benefits" className="hover:text-[#d4af37] transition-colors">Holder Benefits</a></li>
              <li><a href="#snapshot" className="hover:text-[#d4af37] transition-colors">Snapshot Rules</a></li>
              <li><a href="#faq" className="hover:text-[#d4af37] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Community</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-[#d4af37] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-[#d4af37] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-[#d4af37] transition-all">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} WOORI Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
