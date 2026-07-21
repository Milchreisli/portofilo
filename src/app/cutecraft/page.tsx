import BackHome from "@/components/back-home";
import {
  faCode,
  faPalette,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "./components/hero";
import WhatIsCuteCraftSection from "./components/what-is-cutecraft";
import ServerFeaturesSection from "./components/features";
import MyRoleSection from "./components/contribution";
import TechnologiesSection from "./components/techs";
import CommunityLinksSection from "./components/links";
import ServerInfoSection from "./components/info";

export default function CuteCraftPage() {
  const myContributions = [
    {
      icon: faCode,
      title: "Policys",
      description:
        "Ensuring player safety with guidelines and regulations.",
      color: "text-blue-400",
    },
    {
      icon: faPalette,
      title: "UI Design",
      description: "Designing beautiful user interfaces with custom textures",
      color: "text-pink-400",
    },
  ];

  const features = [
    {
      title: "🌼 Gameplay",
      description:
        "Build your own houses, structures, deal with other players, expand your plot, make it more unique and find new friends!",
    },
    {
      title: "🇩🇪 German Community",
      description: "A welcoming German-speaking community with kind & helpful staff members",
    },
    {
      title: "⚡ Modern Infrastructure",
      description:
        "High-performance servers with custom plugins and using velocity as a proxy",
    },
    {
      title: "🎨 Custom Content",
      description:
        "Unique items, textures, and features designed specifically for CuteCraft",
    },
  ];

  return (
    <div className="min-h-screen py-20 noise-overlay">
      <div className="max-w-4xl mx-auto px-6">
        <HeroSection />
        <WhatIsCuteCraftSection />
        <ServerFeaturesSection features={features} />
        <MyRoleSection contributions={myContributions} />
        <TechnologiesSection />
        <CommunityLinksSection />
        <ServerInfoSection />
        <BackHome />
      </div>
    </div>
  );
}
