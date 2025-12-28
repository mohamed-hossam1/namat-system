import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="w-fit mx-auto mb-5 sm:md-0 sm:mb-8 sm:flex sm:justify-center">
        <div className="relative flex justify-between items-center rounded-full gap-1  px-3 py-1 font-bold text-badge border bg-frame  border-border">
          <div className="bg-badge w-[14px] h-[14px] rounded-full"></div>
          Accepting New Projects
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-balance text-white sm:text-7xl">
          Build Your <span className="text-primary">Premium</span> E-commerce
          Websites
        </h1>
        <p className="mt-7  hidden sm:block  font-medium  text-secondary sm:text-[18px] px-10">
          Fast delivery. Custom UI design. Clear process. Your online store,
          built with Next.js & Supabase for performance that converts visitors
          into customers.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={ROUTES.FACEBOOK}
            className=" transform duration-300 bg-primary font-medium  px-3 py-2  sm:px-7 sm:py-4 text-[17px] sm:text-2xl rounded-xl border  flex items-center  shadow-button hover:shadow-button-hover  justify-center"
          >
            Start Your Project
          </Link>

          <Link
            href={ROUTES.FACEBOOK}
            className=" transform duration-300 bg-frame text-white font-medium px-3 py-2 sm:px-7 sm:py-4 text-[17px]  sm:text-2xl rounded-xl border border-border hover:border-white/40   flex items-center  justify-center"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </>
  );
}
