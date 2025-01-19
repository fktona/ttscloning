"use client";

import { motion, AnimatePresence } from "framer-motion";
import About from "../components/about";
import HomePage from "../components/home";
// import Talk from "../components/talk";
import TokenomicsContent from "../components/token";
import { useAppContext } from "./context/context";
import { AIWrapper } from "@/components/AiWrapper";

// ... (keep the pageVariants, pageTransition, and AIWrapper as before)

export default function Home() {
  const { state } = useAppContext();

  return (
    <div className="text-white absolute  h-full w-full">
      <AnimatePresence mode="wait">
        {state.home && (
          <AIWrapper key="home">
            <HomePage />
          </AIWrapper>
        )}
        {state.about && (
          <AIWrapper key="about">
            <About />
          </AIWrapper>
        )}
        {/* {state.talk && (
          <AIWrapper key="talk">
            <Talk />
          </AIWrapper>
        )} */}
        {state.token && (
          <AIWrapper key="token">
            <TokenomicsContent />
          </AIWrapper>
        )}

        {/* <AnimatePresence>{!state.talk && <Footer />}</AnimatePresence> */}
      </AnimatePresence>
    </div>
  );
}
