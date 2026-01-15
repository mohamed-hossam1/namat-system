import Navbar from "@/components/navbar"

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
}
