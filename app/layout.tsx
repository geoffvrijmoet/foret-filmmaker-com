import { ClerkProvider } from '@clerk/nextjs'
import { Montserrat } from 'next/font/google'
import './globals.css'
import type { Metadata } from "next";
import dynamic from 'next/dynamic';

const NavWrapper = dynamic(() => import('@/components/nav-wrapper'), { ssr: false });

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Foret Filmmaker",
  description: "Portfolio of video work by Foret Filmmaker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} ${montserrat.variable} font-medium`}>
          <NavWrapper>{children}</NavWrapper>
        </body>
      </html>
    </ClerkProvider>
  )
}
