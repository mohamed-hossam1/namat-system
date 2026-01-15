import FooterSection from "@/components/landing-page/footer-section";
import Navbar from "@/components/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <FooterSection />
    </main>
  );
}
