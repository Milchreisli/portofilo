import BackHome from "@/components/back-home";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import RoleSection from "./components/role";
import ImpactSection from "./components/impact";

export default function FoundationLabsPage() {
  return (
    <div className="min-h-screen py-20 noise-overlay">
      <div className="max-w-4xl mx-auto px-6">
        <HeroSection />
        <AboutSection />
        <RoleSection />
        <ImpactSection />
        <BackHome />
      </div>
    </div>
  );
}
