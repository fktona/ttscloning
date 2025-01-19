import Footer from "@/components/footer";
import React from "react";

function About() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div
        className="relative  md:max-w-3xl p-4 mx-auto
        
        
      "
      >
        <div
          className="w-6
       absolute top-0 left-0 aspect-square  border-t-2 border-l-2 border-white"
        />
        <div
          className="w-6
       aspect-square border-t-2  border-r-2 absolute top-0 right-0 border-white"
        />
        <div
          className="w-6
       aspect-square border-b-2 border-l-2 absolute bottom-0 left-0 border-white"
        />
        <div
          className="w-6
       aspect-square border-b-2 border-r-2 absolute bottom-0 right-0 border-white"
        />
        <p className="text-white mx-auto blurs md:p-4 p-2 leading-relaxed text-[16px]">
          conversation is at the heart of connection—it sparks ideas, builds
          relationships, and drives interaction. it's how we share who we are
          and what we stand for. axis was created to bring that same human
          essence to the digital world. axis is a framework that empowers you to
          create conversational agents with their own personalities. whether
          it's an assistant for your business, a translator with flair, or an
          entertaining companion, axis helps you bring these agents to life with
          ease. for now, creating agents with axis requires some hands-on
          work—but that's part of the journey! our vision is to make it easier
          for everyone with a simple, intuitive dashboard where you'll be able
          to generate, customize, and manage agents effortlessly. while we work
          toward that, you can explore our demo on the site to see how
          conversations come to life and get inspired by what's possible. axis
          isn't just about building agents; it's about creating meaningful
          digital interactions. with a vision that blends cutting-edge
          technology and human creativity, axis opens up new possibilities for
          how people and ai connect. create agents that feel alive, spark
          conversations, and leave lasting impressions. conversation,
          reimagined.
        </p>
      </div>
    </div>
  );
}

export default About;
