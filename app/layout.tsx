"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppProvider, { useAppContext } from "./context/context";
import { AnimatePresence } from "framer-motion";
import { ppInter, ppbyte } from "./fonts/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state } = useAppContext();
  console.log(state);
  return (
    <html lang="en">
      <body
        className={`${ppInter.variable} ${ppbyte.variable} overflow-x-hidden antialiased isolate`}
      >
        {state.home && (
          <>
            <iframe
              src="https://my.spline.design/particlenebulacopy-5f3382e8ff624a908a21b10a995d4d52/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="fixed top-0 blur-md left-0 w-full h-full "
            ></iframe>
            <div className="fixed top-0 left-0 w-full h-full bg-black/60"></div>
          </>
        )}

        <AppProvider>
          <div className="min-h-dvh   pt-2 max-w-screen-2xl mx-auto flex flex-col  lg:gap-8  justify-between   w-full">
            <Navbar />
            <main className=" grow   relative z-20  scale-90 ">{children}</main>
            <AnimatePresence>{<Footer />}</AnimatePresence>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
