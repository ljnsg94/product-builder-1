"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, AlertTriangle } from "lucide-react";

export function SnapshotSection() {
  return (
    <section id="snapshot" className="py-32 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verified Process
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Snapshot Rules & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">Eligibility</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8">
              To ensure a fair distribution of OK Madam 2 premiere tickets and NFTs, we will take a network snapshot at a specific block height. Please read the rules carefully to guarantee your eligibility.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Minimum Holdings", desc: "You must hold at least 1,000 WOORI tokens in your wallet." },
                { title: "No Exchange Wallets", desc: "Tokens held on centralized exchanges (CEX) will NOT be counted. Please use a self-custodial Web3 wallet." },
                { title: "Exact Timing", desc: "The snapshot will occur exactly at 12:00 PM UTC on the deadline day. Ensure your transfer is completed before this time." }
              ].map((rule, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{rule.title}</h4>
                    <p className="text-gray-400 text-sm">{rule.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-[#d4af37]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[80px]" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 glass rounded-2xl border border-white/10">
                  <Clock className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Snapshot Target</h3>
                  <p className="text-gray-400">Block Height Tracking</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="glass p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                  <span className="text-gray-400">Target Date</span>
                  <span className="text-white font-bold text-right">October 15, 2026<br /><span className="text-sm text-[#d4af37]">12:00 PM UTC</span></span>
                </div>
                <div className="glass p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                  <span className="text-gray-400">Target Block</span>
                  <span className="text-white font-mono font-bold tracking-wider">#18,294,000 (est.)</span>
                </div>
                <div className="glass p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                  <span className="text-gray-400">Current Block</span>
                  <span className="text-white font-mono font-bold tracking-wider">#18,250,142</span>
                </div>
              </div>

              <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 p-4 rounded-xl flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <p className="text-sm text-[#d4af37]/90 leading-relaxed">
                  Do not move your tokens until we officially announce that the snapshot has been successfully completed across all networks.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
