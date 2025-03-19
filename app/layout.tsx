import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} ${montserrat.variable} font-medium`}>
          <div className="mx-6 sm:mx-8">
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
            <main className="flex-1 py-6">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
