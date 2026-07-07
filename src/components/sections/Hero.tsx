"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ticket } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set snapshot target date (e.g., 7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#0a0a0a]" />
        
        {/* Animated Glow Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#d4af37]/30 text-[#d4af37] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
              </span>
              Snapshot Event Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              OK MADAM 2
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">
                Exclusive Premiere
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
              Hold WOORI tokens to unlock VIP movie premiere tickets, exclusive digital collectibles, and a premium cinematic experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#snapshot" className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b5952f] text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Verify Eligibility <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#benefits" className="px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                View Benefits <Ticket className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:justify-self-end w-full max-w-md"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-[50px]" />
              
              <h3 className="text-2xl font-bold text-white mb-2">Snapshot Countdown</h3>
              <p className="text-gray-400 text-sm mb-6">Time remaining to hold WOORI tokens</p>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-full aspect-square glass rounded-xl flex items-center justify-center mb-2 border border-white/5">
                      <span className="text-2xl font-bold text-white">{item.value.toString().padStart(2, '0')}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Reward Pool</span>
                  <span className="text-[#d4af37] font-bold">10,000 Tickets</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] h-2 rounded-full w-[65%]" />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>65% Claimed</span>
                  <span>Ends in {timeLeft.days} days</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
