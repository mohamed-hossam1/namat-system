"use client";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { NAV_ITEMS } from "@/constants/routes";
import UserLogout from "../UserLogout";

const Header = ({
  setIsMobileOpen,
}: {
  setIsMobileOpen: (arg0: boolean) => void;
}) => {
  const pathname = usePathname();

  const headerName = NAV_ITEMS.filter((item) => item.href == pathname)[0] || {};

  return (
    <header
      className={`top-0 right-0 h-20 px-6 py-5 bg-background  mt-6  transition-all duration-300 rounded-t-2xl items-center`}
    >
      <div className="flex justify-between ">
        <div className="md:hidden flex items-center gap-4 ">

          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 mx-auto h-fit  bg-primary-gradient cursor-pointer hover:bg-primary-gradient rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            {headerName?.icon && (
              <headerName.icon className="text-primary-foreground" size={30} />
            )}
          </div>
          <h1 className="text-4xl font-bold text-text-color">
            {headerName ? headerName.label : ""}
          </h1>
        </div>

      </div>
    </header>
  );
};

export default Header;
