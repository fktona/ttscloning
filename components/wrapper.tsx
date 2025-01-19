"use client";
import { useAppContext } from "@/app/context/context";

function Wrapper({ children }: { children: React.ReactNode }) {
  const { show } = useAppContext();

  return (
    <>
      {show ? (
        <>
          <iframe
            src="https://my.spline.design/particlenebulacopy-5f3382e8ff624a908a21b10a995d4d52/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="fixed top-0 inset-0 blur-md left-0 w-full h-full"
          ></iframe>
        </>
      ) : (
        <div className="fixed w-full h-full md:bg-landing bg-landing-mobile "></div>
      )}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60"></div>
      {children}
    </>
  );
}

export default Wrapper;
