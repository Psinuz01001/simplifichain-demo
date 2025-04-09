import React from "react";
import { HeroSection } from "../components/HeroSection";
import { BlockchainIntro } from "../components/BlockchainIntro";
import { WhySimplify } from "../components/WhySimplify";
import { SimplificationGoals } from "../components/SimplificationGoals";
import { EarlyAccess } from "../components/EarlyAccess";
import { HowItWorks } from "../components/HowItWorks";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-transparent text-gray-900">
      <HeroSection />
      <BlockchainIntro />
      <WhySimplify />
      <SimplificationGoals />
      <HowItWorks />
      <EarlyAccess />
      <Footer />
    </main>
  );
};
