"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./customButton";
import Image from "next/image";
import { useAppContext } from "@/app/context/context";
import { cn } from "@/lib/utils";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

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

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
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
        <div className="flex items-center relative z-50 justify-center gap-5">
          <CustomButton active>LAUNCH APP</CustomButton>

          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative flex  z-50 gap-2 flex-col items-end text-white"
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] bg-black/95 lg:hidden z-50"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
                <CustomButton
                  onClick={() => {
                    toggleState("about");
                    toggleMenu();
                  }}
                  active={state.about}
                >
                  ABOUT
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    toggleState("token");
                    toggleMenu();
                  }}
                  active={state.token}
                >
                  TOKENOMICS
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    toggleState("talk");
                    toggleMenu();
                  }}
                  active={state.talk}
                >
                  TALK
                </CustomButton>
              </div>
              <div className="flex justify-center absolute w-full bottom-10 items-center md:hidden gap-8">
                <Link
                  href="https://github.com"
                  className="text-white transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://github.com"
                  className="text-white transition-colors"
                >
                  <Image src="/x.svg" alt="logo" width={20} height={20} />
                </Link>
                <Link
                  href="https://github.com"
                  className="text-white transition-colors"
                >
                  <Image src="/dex.svg" alt="logo" width={20} height={20} />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-white text-white transition-colors"
                >
                  <Twitter size={20} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
