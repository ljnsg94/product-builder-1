"use client";

import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex items-center justify-center">
            <span className="text-black font-bold text-lg leading-none">W</span>
          </div>
          <span className="font-bold text-xl tracking-wider text-white">
            WOORI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-[#d4af37] transition-colors">
            About
          </a>
          <a href="#benefits" className="hover:text-[#d4af37] transition-colors">
            Benefits
          </a>
          <a href="#snapshot" className="hover:text-[#d4af37] transition-colors">
            Snapshot
          </a>
          <a href="#faq" className="hover:text-[#d4af37] transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center">
          <ConnectButton 
            chainStatus="icon" 
            showBalance={false}
          />
        </div>
      </div>
    </motion.nav>
  );
}
