import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import FleetSection from "../components/FleetSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GroupCompanies from "../components/GroupCompanies";
import RentalCategories from "../components/RentalCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <AboutSection />
     <StatsSection />
     <FleetSection />
     <ServicesSection />
     <ProjectsSection />
     <TestimonialsSection />
      <GroupCompanies />
        <RentalCategories />
        <WhyChooseUs />
        <CTA />
        <ContactSection />
        <Footer />

    </>
    
  );
}