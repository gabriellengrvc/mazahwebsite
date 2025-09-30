import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AwardSection from "@/components/award-section";
import PressSection from "@/components/press-section";
import DownloadSection from "@/components/download-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AwardSection />
      <FeaturesSection />
      <PressSection />
      <DownloadSection />
    </div>
  );
}
