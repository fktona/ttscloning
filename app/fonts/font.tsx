import { Inter, Square_Peg, Sora } from "next/font/google";
import localFont from "next/font/local";

export const ppInter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const ppSquare_Peg = Square_Peg({
  weight: "400",
  variable: "--font-Square_Peg",
  subsets: ["latin"],
});

export const ppSora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-Sora",
});

export const ppbyte = localFont({
  src: "./ByteBounce.ttf",
  variable: "--font-byte",
});
