import { SectionHeader } from "@/components/ui/SectionHeader";
import SubTitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import { Code, Figma, Rocket, SquareChartGantt } from "lucide-react";
import * as motion from "motion/react-client";

const process = [
  {
    icon: <Figma size={42} />,
    title: "Design",
    subtitle: `Wireframes & Custom UI 
    prototypes`,
    isActive: false,
  },
  {
    icon: <Code size={42} />,
    title: `Development`,
    subtitle: `Clean code & database 
    integration`,
    isActive: false,
  },
  {
    icon: <SquareChartGantt size={42} />,
    title: "Review",
    subtitle: `Testing & client feedback 
    loops`,
    isActive: false,
  },
  {
    icon: <Rocket size={42} className="text-text-color" />,
    title: `Delivery`,
    subtitle: `Launch & post-launch 
    support`,
    isActive: true,
  },
];

export default function ProcessSection() {
  return (
    <div className="relative">
      <div>
        <div className="mb-15 md:mb-30">
          <SectionHeader
            title="Transparent Process"
            subtitle="We keep you involved at every stage. No black boxes, just clear progress from start to finish."
          />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="absolute top-12 left-0 w-full h-[2px] bg-border hidden md:block z-0" />

            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 text-center"
              >
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center border-4 border-border shadow-2xl mb-8 ${
                    step.isActive
                      ? "bg-primary text-border"
                      : "bg-card text-white border-border"
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 ">{step.title}</h3>
                <p className="text-text-secondary text-sm font-medium leading-relaxed px-4 whitespace-pre-line">
                  {step.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
