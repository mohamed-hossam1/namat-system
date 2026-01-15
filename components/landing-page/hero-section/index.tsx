import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <>
      <div className="w-fit relative mx-auto mb-5 sm:md-0 sm:mb-8 sm:flex sm:justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-between items-center rounded-full gap-1  px-3 py-1 font-bold text-primary border bg-frame  border-border"
        >
          <div className="bg-primary animate-pulse mr-1 w-[14px] h-[14px] rounded-full"></div>
          Accepting New Projects
        </motion.div>
      </div>
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-bold tracking-tight text-balance text-text-color sm:text-7xl"
        >
          Build Your{" "}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="text-primary"
          >
            Premium
          </motion.span>{" "}
          E-commerce Websites
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-7  hidden sm:block  font-medium  text-text-secondary sm:text-[18px] px-10"
        >
          Fast delivery. Custom UI design. Clear process. Your online store,
          built with Next.js & Supabase for performance that converts visitors
          into customers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Link
            href={ROUTES.LOGIN}
            className=" transform duration-300 bg-primary-gradient font-medium  px-3 py-2  sm:px-7 sm:py-4 text-[17px] sm:text-2xl rounded-xl border  flex items-center  shadow-button hover:shadow-button-hover  justify-center"
          >
            Start Your Project
          </Link>
        </motion.div>

        <div className="absolute top-[250px] right-[730px] -z-1 w-170 h-170 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      </div>
    </>
  );
}
