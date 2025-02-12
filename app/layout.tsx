import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { atkinson } from './fonts'
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
        <body className={`${atkinson.className} ${atkinson.variable}`}>
          <div className="m-6 sm:m-8">
            <nav>
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center relative">
                  <div className="absolute left-0 text-2xl font-semibold">Dustin Foret</div>
                  <MainNav />
                  <MobileNav className="md:hidden" />
                  <div className="absolute right-0">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </header>
            </nav>
            <main className="flex-1 container py-6">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
