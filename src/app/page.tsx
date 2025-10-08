import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RoadmapSection from '@/components/RoadmapSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';



import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <div className="h-20"></div>
        <AboutSection />
        <div className="h-20"></div>
        <RoadmapSection />
        <div className="h-20"></div>
        <TestimonialsSection />
        <div className="h-20"></div>
        <PricingSection />
        <div className="h-20"></div>


        <Footer />
      </div>
    </main>
  );
}