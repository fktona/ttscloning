import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppProvider from "./context/context";
import { AnimatePresence } from "framer-motion";
import { ppInter, ppbyte } from "./fonts/font";
import React from "react";
import { Suspense } from "react";
import Wrapper from "@/components/wrapper";

export const meta: Metadata = {
  title: "TRUTH INTELIGENCE",
  description:
    "Experience the first ever AI intelligence to land on Truth Social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppInter.variable} ${ppbyte.variable} overflow-x-hidden antialiased isolate`}
      >
        <AppProvider>
          <Suspense fallback={<div>...</div>}>
            <Wrapper>
              <div className="min-h-dvh pt-2 max-w-screen-2xl mx-auto flex flex-col lg:gap-8 justify-between w-full">
                <Navbar />
                <main className="grow z-20 scale-90">{children}</main>
                <AnimatePresence>
                  <Footer />
                </AnimatePresence>
              </div>
            </Wrapper>
          </Suspense>
        </AppProvider>
      </body>
    </html>
  );
}
