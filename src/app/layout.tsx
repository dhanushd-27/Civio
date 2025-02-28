import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google'
 
const geist = DM_Sans({
  subsets: ['latin'],
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Civio",
  description: "Generated by create next app",
};