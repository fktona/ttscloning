import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="  w-full p-4 bottom-0 absolute px-8 z-20  max-w-screen-2xl mx-auto    flex md:justify-between   justify-center  items-center text-zinc-500 text-sm">
      <p>© truth_intelligence 2025 all right reserved</p>
      <div className="md:flex items-center w-full md:w-auto gap-8 hidden ">
        <Link
          href="https://github.com/TruthIntel/TruthAutonomy"
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
        <Link href="" className="text-white  transition-colors">
          {" "}
          <Image src="/dex.svg" alt="logo" width={20} height={20} />
        </Link>
        <Link
          href="https://x.com/truthintel?s=21&t=Tfcin0ZusXLzV23JexYBuA"
          className="hover:text-white text-white transition-colors"
        >
          <Image src="/logo.svg" alt="logo" width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
