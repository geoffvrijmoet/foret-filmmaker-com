import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { exo } from './fonts'
import './globals.css'
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${exo.className} ${exo.variable}`}>
          <div className="mx-6 sm:mx-8">
            <nav>
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-14 items-center relative">
                  <MainNav />
                  <MobileNav className="md:hidden" />
                  <div className="absolute right-0">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </header>
            </nav>
            <main className="flex-1 py-6">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
