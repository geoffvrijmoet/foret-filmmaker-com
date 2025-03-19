"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "MY WORK",
    href: "/my-work",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export function MainNav() {
  return (
    <nav className="flex items-center justify-center w-full space-x-24 mt-32">
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1] }}
          transition={{ 
            duration: 0.05,
            delay: index * 0.02,
            times: [0, 0.1, 0.2],
            ease: "linear"
          }}
          className="relative"
        >
          <Link
            href={item.href}
            className="text-sm font-medium relative px-2 py-1 hover:text-black hover:before:absolute hover:before:inset-0 hover:before:bg-[#d3d6e8f6] hover:before:z-[-1] hover:before:transition-all hover:before:duration-100 hover:before:origin-left hover:before:scale-x-100 before:scale-x-0 before:origin-left before:transition-all before:duration-100"
          >
            {item.title}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}