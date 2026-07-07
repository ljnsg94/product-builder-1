"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CheckCircle2, XCircle, Loader2, Phone } from "lucide-react";

export function WalletVerification() {
  const { isConnected, address } = useAccount();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  useEffect(() => {
    if (isConnected) {
      setIsVerifying(true);
      // Simulate blockchain verification delay
      const timer = setTimeout(() => {
        setIsVerifying(false);
        setIsEligible(true); // Mocking as eligible
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsEligible(null);
      setIsVerifying(false);
    }
  }, [isConnected, address]);

  return (
    <section className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Verify Your Eligibility
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Connect your wallet to check if you qualify for the exclusive OK Madam 2 premiere tickets and NFT drops.
          </p>

          <div className="flex flex-col items-center gap-8 relative z-10">
            {!isConnected && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <div className="p-1 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b5952f]">
                  <div className="bg-[#0a0a0a] rounded-xl p-2">
                    <ConnectButton />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Supports MetaMask, TrustWallet, Rainbow, and more via WalletConnect.
                </p>
              </motion.div>
            )}

            {isConnected && isVerifying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <Loader2 className="w-12 h-12 text-[#d4af37] animate-spin" />
                <p className="text-white font-medium">Scanning blockchain for WOORI holdings...</p>
              </motion.div>
            )}

            {isConnected && !isVerifying && isEligible === true && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="glass bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl p-6 mb-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
                  <p className="text-gray-300">
                    Your wallet {address?.slice(0, 6)}...{address?.slice(-4)} is eligible for the snapshot.
                  </p>
                </div>

                <div className="text-left space-y-4">
                  <label className="block text-sm font-medium text-gray-400">
                    Register Phone Number for SMS Ticket
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                    <button className="px-6 py-4 bg-gradient-to-r from-[#d4af37] to-[#b5952f] text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
                      Register
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    We value your privacy. Your number will only be used for ticket delivery.
                  </p>
                </div>
              </motion.div>
            )}

            {isConnected && !isVerifying && isEligible === false && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="glass bg-red-500/10 border border-red-500/30 rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Not Eligible Yet</h3>
                  <p className="text-gray-300 mb-4">
                    Your wallet does not meet the minimum WOORI holding requirement.
                  </p>
                  <a href="#how-it-works" className="text-[#d4af37] hover:underline font-medium">
                    Learn how to participate
                  </a>
                </div>
              </motion.div>
            )}
            
            {isConnected && (
              <div className="mt-8 pt-6 border-t border-white/10 w-full flex justify-center">
                <ConnectButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
