import FooterSection from "@/components/landing-page/footer-section";
import HeroSection from "@/components/landing-page/hero-section";
import ProcessSection from "@/components/landing-page/process-section";
import ProjectsSection from "@/components/landing-page/projects-section";
import ServicesSection from "@/components/landing-page/services-section";
import WhyUsSection from "@/components/landing-page/whyus-section";
import { auth } from "@/auth";

export default async function Home() {
  const session  = await auth()
  console.log(session)
  return (
    <>
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-[710px] pt-32 sm:pt-48 lg:pt-50 min-h-[80vh] sm:min-h-screen ">
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

      <FooterSection />
    </>
  );
}
