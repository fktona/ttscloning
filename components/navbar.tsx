"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./customButton";
import Image from "next/image";
import { useAppContext } from "@/app/context/context";
import { cn } from "@/lib/utils";
import { Github, Twitter } from "lucide-react";

const AnimatedButtonText = ({
  label,
  isHovered,
}: {
  label: string;
  isHovered: boolean;
}) => {
  return (
    <div className="relative">
      <motion.div
        className="transition-transform duration-300 ease-in-out transform"
        animate={{ y: isHovered ? "-150%" : "0%" }}
        transition={{ duration: 0.07 }}
      >
        {label}
      </motion.div>
      <motion.div
        className="absolute top-[150%] left-0 transition-transform duration-300 ease-in-out transform"
        animate={{ y: isHovered ? "-150%" : "0%" }}
        transition={{ duration: 0.07 }}
      >
        {label}
      </motion.div>
    </div>
  );
};

export default function Nav() {
  const { state, toggleState } = useAppContext();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleMouseEnter = (button: string) => setHoveredButton(button);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <header className="relative md:px-8 top-0 w-full">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={30}
          height={30}
          onClick={() => toggleState("home")}
          className="cursor-pointer"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {["about", "token", "talk"].map((item) => (
            <CustomButton
              key={item}
              onClick={() => toggleState(item as any)}
              //@ts-ignore
              active={state[item]}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              className="group relative overflow-hidden"
            >
              <AnimatedButtonText
                label={item.toUpperCase()}
                isHovered={hoveredButton === item}
              />
            </CustomButton>
          ))}
        </div>
        <div className="flex items-center justify-center gap-5">
          <CustomButton active>LAUNCH APP</CustomButton>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setHoveredButton(null)}
            className="lg:hidden relative flex gap-2 flex-col items-end text-white"
            aria-label="Toggle relative menu"
          >
            <div
              className={cn("lg:w-16 w-12 h-[2px] bg-white transition-all")}
            />
            <div
              className={cn("lg:w-12 w-8 h-[2px] bg-white transition-all")}
            />
            <div className={cn("lg:w-8 w-4 h-[2px] bg-white transition-all")} />
          </button>
        </div>
      </nav>
    </header>
  );
}
