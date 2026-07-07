"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "When exactly is the snapshot taking place?",
    answer: "The snapshot is scheduled for October 15, 2026, at 12:00 PM UTC. We will monitor the exact block height and make an official announcement once it is completed."
  },
  {
    question: "How many WOORI tokens do I need to hold?",
    answer: "To be eligible for the OK Madam 2 premiere tickets and the exclusive NFT drop, you must hold a minimum of 1,000 WOORI tokens in a self-custodial Web3 wallet."
  },
  {
    question: "Can I keep my tokens on Binance or OKX?",
    answer: "No. Tokens held on centralized exchanges will not be eligible for the snapshot. Please transfer your tokens to a non-custodial wallet like MetaMask, TrustWallet, or Rainbow."
  },
  {
    question: "How will I receive the premiere ticket?",
    answer: "After the snapshot is verified, eligible holders will be prompted to register their phone number via the Wallet Verification section. The VIP ticket will be sent via SMS securely."
  },
  {
    question: "Is the NFT free to mint?",
    answer: "Yes, the OK Madam 2 commemorative NFT is completely free to mint for eligible holders. You will only need to pay the standard network gas fee."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-[#d4af37]">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen ? "border-[#d4af37]/30 bg-[#d4af37]/5" : "border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${isOpen ? "text-[#d4af37]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#d4af37]" : "text-gray-500"
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-400"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
