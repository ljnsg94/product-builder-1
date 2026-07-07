"use client";

import { motion } from "framer-motion";
import { PlayCircle, Calendar, MapPin, Users } from "lucide-react";

export function MovieIntro() {
  return (
    <section id="about" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#d4af37]/20 rounded-2xl blur-[80px] group-hover:bg-[#d4af37]/30 transition-all duration-700" />
            <div className="relative aspect-[2/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-card border border-white/10 group-hover:border-[#d4af37]/50 transition-colors duration-500">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop" 
                alt="OK Madam 2 Movie Poster"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#d4af37]/90 group-hover:scale-110 transition-all duration-300">
                  <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-4">The Sequel Arrives</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              An action comedy that transcends the screen.
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Following the massive success of the original, OK Madam 2 brings bigger laughs, higher stakes, and now—an exclusive Web3 experience for our most loyal fans. Holders of WOORI tokens aren't just viewers; you are part of the premiere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Calendar, label: "Premiere Date", value: "Q4 2026" },
                { icon: MapPin, label: "Location", value: "Exclusive Venues" },
                { icon: Users, label: "Exclusive Access", value: "WOORI Holders" },
                { icon: PlayCircle, label: "Genre", value: "Action Comedy" },
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <item.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
