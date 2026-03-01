import Header from "./components/Header";
import TopSection from "./components/TopSection";
import LiquiditySection from "./components/LiquiditySection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import SecureSection from "./components/SecureSection";
import AboutSection from "./components/AboutSection";
import LiquidityProviderSection from "./components/LiquidityProviderSection";
import TradeSteps from "./components/TradeSteps";
import SwapSection from "./components/SwapSection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";

export default function Page() {
  return (
    <>
      <Header/>
      <TopSection/>
      <StatsSection/>
      <FeaturesSection/>
      <SecureSection/>
      <LiquiditySection/>
      <AboutSection/>
      <TradeSteps/>
      <LiquidityProviderSection/>
      <SwapSection/>
      <FaqSection/>
      <FooterSection/>
      
    </>
  );
}

