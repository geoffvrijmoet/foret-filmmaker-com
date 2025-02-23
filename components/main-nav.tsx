"use client";

import Link from "next/link";

export function MainNav() {
  const items = [
    { title: "HOME", href: "/" },
    { title: "MY WORK", href: "/my-work" },
    { title: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="flex w-full justify-between">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex-1 text-center text-lg font-extralight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 flex items-center justify-center"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}