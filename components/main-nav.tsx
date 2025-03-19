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
    <nav className="flex items-center justify-center w-full space-x-24">
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}
          transition={{ 
            duration: 0.2,
            delay: index * 0.15 - 0.1,
            times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            ease: "linear"
          }}
        >
          <Link
            href={item.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.title}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}