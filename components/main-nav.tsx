"use client";

import Link from "next/link";

export function MainNav() {
  const items = [
    {
      title: "Editing Reel",
      href: "/editing-reel",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex gap-6 md:gap-10">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
} 