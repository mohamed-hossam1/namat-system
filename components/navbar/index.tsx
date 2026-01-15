import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";
import logo from "../../public/logo.png";
import { ROUTES } from "@/constants/routes";
import * as motion from "motion/react-client";

export default function Navbar() {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="absolute  inset-x-0 top-0 z-50 w-11/12 md:w-10/12 flex justify-between items-center m-auto"
      >
        <div className="flex pr-10 items-center justify-center gap-5">
          <Link href={ROUTES.LABDING} className=" transform duration-300 ">
            <Image src={logo} alt="Namat Logo" width={50} height={50} />
          </Link>
        </div>
        <nav className=" px-2 lg:px-4 flex justify-between bg-secondary py-2 gap-10 lg:gap-25 items-center text  mt-5  rounded-full border  shadow-lg ">
          <NavList />
        </nav>
        <Link
          href={ROUTES.LOGIN}
          className=" transform duration-300 font-bold px-4 py-2 md:px-6 md:py-3.5 h-fit text-lg text-text-color bg-primary-gradient rounded-2xl border flex items-center shadow-button/70 hover:shadow-button-hover justify-center"
        >
          Login
        </Link>
      </motion.div>
    </>
  );
}
