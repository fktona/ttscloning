"use client";

import { motion, AnimatePresence } from "framer-motion";
import About from "./about";
import Home from "./home";
import Talk from "./talk";
import TokenomicsContent from "./token";
import { useAppContext } from "./context/context";
import { AIWrapper } from "@/components/AiWrapper";

// ... (keep the pageVariants, pageTransition, and AIWrapper as before)

export default function HomePage() {
  const { state } = useAppContext();

  return (
    <div className="   text-white absolute  h-full w-full">
      <AnimatePresence mode="wait">
        {state.home && (
          <AIWrapper key="home">
            <Home />
          </AIWrapper>
        )}
        {state.about && (
          <AIWrapper key="about">
            <About />
          </AIWrapper>
        )}
        {state.talk && (
          <AIWrapper key="talk">
            <Talk />
          </AIWrapper>
        )}
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
