"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  {  name: "Services", href: "#services" },
  {  name: "Process", href: "#process" },
  {  name: "Projects", href: "#projects" },
  {  name: "Why Us", href: "#why-us" },
];

export default function NavList() {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const node = e.currentTarget;
    const rect = node.getBoundingClientRect();
    setLeft(node.offsetLeft);
    setWidth(rect.width);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
      <ul
        onMouseLeave={handleMouseLeave}
        className="relative hidden sm:flex mx-auto flex w-fit  rounded-full  p-1.5"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            onMouseEnter={handleMouseEnter}
            className="z-10 block cursor-pointer px-4 py-2  font-medium text-[17px] transition-colors duration-200 hover:text-secondary/90 text-secondary "
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <motion.li
          animate={{ left, width, opacity }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute inset-0 my-1.5 rounded-full bg-frame"
        />
      </ul>
  );
}
