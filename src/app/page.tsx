import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MovieIntro } from "@/components/sections/MovieIntro";
import { TokenBenefits } from "@/components/sections/TokenBenefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SnapshotSection } from "@/components/sections/SnapshotSection";
import { WalletVerification } from "@/components/sections/WalletVerification";
import { NFTPreview } from "@/components/sections/NFTPreview";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <Hero />
      <MovieIntro />
      <TokenBenefits />
      <HowItWorks />
      <SnapshotSection />
      <WalletVerification />
      <NFTPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
