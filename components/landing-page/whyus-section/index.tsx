import SubTitle from "@/components/ui/subtitle";
import { Eye, Ban, Gauge } from "lucide-react";
import * as motion from "motion/react-client";

const process = [
  {
    icon: <Eye size={37} className="text-foreground" />,
    title: "100% Transparency",
    subtitle: `Weekly progress previews so you never have to guess where your project stands.`,
  },
  {
    icon: <Ban size={37} />,
    title: `No Generic Templates`,
    subtitle: `Every line of code and every pixel is crafted specifically for your brand identity.`,
  },
  {
    icon: <Gauge size={37} />,
    title: "Performance First",
    subtitle: `Google PageSpeed 90+ score and SEO-optimized from day one`,
  },
];

export default function WhyUsSection() {
  return (
    <>
      <div className="lg:flex relative">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="hidden sm:block font-bold tracking-tight text-balance text-white sm:text-5xl">
              Built on Transparency, Trust, and Technical Excellence.
            </h2>
            <h2 className="block  sm:hidden text-5xl font-bold tracking-tight text-balance text-white sm:text-5xl">
              Why US
            </h2>
            <div className=" mt-3 ">
              <SubTitle>
                We understand the local market and the global standards. We
                bridge the gap to deliver world-class software.
              </SubTitle>
            </div>
          </motion.div>
          <div>
            <div className=" text-white flex flex-col justify-around  gap-15  mt-15 ">
              {process.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center  gap-5  z-20"
                >
                  <div
                    className={`${
                      process.title == "100% Transparency"
                        ? "bg-primary"
                        : "bg-card"
                    } p-2 border border-border  min-w-19 min-h-19 rounded-full  z-20  flex justify-center items-center`}
                  >
                    {process.icon}
                  </div>
                  <div>
                    <h3 className="font-bold  text-xl whitespace-pre-line">
                      {process.title}
                    </h3>
                    <div className=" mt-2">
                      <SubTitle>{process.subtitle}</SubTitle>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="flex-1 z-10"
        >
          <div className="lg:ml-20 mt-9 lg:mt-0 w-full bg-background-secondary  md:text-[19px] flex flex-col justify-between py-7 px-5 md:py-17  md:px-15  rounded-2xl border border-border h-full shadow-md text-white">
            <div className="flex flex-col gap-4">
              <p>
                {" "}
                <span className="text-[#84C0D4]">const</span>{" "}
                <span className="pl-3 text-[#FFBC1B]"> Project</span>{" "}
                <span className="pl-1">{"  = { "}</span>{" "}
              </p>
              <p>
                {" "}
                <span className="pl-5 text-[#B2C2D2]">client:</span>{" "}
                <span className="pl-3 text-[#FDE68A]"> 'Your Business'</span>{" "}
                <span>{"  ,"}</span>{" "}
              </p>
              <p>
                {" "}
                <span className="pl-5 text-[#B2C2D2]">solution:</span>{" "}
                <span className="pl-3 text-[#FDE68A]">
                  {" "}
                  'Custom E-Commerce'
                </span>{" "}
                <span>{"  ,"}</span>{" "}
              </p>
              <p>
                {" "}
                <span className="pl-5 text-[#B2C2D2]">quality:</span>{" "}
                <span className="pl-3 text-[#FFBC1B]"> true</span>{" "}
                <span>{"  ,"}</span>{" "}
              </p>
              <p>
                {" "}
                <span className="pl-5 text-[#B2C2D2]">template:</span>{" "}
                <span className="pl-3 text-[#FF5353]"> false</span>{" "}
                <span>{"  ,"}</span>{" "}
              </p>
              <p>
                {" "}
                <span className="pl-5 text-[#B2C2D2]">delivery:</span>{" "}
                <span className="pl-3 text-[#FDE68A]"> 'On Time'</span>{" "}
              </p>
              <p>{"}"}</p>
            </div>

            <div className=" mt-15 flex flex-col gap-4">
              <p>
                {" "}
                <span className="text-[#91E3FF]">await</span>{" "}
                <span className="pl-3 text-[#FFCC52]"> NAMAT</span>{" "}
                <span> . </span> <span className="text-[#84C0D4]"> build</span>{" "}
                <span>{"("}</span>{" "}
                <span className="text-[#FFBC1B]">Project</span>{" "}
                <span>{");"}</span>{" "}
              </p>
              <p className="text-[#B2C2D2]">// Ready to launch your vision</p>
            </div>
          </div>
        </motion.div>
        <div className="absolute top-[40px] right-[110px] z-1 w-170 h-170 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      </div>
    </>
  );
}
