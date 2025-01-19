import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function CustomButton({
  children,
  className,
  onClick,
  active,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <Button
      variant={"ghost"}
      size={"default"}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "flex items-center group  hover:bg-white/10 rounded-none hover:text-white/70 relative justify-center text-white",
        className
      )}
    >
      <>
        {active && (
          <React.Fragment>
            <div
              className="w-2
             absolute top-0 left-0 group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-transform duration-500 aspect-square  border-t border-l border-white"
            />
            <div
              className="w-2
             aspect-square border-t group-hover:translate-x-[-4px] group-hover:translate-y-[4px] transition-transform duration-500  border-r absolute top-0 right-0 border-white"
            />
            <div
              className="w-2
             aspect-square border-b border-l group-hover:translate-x-[4px] group-hover:translate-y-[-4px] transition-transform duration-500 absolute bottom-0 left-0 border-white"
            />
            <div
              className="w-2
             aspect-square border-b border-r absolute group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform duration-500 bottom-0 right-0 border-white"
            />
          </React.Fragment>
        )}
      </>
      <span> {children}</span>
    </Button>
  );
}
