"use client";

import { motion } from "framer-motion";
import { Coins, Wallet, Camera, Ticket, Image as ImageIcon } from "lucide-react";

const steps = [
  {
    icon: Coins,
    title: "Buy WOORI",
    description: "Acquire WOORI tokens on supported exchanges or DEXs before the snapshot deadline."
  },
  {
    icon: Wallet,
    title: "Hold Tokens",
    description: "Transfer your tokens to a non-custodial Web3 wallet (like MetaMask or TrustWallet)."
  },
  {
    icon: Camera,
    title: "Snapshot",
    description: "Our smart contracts will automatically record all eligible wallet addresses holding WOORI at the exact deadline."
  },
  {
    icon: Ticket,
    title: "Receive SMS",
    description: "Connect your wallet on this page to verify and provide your phone number for the VIP SMS Ticket."
  },
  {
    icon: ImageIcon,
    title: "Claim NFT",
    description: "Mint your exclusive soul-bound commemorative NFT as a digital collectible directly to your wallet."
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">Participate</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Follow these simple steps to secure your OK Madam 2 premiere ticket and exclusive NFT.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-[3.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#d4af37] text-[#d4af37] font-bold flex items-center justify-center text-sm z-20">
                  {idx + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 border border-white/10 group-hover:border-[#d4af37]/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <div className="absolute inset-0 bg-[#d4af37]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-10 h-10 text-white group-hover:text-[#d4af37] transition-colors relative z-10" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
