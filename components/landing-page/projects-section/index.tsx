import { SectionHeader } from "@/components/ui/SectionHeader";
import * as motion from "motion/react-client";
import Link from "next/link";

const projects = [
  {
    image: "",
    link: "",
    title: "Fashion Retailer Platform",
  },
  {
    image: "",
    link: "",
    title: `Admin Panel`,
  },
  {
    image: "",
    link: "",
    title: "Fashion Retailer Platform",
  },
  {
    image: "",
    link: "",
    title: `Admin Panel Support`,
  },
];

export default function ProjectsSection() {
  return (
    <>
      <div className="mb-15 md:mb-30">
        <SectionHeader
          title="Featured Projects"
          subtitle="See what we've built for other businesses."
        />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-white">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              key={index}
              href={project.link}
              className="bg-background border rounded-2xl h-90  border-border hover:border-primary transition-all duration-300 flex flex-col "
            >
              <div className="bg-frame  border border-border h-9/12 rounded-t-2xl flex justify-center items-center"></div>
              <div className="p-5 h-3/12 flex justify-center items-center">
                <h3 className="font-bold text-xl whitespace-pre-line">
                  {project.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
