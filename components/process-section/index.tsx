import SubTitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import { Code, Figma, Rocket, SquareChartGantt } from "lucide-react";

const process = [
  {
    icon: <Figma size={42} />,
    title: "Design",
    subtitle: `Wireframes & Custom UI 
    prototypes`,
  },
  {
    icon: <Code size={42} />,
    title: `Development`,
    subtitle: `Clean code & database 
    integration`,
  },
  {
    icon: <SquareChartGantt size={42} />,
    title: "Review",
    subtitle: `Testing & client feedback 
    loops`,
  },
  {
    icon: <Rocket size={42} className="text-foreground" />,
    title: `Delivery`,
    subtitle: `Launch & post-launch 
    support`,
  },
];

export default function ProcessSection() {
  return (
    <div className="relative">
      <div>
        <div className="mb-15 md:mb-30">
          <Title>Transparent Process</Title>
          <div className="text-center mt-3 ">
            <SubTitle>
              We keep you involved at every stage. No black boxes, just clear
              progress from start to finish.
            </SubTitle>
          </div>
        </div>

        <div className=" text-white flex flex-col lg:flex-row justify-around  gap-10 lg:gap-0 ">
          {process.map((process, i) => (
            <div
              key={i}
              className="flex lg:flex-col gap-5 lg:gap-0  pl-10  z-20"
            >
              <div
                className={`${
                  process.title == "Delivery" ? "bg-primary" : "bg-frame"
                } p-2 border border-border lg:mx-auto w-24 h-24 relative rounded-full mb-12 z-20 shadow-process flex justify-center items-center`}
              >
                {process.icon}
                {process.title != "Delivery"&&<div className="bg-border h-[87px] rounded-full absolute top-24 left-[44] w-1.5 lg:hidden "></div>}
                
              </div>
              <div>
                <h3 className="font-bold lg:text-center text-xl whitespace-pre-line">
                  {process.title}
                </h3>
                <div className="lg:text-center mt-2">
                  <SubTitle>{process.subtitle}</SubTitle>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-border h-1.5 rounded-full absolute top-81.5 left-0 w-full hidden lg:block "></div>
        
        {/* <div className="bg-border h-[87px] rounded-full absolute top-113.5 left-21 w-1.5 lg:hidden "></div>
        <div className="bg-border h-[87px] rounded-full absolute top-159.5 left-21 w-1.5 lg:hidden "></div> */}
      </div>
    </div>
  );
}
