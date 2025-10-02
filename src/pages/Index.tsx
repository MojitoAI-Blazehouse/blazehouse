import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import JoinTheHustle from "@/components/JoinTheHustle";
import TwoWaysSection from "@/components/TwoWaysSection";
import RedRoomSection from "@/components/RedRoomSection";
import TrialSection from "@/components/TrialSection";
import LifestyleSection from "@/components/LifestyleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <JoinTheHustle />
      <TwoWaysSection />
      <RedRoomSection />
      <TrialSection />
      <LifestyleSection />
      <Footer />
    </div>
  );
};

export default Index;
