"use client";

import Link from "next/link";

export function MainNav() {
  const items = [
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

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex gap-6 md:gap-10">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
} 