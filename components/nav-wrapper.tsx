"use client";

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";
import { usePathname } from 'next/navigation';

interface NavWrapperProps {
  children: React.ReactNode;
}

export default function NavWrapper({ children }: NavWrapperProps) {
  const pathname = usePathname();
  const showNav = pathname === '/' || pathname.startsWith('/about');

  return (
    <div className="mx-6 sm:mx-8">
      {showNav && (
        <nav>
          <header className="sticky top-0 z-50 w-full">
            <div className="flex h-14 items-center relative">
              <MainNav />
              <MobileNav className="md:hidden" />
              <div className="absolute right-0">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </header>
        </nav>
      )}
      <main className="flex-1 py-6">{children}</main>
      <Footer />
    </div>
  );
} 