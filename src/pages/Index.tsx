import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ProcessSection from "@/components/ProcessSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import FAQSection from "@/components/FAQSection";
import CTABandSection from "@/components/CTABandSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AuthoritySection />
        <ServicesSection />
        <DifferentiatorSection />
        <ProcessSection />
        <ObjectionsSection />
        <FAQSection />
        <CTABandSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
