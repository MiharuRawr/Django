"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        {/* @ts-ignore */}
        <ThemeProvider enableSystem={true} attribute="class">
          {/* @ts-ignore */}
          <Navbar />
          {children}
          {/* @ts-ignore */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
