"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import Image from "next/image";
import Logo from "@/public/logo.png";
import { NAV_ITEMS } from "@/constants/routes";
import { usePathname } from "next/navigation";
import LogoutButton from "../Logoutbutton";

const Sidebar = ({
  isMobileOpen,
  setIsMobileOpen,
}: {
  isMobileOpen: boolean;
  setIsMobileOpen: (arg0: boolean) => void;
}) => {
  const pathname = usePathname();

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
        fixed md:sticky top-0 h-[94.9vh] bg-background rounded-2xl transition-all duration-300 z-90  m-6
        ${isCollapsed ? "md:w-20" : "md:w-64"}
        w-64
        ${isMobileOpen ? "-translate-x-4" : "-translate-x-[120%]"}
        md:translate-x-0
      `}
    >
      <div className="flex flex-col  justify-between h-full">
        <div>
          <div className={`flex justify-between ${isCollapsed?"pl-5":"pl-6"} pl-5 pr-6 py-4 h-22 items-center`}>
            <div className={`   ${isCollapsed ? "hidden md:hidden" : ""}`}>
              <div>
                <Image alt="Logo" width={55} height={55} src={Logo} />
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth < 768
                  ) {
                    setIsMobileOpen(false);
                  } else {
                    setIsCollapsed(!isCollapsed);
                  }
                }}
                className="p-2 mx-auto  bg-primary-gradient cursor-pointer hover:bg-primary-gradient rounded-lg transition-colors"
              >
                {typeof window !== "undefined" && window.innerWidth < 768 ? (
                  <X size={20} />
                ) : isCollapsed ? (
                  <Menu size={20} />
                ) : (
                  <X size={20} />
                )}
              </button>
            </div>
          </div>

          <nav className=" overflow-hidden ">
            <p
              className={`text-secondary font-bold  ${
                isCollapsed ? "text-center" : "pl-6"
              } transition-all duration-300 py-5`}
            >
              MENU
            </p>
            <div>
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex relative">
                    {pathname === item.href && (
                      <div className="bg-primary-gradient absolute h-full w-2 rounded-r-full"></div>
                    )}

                    <Link
                      href={item.href}
                      className={`
                          w-full flex items-center gap-3  py-3 transition-colors
                          ${
                            pathname === item.href
                              ? " text-text-color"
                              : "text-secondary hover:text-text-color hover:bg-primary-gradient"
                          }
                          ${isCollapsed ? "md:justify-center " : "pl-5"}
                        `}
                      title={isCollapsed ? item.href : ""}
                    >
                      <Icon
                        size={20}
                        strokeWidth={`${pathname === item.href ? "3" : "2"}`}
                        color={`${
                          pathname === item.href ? "#0b4d3a" : "#696969"
                        }`}
                      />
                      <span
                        className={`${isCollapsed ? "hidden md:hidden" : ""}  ${
                          pathname === item.href ? "  font-bold" : " "
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        <LogoutButton isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
