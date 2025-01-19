"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CustomButton from "@/components/customButton";

export default function Home() {
  return (
    <div className="h-full font-inter w-full flex flex-col items-center justify-between">
      <div className=" w-full h-full    flex items-start  justify-center text-center">
        <span className="md:text-[56px] font-[200] text-[40px] uppercase">
          truth <br /> intelligence
        </span>
      </div>

      <div className="absolute bottom-0 flex justify-center  flex-col md:flex-row items-center gap-2 left-1/2 -translate-x-1/2 font-mono text-sm text-zinc-400">
        <CustomButton active={true} className="">
          ExCedGq3QtqWZ2Gjjxqy4GRXBdtf2MmGebnr3Tnpump
        </CustomButton>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              "ExCedGq3QtqWZ2Gjjxqy4GRXBdtf2MmGebnr3Tnpump"
            )
          }
        >
          <Image src="/paste.png" alt="logo" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

{
  /* <iframe
        src="https://my.spline.design/particlenebula-d9955b985ebf97c5e777920e36e8b345/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 -z-10 "
      ></iframe> */
}
