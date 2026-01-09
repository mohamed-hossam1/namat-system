"use client";
import FooterSection from "@/components/landing-page/footer-section";
import HeroSection from "@/components/landing-page/hero-section";
import Navbar from "@/components/navbar";
import ProcessSection from "@/components/landing-page/process-section";
import ProjectsSection from "@/components/landing-page/projects-section";
import ServicesSection from "@/components/landing-page/services-section";
import WhyUsSection from "@/components/landing-page/whyus-section";

export default function Home() {
  return (
    <main>
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-[710px] pt-32 sm:pt-48 lg:pt-50 min-h-[80vh] sm:min-h-screen ">
          <Navbar></Navbar>
          <HeroSection></HeroSection>
        </div>
      </div>

      <div className=" relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <ServicesSection />
        </div>
      </div>

      <div className="bg-background relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <ProcessSection />
        </div>
      </div>

      <div className="bg-secondary-background relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <ProjectsSection />
        </div>
      </div>

      <div className="bg-background relative px-6  lg:px-8">
        <div className="mx-auto w-11/12 md:w-10/12 py-15 sm:py-22 lg:py-25">
          <WhyUsSection />
        </div>
      </div>

      <footer className="relative z-10 py-20 px-8 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-4 h-4 bg-primary rounded-sm rotate-45" />
            <span className="font-black text-sm tracking-[0.3em]">NAMAT</span>
          </div>
          <p className="text-[10px] font-bold tracking-[0.5em] text-text-secondary">
            © 2026 ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  );
}
