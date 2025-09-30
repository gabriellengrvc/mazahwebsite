import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AwardSection from "@/components/award-section";
import TestimonialsSection from "@/components/testimonials-section";
import DownloadSection from "@/components/download-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AwardSection />
      <FeaturesSection />
      <TestimonialsSection />
      <DownloadSection />
    </div>
  );
}
