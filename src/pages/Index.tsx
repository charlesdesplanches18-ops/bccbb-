import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LawyersSection from "@/components/LawyersSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import PreAttendanceForm from "@/components/PreAttendanceForm";
import ContactSection from "@/components/ContactSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <LawyersSection />
      <PracticeAreasSection />
      <HowItWorksSection />
      <TrustSection />
      <PreAttendanceForm />
      <ContactSection />
      <FinalCtaSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;
