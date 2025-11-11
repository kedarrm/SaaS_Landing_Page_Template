import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import './App.css'


export default function SaaSLandingPage() {
  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6", "Partner 7", "Partner 8"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <Partners partners={partners} />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
