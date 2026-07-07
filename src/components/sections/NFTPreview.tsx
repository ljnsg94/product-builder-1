"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { Sparkles } from "lucide-react";

export function NFTPreview() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-32 relative bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 flex justify-center perspective-[1000px]">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm aspect-[3/4] cursor-pointer"
            >
              {/* Back Glow */}
              <div 
                className="absolute inset-0 bg-[#d4af37]/30 blur-[80px] rounded-3xl"
                style={{ transform: "translateZ(-50px)" }}
              />
              
              {/* NFT Card */}
              <div 
                className="absolute inset-0 bg-[#111] rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl flex flex-col"
                style={{ transform: "translateZ(0px)" }}
              >
                <div className="relative flex-1">
                  <img 
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop" 
                    alt="NFT Art"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  
                  {/* Holographic Overlay overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
                
                <div className="p-6 relative z-10 bg-[#111] shrink-0 border-t border-[#d4af37]/20">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <p className="text-[#d4af37] text-xs font-bold tracking-widest mb-1 uppercase">Legendary Edition</p>
                      <h4 className="text-white font-bold text-xl">OK MADAM 2 VIP Pass</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#d4af37]" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Soul-bound Token #0000</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">Digital Asset</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Your OK Madam 2 premiere ticket isn't just an entry pass—it's a digital collectible. Eligible holders can mint this exclusive soul-bound NFT as a permanent record of their participation.
            </p>

            <ul className="space-y-6">
              {[
                "Minted on a carbon-neutral blockchain",
                "Non-transferable Soul-Bound Token (SBT)",
                "Grants access to future WOORI events",
                "Comes with exclusive digital artwork"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button disabled className="px-8 py-4 glass text-gray-400 font-bold rounded-full cursor-not-allowed border-white/10">
                Minting Opens After Snapshot
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
