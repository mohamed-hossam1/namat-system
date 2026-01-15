import { SectionHeader } from "@/components/ui/SectionHeader";
import SubTitle from "@/components/ui/subtitle";
import * as motion from "motion/react-client";

import {
  ShoppingBag,
  Brush,
  LayoutDashboard,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <ShoppingBag size={38} />,
    title: "E-commerce Development",
    subtitle:
      "Robust, scalable online stores built for high performance and sales conversio.",
  },
  {
    icon: <Brush size={38} />,
    title: `UI/UX 
    Design`,
    subtitle:
      "User-centric designs that look premium and convert visitors into loyal customers.",
  },
  {
    icon: <LayoutDashboard size={38} />,
    title: "Custom Dashboards",
    subtitle:
      "Intuitive back-end tools tailored to manage your specific business needs easily.",
  },
  {
    icon: <ShoppingBag size={38} />,
    title: `Ongoing 
    Support`,
    subtitle:
      "Reliable maintenance and updates to keep your store running smoothly 24/7.",
  },
];

export default function ServicesSection() {
  return (
    <>
      <div className="mb-15 md:mb-30">
        <SectionHeader
          title="Core Services"
          subtitle="We don't just build websites we craft complete e-commerce
            ecosystems."
        />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-white">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            className=" p-9 bg-background-secondary hover:bg-white/[0.02] transition-colors group border  rounded-2xl border-border flex flex-col gap-8"
          >
            <div className="flex justify-between">
              <div className="bg-frame p-2 border border-border w-20 h-20 rounded-2xl flex justify-center items-center group-hover:border-primary/50 transition-colors">
                {service.icon}
              </div>
              <Link
                href={""}
                className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                LEARN MORE <ChevronRight size={14} />
              </Link>
            </div>

            <h3 className="font-bold  text-[30px]/10 whitespace-pre-line">
              {service.title}
            </h3>
            <SubTitle >{service.subtitle}</SubTitle>
          </motion.div>
        ))}
      </div>
    </>
  );
}
