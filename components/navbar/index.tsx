import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";
import logo from "../../public/logo.png";
import { ROUTES } from "@/constants/routes";

export default function Navbar() {
  return (
    <>
      <div className="absolute  inset-x-0 top-0 z-50 bg-foreground mt-5 w-11/12 md:w-10/12 rounded-full border shadow-lg m-auto">
        <nav className=" px-12 lg:px-15 flex justify-between py-4 gap-10 lg:gap-25 items-center text shadow-sm">
          <div className="flex pr-10 items-center justify-center gap-5">
            <Link
              href={ROUTES.HOME}
              className=" transform duration-300 "
            >
              <Image src={logo} alt="Namat Logo" width={50} height={50} />
            </Link>
          </div>
          <NavList />
          <Link
            href={ROUTES.HOME}
            className=" transform duration-300 bg-primary font-bold px-2.5 py-2 md:px-5 md:py-3 text-lg rounded-full border border-black flex items-center shadow-button/30 hover:shadow-button-hover justify-center"
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}
