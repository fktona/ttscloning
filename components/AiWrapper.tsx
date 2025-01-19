"use client";

import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    rotateX: 5,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
  },
  out: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    rotateX: -5,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

interface AIWrapperProps {
  children: React.ReactNode;
}

export const AIWrapper: React.FC<AIWrapperProps> = ({ children }) => (
  <div className="perspective-1000 h-full relative ">
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="h-full w-full text-white"
    >
      {children}
    </motion.div>
  </div>
);
