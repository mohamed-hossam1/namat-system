import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProcessSection from "@/components/process-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import WhyUsSection from "@/components/whyus-section";

export default function Home() {
  return (
    <main>
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-[710px] pt-32 sm:pt-48 lg:pt-50 min-h-[80vh] sm:min-h-screen ">
          <Navbar></Navbar>
          <HeroSection></HeroSection>
        </div>
      </div>
      <div className="bg-foreground relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <ServicesSection />
        </div>
      </div>

      <div className="bg-background relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <ProcessSection />
        </div>
      </div>

      <div className="bg-foreground relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <ProjectsSection />
        </div>
      </div>

      <div className="bg-background relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <WhyUsSection />
        </div>
      </div>

      <div className="bg-foreground relative px-6 border-t border-t-border ">
        <div className="mx-auto w-11/12 md:w-10/12  ">
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
