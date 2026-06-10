import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { SocialProof } from "./sections/SocialProof";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { AppPreview } from "./sections/AppPreview";
import { PromoBanner } from "./sections/PromoBanner";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-foodiez-ink">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <AppPreview />
        <PromoBanner />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
