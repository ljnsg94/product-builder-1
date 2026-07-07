"use client";

import { motion } from "framer-motion";
import { Ticket, Fingerprint, Crown } from "lucide-react";

const benefits = [
  {
    icon: Ticket,
    title: "VIP SMS Tickets",
    description: "Receive digital movie premiere tickets directly to your phone via SMS right after the snapshot.",
    highlight: "Real-world utility"
  },
  {
    icon: Fingerprint,
    title: "Exclusive NFT",
    description: "Mint an exclusive, soul-bound OK Madam 2 commemorative NFT that serves as your digital proof of attendance.",
    highlight: "Digital Collectible"
  },
  {
    icon: Crown,
    title: "Holder Privileges",
    description: "Unlock future benefits, exclusive merchandise, and early access to upcoming WOORI ecosystem events.",
    highlight: "Ongoing Rewards"
  }
];

export function TokenBenefits() {
  return (
    <section id="benefits" className="py-32 relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[120px] rounded-[100%]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Hold <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">WOORI</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We are bridging the gap between blockchain technology and blockbuster entertainment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/0 to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {benefit.highlight}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
