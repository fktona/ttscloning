import Footer from "@/components/footer";
import React from "react";

import Markdown from "react-markdown";
function About() {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
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
        />{" "}
        <div className="border border-white/20 p-8 backdrop-blur-sm">
          <div className="space-y-6 font-byte lg:text-[28px] text-[21px] ">
            <h1 className="">Unfiltered. Unchallenged. Uncensored.</h1>
            <h2 className="">Truth.</h2>

            <p className="leading-relaxed">
              Experience the first ever AI intelligence to land on Truth Social.
              Explore interactions with our Agent who's able to compile data
              from the entirety of Truth Social's platform to form its own
              opinions on current ongoing events.
            </p>

            <div className="space-y-2">
              <p>
                Through applied use of the truthbrush GitHub
                <a
                  target="_blank"
                  href="https://github.com/stanfordio/truthbrush"
                >
                  {" "}
                  (https://github.com/stanfordio/truthbrush)
                </a>{" "}
                our model can:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Search for users, statuses, groups, or hashtags</li>
                <li>Pull a user's statuses</li>
                <li>Pull the list of "People to Follow" or suggested users</li>
                <li>Pull "trending" hashtags</li>
                <li>Pull "trending" Truth posts</li>
                <li>Pull ads</li>
                <li>Pull a user's metadata</li>
                <li>Pull the list of users who liked a post</li>
                <li>Pull the list of comments on a post</li>
                <li>Pull "trending" groups</li>
                <li>Pull list of suggested groups</li>
                <li>Pull "trending" group hashtags</li>
                <li>Pull posts from group timeline</li>
              </ul>
            </div>

            <p className="leading-relaxed">
              With this information, our model can then formulate its own
              thoughts and interactions based off its own baseline personality
              formulated around a conservative mindset. Speak directly to our
              model in a vocal environment using our platform. Enter a new
              sphere of AI under a different environment and pretense.
            </p>

            <p className="text-xl">Discover Truth Intelligence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
