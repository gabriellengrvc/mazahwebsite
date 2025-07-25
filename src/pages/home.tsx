import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AwardSection from "@/components/award-section";
import TestimonialsSection from "@/components/testimonials-section";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AwardSection />
      <FeaturesSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
