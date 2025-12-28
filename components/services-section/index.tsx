import SubTitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import { ShoppingBag, Brush, LayoutDashboard,  } from "lucide-react";

const services = [
  {
    icon: <ShoppingBag size={38} />,
    title: "E-commerce Development",
    subtitle: "Robust, scalable online stores built for high performance and sales conversio.",
  },
  {
    icon: <Brush  size={38} />,
    title: `UI/UX 
    Design`,
    subtitle: "User-centric designs that look premium and convert visitors into loyal customers.",
  },
  {
    icon: <LayoutDashboard size={38} />,
    title: "Custom Dashboards",
    subtitle: "Intuitive back-end tools tailored to manage your specific business needs easily.",
  },
  {
    icon: <ShoppingBag size={38} />,
    title: `Ongoing 
    Support`,
    subtitle: "Reliable maintenance and updates to keep your store running smoothly 24/7.",
  },
];

export default function ServicesSection() {
  return (
    <>
      <div className="mb-15 md:mb-30">
        <Title>Core Services</Title>
        <div className="text-center mt-3 ">
          <SubTitle>
            We don't just build websites we craft complete e-commerce
            ecosystems.
          </SubTitle>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-white">
        {services.map((service, index) => (
          <div key={index} className=" p-9 bg-background border rounded-2xl border-border flex flex-col gap-8">
            <div className="bg-frame p-2 border border-border w-20 h-20 rounded-2xl flex justify-center items-center">
              {service.icon}
            </div>

            <h3 className="font-bold  text-[30px]/10 whitespace-pre-line">
              {service.title}
            </h3>
            <SubTitle>
              {service.subtitle}
            </SubTitle>
          </div>
        ))}
      </div>
    </>
  );
}
